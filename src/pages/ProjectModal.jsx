import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../hooks/useSupabase';
import HoloCard from '../components/HoloCard';
export default function ProjectModal(){
  const {id}=useParams(); const nav=useNavigate(); const [proj,setP]=useState(null);
  useEffect(()=>{supabase.from('projects').select('*').eq('id',id).single().then(r=>setP(r.data));},[id]);
  if(!proj) return null;
  return <HoloCard proj={proj} onClose={()=>nav(-1)}/>;
}