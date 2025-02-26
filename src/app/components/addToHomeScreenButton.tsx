import React, { useState, useEffect } from 'react';
import Button from './button';
import { BeforeInstallPromptEvent } from './deferredPrompt';

const AddToHomeScreenButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // Prevent the default mini-infobar or dialog

      // Store the event for later use.
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the install button
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleClick = () => {
    if (deferredPrompt) {
        console.log('deferredPrompt');
        console.log(deferredPrompt);
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null); // Reset the deferred prompt
        setShowButton(false); // Hide the button
      });
    }
  };

  return (
    <>
      {showButton && (
        <Button onClick={handleClick}>Add to Home Screen</Button>
      )}
    </>
  );
};

export default AddToHomeScreenButton;