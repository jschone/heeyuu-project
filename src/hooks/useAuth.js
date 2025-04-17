import { useEffect, useState } from 'react';
import { supabase } from './useSupabase';
export const useAuth = () => {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    setUser(supabase.auth.user());
    const { data } = supabase.auth.onAuthStateChange((_e,session)=>setUser(session?.user));
    return ()=>data?.subscription.unsubscribe();
  },[]);
  return { user, signIn:()=>supabase.auth.signIn({ provider:'google'}), signOut:()=>supabase.auth.signOut() };
};
