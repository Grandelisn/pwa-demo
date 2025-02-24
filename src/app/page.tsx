'use client'

import InstallPrompt from "./installPrompt";
import { PushNotificationManager } from "./pushNotificationManager";


export default function Home() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
