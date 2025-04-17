import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
export default function GlowNode({project}){
  useEffect(()=>{
    if(!window.map) return;
    const el=document.createElement('div');
    el.className='w-3 h-3 rounded-full';
    el.style.cssText='background:#FFD100;box-shadow:0 0 8px #FFD100;animation:ping 2s infinite';
    el.onclick=()=>window.location.assign(`/project/${project.id}`);
    new mapboxgl.Marker(el).setLngLat([project.lng, project.lat]).addTo(window.map);
    return ()=>el.remove();
  },[]);
  return null;
}