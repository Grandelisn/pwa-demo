'use client'

import InstallPrompt from "./installPrompt";
import { PushNotificationManager } from "./pushNotificationManager";


export default function Home() {
  return (
    <div className="flex">
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
