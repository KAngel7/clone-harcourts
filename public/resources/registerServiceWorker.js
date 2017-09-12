const storage = localStorage || window.localStorage;

const applicationServerPublicKey = getPublicKey();

let isSubscribed = false;
let swRegistration = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/resources/service-worker.js')
    .then(function (swReg) {
      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function (error) {
      console.log('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
}
function getPublicKey() {
  var url = 'http://api.saola.me/smartdatics-saola-api/restapi';
  // var url = 'http://192.168.0.106:8080/restapi';
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url + '/noti/pk', false);
  xmlHttp.send();
  var result = JSON.parse(xmlHttp.responseText);
  return result.content;
}
function postEndpoint(endpoint) {
  var url = 'http://api.saola.me/smartdatics-saola-api/restapi';
  // var url = 'http://192.168.0.106:8080/restapi';
  if (storage.getItem('user_token')) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url + '/noti/subscribe', false);
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xmlHttp.setRequestHeader('sessionId', storage.getItem('user_token'));
    xmlHttp.send(JSON.stringify(endpoint));
  }
}
function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
    .then(function (subscription) {
      updateSubscriptionOnServer(subscription);

      isSubscribed = true;
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);
    });
}
function updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  if (subscription) {
    var key = subscription.getKey('p256dh') ? subscription.getKey('p256dh') : '';
    var auth = subscription.getKey('auth') ? subscription.getKey('auth') : '';
    let subscriptionJson = {
      endpoint: subscription.endpoint,
      key: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : '',
      auth: auth ? btoa(String.fromCharCode.apply(null, new Uint8Array(auth))) : ''
    };
    postEndpoint(subscriptionJson);
  }
}
function initialiseUI() {
  if (storage.getItem('user_token') && !isSubscribed) {
    subscribeUser();
  }
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null);
    });
}
// function unsubscribeUser() {
//   swRegistration.pushManager.getSubscription()
//     .then(function (subscription) {
//       if (subscription) {
//         return subscription.unsubscribe();
//       }
//     })
//     .catch(function (error) {
//       console.log('Error unsubscribing', error);
//     })
//     .then(function () {
//       updateSubscriptionOnServer(null);
//       isSubscribed = false;
//     });
// }
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
// export function unregister() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready.then(registration => {
//       registration.unregister();
//     });
//   }
// }