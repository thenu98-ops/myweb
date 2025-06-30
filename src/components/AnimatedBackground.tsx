import React, { useEffect, useRef } from 'react';
interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    // Initialize canvas size
    resizeCanvas();
    // Update canvas size when window is resized
    window.addEventListener('resize', resizeCanvas);
    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(canvas.width * canvas.height / 9000));
    const connectDistance = 150;
    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const directionX = (Math.random() - 0.5) * 0.8;
        const directionY = (Math.random() - 0.5) * 0.8;
        const color = 'rgba(255, 255, 255, 0.5)';
        particlesArray.push({
          x,
          y,
          directionX,
          directionY,
          size,
          color
        });
      }
    };
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
    };
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    // Update particle positions
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
        // Move particles
        particle.x += particle.directionX;
        particle.y += particle.directionY;
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.directionX = -particle.directionX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.directionY = -particle.directionY;
        }
      }
    };
    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      connectParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    };
    createParticles();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 bg-gray-900" style={{
    pointerEvents: 'none'
  }} />;
}