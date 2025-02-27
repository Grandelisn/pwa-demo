importScripts( 'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js' );

// example of making your own listener for push notifications
self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json()
      const options = {
        body: data.body,
        icon: data.icon || '/icon.png',
        badge: '/food.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '2',
        },
      }
      event.waitUntil(self.registration.showNotification(data.title, options))
    }
  })
   
  self.addEventListener('notificationclick', function (event) {
    console.log('Notification click received.')
    event.notification.close()
    event.waitUntil(clients.openWindow('http://localhost:3000/'))
  })

  // example of using workbox to cache images
  workbox.routing.registerRoute( // register a route to match images
    ({request})=>request.destination=='image', // use the destination property to check if the request is for an image
    new workbox.strategies.CacheFirst() // use the CacheFirst strategy. 

  )