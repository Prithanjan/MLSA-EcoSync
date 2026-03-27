import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const flow = [
  { layer: 'Devices', name: 'IoT Sensors / Isaac Sim', format: 'MQTT / JSON' },
  { layer: 'Messaging', name: 'Mosquitto MQTT Broker', format: 'Paho listener' },
  { layer: 'Backend', name: 'FastAPI Backend', format: 'LSTM inference' },
  { layer: 'Brain', name: 'TensorFlow LSTM Model', format: 'Agent state' },
  { layer: 'Agents', name: 'LangGraph AI Agents', format: 'Trade agreement' },
  { layer: 'Blockchain', name: 'Polygon Smart Contract', format: 'WebSocket' },
  { layer: 'Frontend', name: 'React Live Dashboard', format: '' }
];

export function ArchitectureFlow() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto mt-12 w-full space-y-2">
      {flow.map((item, idx) => (
        <motion.div key={item.name} className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="w-full relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-500/60 transition-colors text-center flex flex-col md:flex-row items-center justify-between shadow-lg">
             <div className="text-[10px] md:text-xs uppercase tracking-widest text-emerald-500/80 font-bold w-full md:w-1/4 md:text-left mb-2 md:mb-0">{item.layer}</div>
             <div className="text-lg md:text-xl font-bold text-white w-full md:w-1/2">{item.name}</div>
             <div className="text-xs md:text-sm text-slate-400 w-full md:w-1/4 md:text-right mt-2 md:mt-0 font-mono tracking-tight">{item.format}</div>
          </div>
          {idx < flow.length - 1 && (
            <div className="py-2 text-emerald-500/40">
               <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
