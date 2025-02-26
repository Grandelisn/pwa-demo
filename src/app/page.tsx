'use client'

import Card from "./components/card";
import InstallPrompt from "./components/installPrompt";
import { PushNotificationManager } from "./components/pushNotificationManager";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:flex-row mx-4">
      <InstallPrompt />
      <PushNotificationManager />
      <Card />
    </div>
  )
}
