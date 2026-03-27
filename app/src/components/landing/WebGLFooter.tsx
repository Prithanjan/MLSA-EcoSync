import { useEffect, useRef } from 'react';

export function WebGLFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    // Simple fluid / aurora overlapping gradient animation
    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Create a few moving gradient blobs
      const blobs = [
        { x: width * 0.2 + Math.sin(time) * 100, y: height * 0.5 + Math.cos(time * 0.8) * 50, r: 200, color: 'rgba(16, 185, 129, 0.15)' },
        { x: width * 0.8 + Math.cos(time * 1.2) * 150, y: height * 0.4 + Math.sin(time * 0.5) * 80, r: 250, color: 'rgba(5, 150, 105, 0.15)' },
        { x: width * 0.5 + Math.sin(time * 0.7) * 200, y: height * 0.8 + Math.cos(time * 1.1) * 60, r: 300, color: 'rgba(52, 211, 153, 0.1)' },
      ];

      blobs.forEach(blob => {
        const radGrad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        radGrad.addColorStop(0, blob.color);
        radGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <footer className="relative w-full py-16 px-6 overflow-hidden border-t border-white/5 bg-slate-950 mt-20">
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />
      
      {/* Footer Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2 drop-shadow-md">
          Simulating 50 buildings · LSTM · LangGraph · Polygon Mumbai
        </h3>
        <p className="text-slate-300 text-base md:text-lg font-medium flex items-center justify-center gap-2">
          ⚡ EcoSync — Team C-Sharks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 font-light mt-4">
          <span>KIIT DU</span>
          <span>·</span>
          <span>2026</span>
          <span>·</span>
          <a
            href="https://github.com/ecosync-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors duration-300 underline underline-offset-4 decoration-emerald-500/30"
          >
            github.com/ecosync-hackathon
          </a>
        </div>
      </div>
    </footer>
  );
}
