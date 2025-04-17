import { useNavigate } from 'react-router-dom';
const Tile=({bg,icon,title,copy,to})=>{const nav=useNavigate();return(<div className="flex flex-col justify-center items-center rounded-xl text-center p-6 cursor-pointer shadow-lg" style={{background:bg}} onClick={()=>nav(to)}><span className="text-4xl mb-4">{icon}</span><h2 className="font-bold text-xl mb-2">{title}</h2><p className="text-sm">{copy}</p></div>)};
export default function Welcome(){return(<div className="grid grid-cols-2 gap-6 p-8 h-screen bg-[#0E1B2C] text-[#0E1B2C] font-semibold">
  <Tile bg="#FFD100" icon="🛠" title="Launch" copy="Share it with the world" to="/create-project"/>
  <Tile bg="#00B295" icon="💡" title="Back ideas" copy="Support bold projects" to="/ideas"/>
  <Tile bg="#F4F4F4" icon="🔍" title="Learn" copy="Find people" to="/matches"/>
  <Tile bg="#FFE256" icon="🎤" title="Bring together" copy="Host events" to="/events"/>
</div>);}