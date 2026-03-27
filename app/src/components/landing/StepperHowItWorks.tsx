import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: "Buildings Generate Solar", desc: "Each building has rooftop solar panels tracked by IoT sensors. Production, consumption, and battery level update every 15 minutes." },
  { num: '02', title: "AI Predicts What's Coming", desc: "Our LSTM neural network predicts the next hour's energy state for every building with 95% accuracy — before the surplus or deficit even happens." },
  { num: '03', title: "AI Agents Negotiate Trades", desc: "Every building has its own AI agent (LangGraph). When Agent A sees surplus and Agent B runs short, they negotiate a peer-to-peer trade automatically." },
  { num: '04', title: "Blockchain Seals the Deal", desc: "The agreed trade is written to a Polygon blockchain smart contract. Payment is automatic, transparent, and permanent." },
  { num: '05', title: "Live Dashboard Shows Everything", desc: "Every trade, prediction, and grid balance is visible in real time. Full transparency — from rooftop panel to blockchain transaction." }
];

export function StepperHowItWorks() {
  return (
    <div className="relative max-w-4xl mx-auto mt-14 space-y-12 pl-4 md:pl-0">
      <div className="absolute left-[36px] md:left-[39px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-500/50 via-teal-500/50 to-emerald-500/10" />
      {steps.map((step, idx) => (
        <motion.div 
           key={step.num}
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5, delay: idx * 0.15 }}
           className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
        >
           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
             <span className="text-xl md:text-2xl font-black bg-gradient-to-br from-emerald-400 to-green-500 bg-clip-text text-transparent">{step.num}</span>
           </div>
           <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all flex-1">
             <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
             <p className="text-slate-400 leading-relaxed">{step.desc}</p>
           </div>
        </motion.div>
      ))}
    </div>
  );
}
