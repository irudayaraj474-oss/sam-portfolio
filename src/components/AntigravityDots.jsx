import { useEffect, useRef } from "react";

export default function AntigravityDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let lastWidth = 0;
    let lastHeight = 0;

    // Track pointer (mouse or touch) coordinates
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140
    };

    // Responsive setup: particles scale based on screen size
    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;

      const parent = canvas.parentElement;
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;

      // Ignore trivial height-only changes on mobile (e.g. address bar scroll)
      if (Math.abs(width - lastWidth) < 15 && Math.abs(height - lastHeight) < 80 && particles.length > 0) {
        return;
      }

      lastWidth = width;
      lastHeight = height;

      // Crisp rendering on Retina/High-DPI displays without GPU overhead
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);

      // Device detection
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;

      // Adjust pointer reaction radius
      pointer.radius = isMobile ? 110 : isTablet ? 135 : 160;

      // Dynamic center and radial sizing
      const centerX = width / 2;
      const centerY = isMobile ? Math.min(height * 0.32, 280) : Math.min(height * 0.38, 380);

      // Proportional radii so particles comfortably frame the content
      const minRadius = isMobile 
        ? Math.min(width, height) * 0.22 
        : Math.min(width, height) * 0.18;

      const maxRadius = isMobile 
        ? Math.max(width, height) * 0.68 
        : Math.max(width, height) * 0.74;

      // Mobile: 11 rings (~140 dots) | Tablet: 15 rings (~240 dots) | Desktop: 18 rings (~360 dots)
      const ringCount = isMobile ? 11 : isTablet ? 15 : 18;
      const aspectMultiplier = isMobile ? 0.92 : 0.65; // Rounder on mobile portrait, wider on desktop

      particles = [];

      for (let r = 0; r < ringCount; r++) {
        const progress = r / (ringCount - 1);
        const currentRadiusX = minRadius + Math.pow(progress, 1.2) * (maxRadius - minRadius);
        const currentRadiusY = currentRadiusX * aspectMultiplier;

        // Density scaled appropriately
        const dotsInRing = Math.floor(
          (isMobile ? 10 : 16) + progress * (isMobile ? 22 : 36)
        );

        for (let i = 0; i < dotsInRing; i++) {
          const baseAngle = (i / dotsInRing) * Math.PI * 2 + progress * 0.75;
          const jitterRadius = (Math.random() - 0.5) * (isMobile ? 6 : 10);
          const radX = currentRadiusX + jitterRadius;
          const radY = currentRadiusY + jitterRadius * aspectMultiplier;

          const originX = centerX + Math.cos(baseAngle) * radX;
          const originY = centerY + Math.sin(baseAngle) * radY;

          // Google Antigravity Spectrum Color pre-cached as direct string for 60fps performance
          const color = getCachedColor(baseAngle);
          const length = isMobile ? 4 + Math.random() * 2.5 : 5 + Math.random() * 3.5;
          const thickness = isMobile ? 2.0 : 2.5;

          particles.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            angle: baseAngle + Math.PI / 2,
            color,
            length,
            thickness,
            spring: isMobile ? 0.07 : 0.05,
            damping: isMobile ? 0.78 : 0.82
          });
        }
      }
    };

    // Google spectrum color mapping
    const getCachedColor = (angle) => {
      const a = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      const alpha = (0.55 + Math.random() * 0.35).toFixed(2);

      if (a >= 0 && a < Math.PI * 0.4) {
        return `rgba(239, 68, 68, ${alpha})`; // Red to Coral
      } else if (a >= Math.PI * 0.4 && a < Math.PI * 0.75) {
        return `rgba(168, 85, 247, ${alpha})`; // Violet/Purple
      } else if (a >= Math.PI * 0.75 && a < Math.PI * 1.35) {
        return `rgba(37, 99, 235, ${alpha})`; // Royal Blue
      } else if (a >= Math.PI * 1.35 && a < Math.PI * 1.7) {
        return `rgba(14, 165, 233, ${alpha})`; // Electric Cyan
      } else {
        return `rgba(245, 158, 11, ${alpha})`; // Warm Amber
      }
    };

    // Desktop Mouse Events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = e.clientX - rect.left;
      pointer.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    // Mobile & Tablet Touch Events
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = touch.clientX - rect.left;
      pointer.targetY = touch.clientY - rect.top;
    };

    const handleTouchEnd = () => {
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setupCanvas, 150);
    };

    window.addEventListener("resize", onResize);
    setupCanvas();

    // 60FPS Render Loop optimized for Mobile & PC
    let lastRenderTime = 0;
    const render = (time) => {
      // Smooth interpolation for fluid cursor tracking
      pointer.x += (pointer.targetX - pointer.x) * 0.22;
      pointer.y += (pointer.targetY - pointer.y) * 0.22;

      ctx.clearRect(0, 0, lastWidth, lastHeight);

      // Subtle ambient breathing factor
      const breathing = Math.sin(time * 0.0012) * 0.035;

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // Gentle breathing around center
        const targetX = p.originX + (p.originX - lastWidth / 2) * breathing;
        const targetY = p.originY + (p.originY - lastHeight * 0.35) * breathing;

        // Interactive cursor distance
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = pointer.radius * pointer.radius;

        if (distSq < radiusSq && pointer.x > 0) {
          const dist = Math.sqrt(distSq);
          const force = 1 - dist / pointer.radius;
          const repulsion = force * 35;

          const angleToMouse = Math.atan2(dy, dx);
          p.vx += Math.cos(angleToMouse) * repulsion * 0.16;
          p.vy += Math.sin(angleToMouse) * repulsion * 0.16;

          // Tangential swirl
          const swirlAngle = angleToMouse + Math.PI / 2;
          p.vx += Math.cos(swirlAngle) * force * 3.5;
          p.vy += Math.sin(swirlAngle) * force * 3.5;

          p.angle += (angleToMouse - p.angle) * 0.08;
        }

        // Spring acceleration
        const ax = (targetX - p.x) * p.spring;
        const ay = (targetY - p.y) * p.spring;

        p.vx = (p.vx + ax) * p.damping;
        p.vy = (p.vy + ay) * p.damping;

        p.x += p.vx;
        p.y += p.vy;

        // High-performance ellipse drawing: 0 save/restore context pushes
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.length * 0.5, p.thickness * 0.5, p.angle, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
