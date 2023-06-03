const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

const types = ["info", "success", "error"];

button.addEventListener("click", createToast);

function createToast(e,msg = null, type = null) {
  let notification = document.createElement("div");

  notification.classList.add("toast");

  notification.classList.add(type ? type : getRandomType());
  notification.innerText = msg ? msg : getRandomText();

  toasts.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}

function getRandomType() {
  let result = types[Math.floor(Math.random() * types.length)];
  return result;
}

function getRandomText() {
  let result = messages[Math.floor(Math.random() * messages.length)];
  return result;
}
