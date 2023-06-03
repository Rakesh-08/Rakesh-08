const resetButton = document.getElementById("reset");
const submitBtn = document.getElementById("submit");
const homeUI = document.querySelector(".home");
const valueUI = document.querySelector(".value");

console.log(submitBtn);

// event listeners

resetButton.addEventListener("click", resetCounter);
submitBtn.addEventListener("click", showDateDiff);

function showDateDiff() {
  const selectedTime = document.getElementById("datetime");

  setInterval(CalCulateDiff, 1000, selectedTime);

  homeUI.classList.add("UI");
  valueUI.classList.remove("UI");
}

function CalCulateDiff(selectedTime) {
  let currentTime = new Date();
  let FutureTime = new Date(selectedTime.value);

  let diff = FutureTime.getTime() - currentTime.getTime();

  let DiffIndays = Math.floor(diff / (1000 * 60 * 60 * 24));

  let DiffInhours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let DiffInminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let DiffInseconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = DiffIndays;
  document.getElementById("hours").innerHTML = DiffInhours;
  document.getElementById("minutes").innerHTML = DiffInminutes;
  document.getElementById("seconds").innerHTML = DiffInseconds;
}

function resetCounter() {
  window.location.reload();
}
