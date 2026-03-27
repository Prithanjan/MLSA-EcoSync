import { motion } from 'framer-motion';

const tech = [
  { name: 'TensorFlow LSTM', desc: 'Energy prediction AI' },
  { name: 'LangGraph', desc: 'Multi-agent negotiation' },
  { name: 'Polygon Blockchain', desc: 'Smart contract trades' },
  { name: 'FastAPI', desc: 'Real-time Python backend' },
  { name: 'NVIDIA Isaac Sim', desc: 'Digital twin simulation' },
  { name: 'React.js + Three.js', desc: '3D monitoring dashboard' }
];

export function BounceCardsTechStack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
      {tech.map((item, idx) => (
         <motion.div
           key={item.name}
           whileHover={{ scale: 1.05, y: -10 }}
           whileTap={{ scale: 0.95 }}
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
           className="relative p-6 rounded-3xl bg-slate-900/50 border border-emerald-500/20 shadow-xl overflow-hidden cursor-default group"
         >
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <div className="w-20 h-20 rounded-full bg-emerald-500 blur-2xl" />
           </div>
           <h3 className="text-2xl font-black text-white mb-2 relative z-10">{item.name}</h3>
           <p className="text-emerald-400 font-medium relative z-10">{item.desc}</p>
         </motion.div>
      ))}
    </div>
  );
}
