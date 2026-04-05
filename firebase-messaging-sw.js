importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC94FgGHfX7w8dyMnQxiLBPwI66vYuS2r0",
    authDomain: "altcloud-24dc3.firebaseapp.com",
    databaseURL: "https://altcloud-24dc3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "altcloud-24dc3",
    storageBucket: "altcloud-24dc3.firebasestorage.app",
    messagingSenderId: "335868243516",
    appId: "1:335868243516:web:b8ae386ef64ef51b28dd39"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
