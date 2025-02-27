"use client"
import { useContext } from 'react'
import AddToHomeScreenButton from './addToHomeScreenButton'
import { AppContext } from '../appContext';

export default function InstallPrompt() {
  const { isStandalone, isIOS } = useContext(AppContext);
    
  

    if (isStandalone) {
      return null // Don't show install button if already installed
    }
   
    return (
      <div className="flex-col grow basis-1/3">
        <h3 className='text-2xl font-bold'>Install App</h3>
        <AddToHomeScreenButton/>
        {isIOS && (
          <p>
            To install this app on your iOS device, tap the share button
            <span role="img" aria-label="share icon">
              {' '}
              ⎋{' '}
            </span>
            and then Add to Home Screen.
            <span role="img" aria-label="plus icon">
              {' '}
              ➕{' '}
            </span>.
          </p>
        )}
      </div>
    )
  }