import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { supabase } from '../hooks/useSupabase';
import GlowNode from '../components/GlowNode';
export default function Home(){
  const [projects,setProjects]=useState([]);
  useEffect(()=>{supabase.from('projects').select('*').then(r=>setProjects(r.data||[]));},[]);
  useEffect(()=>{window.map=new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/dark-v11',center:[10,50],zoom:3.3});},[]);
  return <div id="map" className="w-full h-screen">{projects.map(p=> <GlowNode key={p.id} project={p}/> )}</div>;
}