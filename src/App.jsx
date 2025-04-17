import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Scan from './pages/Scan';
import ProjectModal from './pages/ProjectModal';
import Welcome from './pages/Welcome';
export default function App(){return(<BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/start" element={<Welcome/>}/><Route path="/scan" element={<Scan/>}/><Route path="/project/:id" element={<ProjectModal/>}/></Routes><RouteWatcher/></BrowserRouter>);} function RouteWatcher(){const {pathname}=useLocation();return <NavBar path={pathname}/>;}