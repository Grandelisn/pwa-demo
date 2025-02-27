'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { BurgerFormData } from './components/card';

type AppContextType = {
  formData: BurgerFormData | null;
  setFormData: Dispatch<SetStateAction<BurgerFormData | null>>;
  isStandalone: boolean;
  setIsStandalone: Dispatch<SetStateAction<boolean>>;
  isIOS: boolean;
  setIsIOS: Dispatch<SetStateAction<boolean>>;
  online: boolean;
  setOnline: Dispatch<SetStateAction<boolean>>;
};
export const AppContext =  createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<BurgerFormData | null>(null);
  const [isStandalone, setIsStandalone] = useState<boolean>(false)
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [online, setOnline] = useState<boolean>(true);
  useEffect(()=>{
    window.addEventListener("offline", () => {
        console.log("offline");
        setOnline(false);
        const formData = JSON.parse(sessionStorage.getItem("formData")!);
        console.log(formData);
    });
    
    window.addEventListener("online", () => {
        console.log("online");
        
        setOnline(true);
        const formData = JSON.parse(sessionStorage.getItem("formData")!);
        if(!formData.uploaded){
            alert('non-saved data detected, saving to server');
            // save to server
            // pull fresh data from server
            // setFormData(freshData);
            setFormData({...formData, uploaded: true});
            console.log(formData);
            sessionStorage.removeItem("formData");
        }
    });
          
  },[])

  return (
    <AppContext.Provider value={{formData, setFormData, isStandalone, setIsStandalone, isIOS, setIsIOS, online, setOnline}}>
      {children}
    </AppContext.Provider>
  );
};