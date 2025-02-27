'use client'

import { useContext, useEffect } from "react";
import { AppContext } from "./appContext";
import Card from "./components/card";
import InstallPrompt from "./components/installPrompt";
import { PushNotificationManager } from "./components/pushNotificationManager";


export default function Home() {
  const {setIsStandalone, setIsIOS, online, setOnline } = useContext(AppContext);

  useEffect(() => {
    console.log('useEffect');
    console.log(navigator.userAgent);
    if(typeof window !== 'undefined'){
      setIsIOS(
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream: unknown }).MSStream
      )
      setOnline(navigator.onLine);
      setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    }
  }, [])

  return (
    <div className="flex flex-col gap-4 md:flex-row mx-4">
      <h1 className={`text-2xl font-bold ${online ? "text-green-500" : "text-red-600"}`}>Online</h1>
        <InstallPrompt />
        <PushNotificationManager />
        <Card />
    </div>
  )
};
