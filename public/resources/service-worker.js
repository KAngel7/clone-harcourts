var baseUrl = 'localhost:3000'; //baseUrl = 'saola.me'
self.addEventListener('push', function (event) {
  try {
    console.log('Push notification: ', JSON.parse(event.data.text()).pushContent);
    const title = 'Saola.ME';
    const options = {
      body: JSON.parse(event.data.text()).pushContent,
      icon: JSON.parse(event.data.text()).image,
      data: {
        feedId: JSON.parse(event.data.text()).feedId
      }
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
        .then(() => self.registration.getNotifications())
        .then(notifications => {
          setTimeout(() => notifications.forEach(notification => notification.close()), 5000);
        }));
  } catch (err) { }
});
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(baseUrl + '/post/' + event.notification.data.feedId));
});