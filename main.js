let notification = null;
const closeButton = document.getElementById("close");
const clickButton = document.getElementById("click");

const notificationClicked = (data) => {
  console.log("Data: ", data);
  console.log("Notification clicked");
};

const getNotification = () => {
  return new Notification("JNM Notification!", {
    body: "You have a new notification on JNM!",
    // image: "./mail-background-white.png",
    // badge: "./mail-background-white.png",
    icon: "./mail-background-white.png",
    lang: "en-US",
    data: {
      // url: "https://example.com/review/12345",
      // status: "open",
      levisData: "It can be anything",
    },
    requireInteraction: true,
    // requireInteraction: false,
    silent: false,
    tag: new Date().getTime(),
    renotify: true,
    vibrate: true,
    // timestamp: new Date().toISOString(),
  });
};

const notifyMe = () => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    notification = getNotification();
    notification.onclick = notificationClicked;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        return;
      }
      notification = getNotification();
      notification.onclick = notificationClicked;
    });
  }
};

// clickButton.addEventListener("click", () => {
//   // notification.close();
//   console.log("Notification: ", notification);
//   notification.click();
// });

// closeButton.addEventListener("click", () => {
//   notification.close();
// });

setTimeout(() => {
  notifyMe();
}, 3000)
