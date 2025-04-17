import { motion } from 'framer-motion';
export default function HoloCard({proj,onClose}){
  return(<div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50" onClick={onClose}>
    <motion.div initial={{rotateY:90}} animate={{rotateY:0}} transition={{type:'spring',stiffness:120,damping:18}} className="bg-white/10 border border-[#FFD100] rounded-2xl w-80 p-4 text-[#F9F9F9] backdrop-blur-md">
      <h2 className="font-bold text-lg mb-2">{proj.title}</h2>
      <p className="text-sm mb-4">{proj.description}</p>
      <button className="w-full py-2 bg-[#FFD100] text-[#0E1B2C] rounded-md" onClick={e=>{e.stopPropagation();alert('Demo fund!')}}>Back Project</button>
    </motion.div>
  </div>);
}