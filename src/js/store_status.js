// Store status
function checkStoreStatus() {
  // Set the timezone to Orange City, Florida, USA
  const timeZone = "America/New_York";
  const now = new Date();
  const orangeCityTime = new Date(
    now.toLocaleString("en-US", { timeZone: timeZone })
  );

  const dayOfWeek = orangeCityTime.toLocaleString("en-US", {
    timeZone,
    weekday: "long",
  });
  const hours = orangeCityTime.getHours();

  const isOpeningHours =
    (dayOfWeek === "Sunday" && hours >= 9 && hours < 17) ||
    (dayOfWeek !== "Sunday" && hours >= 8 && hours < 19);

  return isOpeningHours
    ? '<span class="open text-success fw-bold">Open</span> come on down'
    : '<span class="closed text-danger fw-bold">Closed</span> see you in the morning';
}
function detectDayToday() {
  const currentDate = new Date();
  const options = { weekday: "long" };
  const dayToday = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  const orangeCityTimeZone = "America/New_York"; // Time zone identifier for Orange City, Florida
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: orangeCityTimeZone,
  });

  const orangeCityDate = new Date(
    currentDate.toLocaleString("en-US", { timeZone: orangeCityTimeZone })
  );
  const orangeCityDayToday = new Intl.DateTimeFormat("en-US", options).format(
    orangeCityDate
  );

  return `${orangeCityDayToday} ${formattedTime}`;
}

function updateStatusRealtime() {
  document.getElementById(
    "storestatus"
  ).innerHTML = `${detectDayToday()}, We Are ${checkStoreStatus()}`;
}

updateStatusRealtime();
setInterval(updateStatusRealtime, 15000);
