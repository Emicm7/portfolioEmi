import { useEffect, useRef } from 'react';
import '../styles/AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      time += 0.01;
      
      // Fondo base negro
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradiente radial animado más visible
      const centerX = canvas.width / 2 + Math.sin(time * 0.5) * 100;
      const centerY = canvas.height / 2 + Math.cos(time * 0.5) * 100;
      const radius = 600 + Math.sin(time) * 200;

      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );

      gradient.addColorStop(0, 'rgba(26, 26, 46, 0.9)');
      gradient.addColorStop(0.3, 'rgba(22, 33, 62, 0.7)');
      gradient.addColorStop(0.6, 'rgba(15, 22, 36, 0.5)');
      gradient.addColorStop(1, 'rgba(10, 10, 10, 0.3)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Segundo gradiente para más profundidad
      const centerX2 = canvas.width / 2 - Math.cos(time * 0.7) * 150;
      const centerY2 = canvas.height / 2 - Math.sin(time * 0.7) * 150;
      const radius2 = 400 + Math.cos(time * 1.2) * 150;

      const gradient2 = ctx.createRadialGradient(
        centerX2, centerY2, 0,
        centerX2, centerY2, radius2
      );

      gradient2.addColorStop(0, 'rgba(22, 33, 62, 0.6)');
      gradient2.addColorStop(0.5, 'rgba(15, 22, 36, 0.4)');
      gradient2.addColorStop(1, 'rgba(10, 10, 10, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid más visible
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      const offsetX = (time * 30) % gridSize;
      const offsetY = (time * 30) % gridSize;

      // Líneas verticales
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Líneas horizontales
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Partículas más visibles
      ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time * 0.8 + i * 0.5) * canvas.width / 2.5) + canvas.width / 2;
        const y = (Math.cos(time * 0.6 + i * 0.5) * canvas.height / 2.5) + canvas.height / 2;
        const size = Math.sin(time + i) * 3 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Líneas de conexión entre partículas
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 15; i++) {
        for (let j = i + 1; j < 15; j++) {
          const x1 = (Math.sin(time * 0.8 + i * 0.5) * canvas.width / 2.5) + canvas.width / 2;
          const y1 = (Math.cos(time * 0.6 + i * 0.5) * canvas.height / 2.5) + canvas.height / 2;
          const x2 = (Math.sin(time * 0.8 + j * 0.5) * canvas.width / 2.5) + canvas.width / 2;
          const y2 = (Math.cos(time * 0.6 + j * 0.5) * canvas.height / 2.5) + canvas.height / 2;
          
          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
};

export default AnimatedBackground;
