import { useEffect, useRef } from "react";

export default function AntigravityDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Track mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      isMoving: false
    };

    let mouseTimeout;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 100);
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isMoving = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Google Antigravity Color Spectrum based on angle
    const getSpectrumColor = (angle) => {
      // Normalize angle to [0, 2PI]
      let a = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      
      // Spectrum mapping:
      // Left side (~PI): Blues / Cyans
      // Bottom (~PI/2): Purples / Violets
      // Right side (~0 or 2PI): Corals, Oranges, Reds, Ambers
      // Top (~3PI/2): Teals & Indigos
      if (a >= 0 && a < Math.PI * 0.4) {
        // Red, Orange, Amber (Right to Bottom-Right)
        const t = a / (Math.PI * 0.4);
        return t < 0.5 ? "rgba(239, 68, 68, " : "rgba(249, 115, 22, "; // red to orange
      } else if (a >= Math.PI * 0.4 && a < Math.PI * 0.8) {
        // Violet / Magenta / Purple
        return "rgba(168, 85, 247, "; // purple
      } else if (a >= Math.PI * 0.8 && a < Math.PI * 1.3) {
        // Royal Blue / Deep Blue / Electric Blue
        return "rgba(37, 99, 235, "; // blue
      } else if (a >= Math.PI * 1.3 && a < Math.PI * 1.7) {
        // Cyan / Sky / Teal
        return "rgba(14, 165, 233, "; // sky/cyan
      } else {
        // Warm Amber / Golden Orange
        return "rgba(245, 158, 11, "; // amber
      }
    };

    // Particle collection
    let particles = [];

    const initParticles = () => {
      particles = [];
      const centerX = width / 2;
      const centerY = Math.min(height * 0.38, 380);

      // Create concentric elliptical rings radiating outwards
      const minRadius = Math.min(width, height) * 0.18;
      const maxRadius = Math.max(width, height) * 0.75;
      const ringCount = 22; // 22 concentric waves

      for (let r = 0; r < ringCount; r++) {
        const progress = r / (ringCount - 1);
        // Exponential ring spacing for that spacious galaxy look
        const currentRadiusX = minRadius + Math.pow(progress, 1.25) * (maxRadius - minRadius);
        const currentRadiusY = currentRadiusX * 0.62; // Elliptical perspective

        // Particles per ring increases with circumference
        const dotsInRing = Math.floor(18 + progress * 48);

        for (let i = 0; i < dotsInRing; i++) {
          // Slight spiral offset
          const baseAngle = (i / dotsInRing) * Math.PI * 2 + progress * 0.85;
          // Subtle organic jitter
          const jitterRadius = (Math.random() - 0.5) * 12;
          const radX = currentRadiusX + jitterRadius;
          const radY = currentRadiusY + jitterRadius * 0.6;

          const originX = centerX + Math.cos(baseAngle) * radX;
          const originY = centerY + Math.sin(baseAngle) * radY;

          // Color & dimensions
          const colorPrefix = getSpectrumColor(baseAngle);
          const alpha = 0.45 + Math.random() * 0.45;
          const length = 4.5 + Math.random() * 3.5; // dash length
          const thickness = 2.2 + Math.random() * 1.2;

          particles.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            angle: baseAngle + Math.PI / 2, // oriented tangent to radial curve
            colorPrefix,
            alpha,
            length,
            thickness,
            spring: 0.05 + Math.random() * 0.03,
            damping: 0.82 + Math.random() * 0.06,
            ringIndex: r
          });
        }
      }
    };

    initParticles();

    // Render loop
    let lastTime = 0;
    const render = (time) => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      ctx.clearRect(0, 0, width, height);

      const breathingFactor = Math.sin(time * 0.0012) * 0.04;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic subtle breathing at rest
        const breathX = p.originX + (p.originX - width / 2) * breathingFactor;
        const breathY = p.originY + (p.originY - height * 0.38) * breathingFactor;

        // Mouse distance
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interactive cursor physics: repulsion + swirl force
        if (dist < mouse.radius && mouse.x > 0) {
          const force = (1 - dist / mouse.radius);
          const repulsion = force * 45;

          // Radial repulsion
          const angleToMouse = Math.atan2(dy, dx);
          p.vx += Math.cos(angleToMouse) * repulsion * 0.15;
          p.vy += Math.sin(angleToMouse) * repulsion * 0.15;

          // Tangential vortex swirl around cursor
          const swirlAngle = angleToMouse + Math.PI / 2;
          p.vx += Math.cos(swirlAngle) * force * 4.5;
          p.vy += Math.sin(swirlAngle) * force * 4.5;

          // Temporary orientation tilt with mouse
          p.angle += (angleToMouse - p.angle) * 0.1;
        }

        // Spring force returning to origin
        const ax = (breathX - p.x) * p.spring;
        const ay = (breathY - p.y) * p.spring;

        p.vx = (p.vx + ax) * p.damping;
        p.vy = (p.vy + ay) * p.damping;

        p.x += p.vx;
        p.y += p.vy;

        // Draw dash pill dot
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.beginPath();
        // Rounded dash pill
        const w = p.length;
        const h = p.thickness;
        ctx.roundRect(-w / 2, -h / 2, w, h, h / 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      clearTimeout(mouseTimeout);
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
