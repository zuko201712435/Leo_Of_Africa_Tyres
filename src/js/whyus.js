// Setup WhyUs Counter Boxes
const counterBoxesData = [
  {
    id: "business-counter",
    number: 5,
    text: "Years in Business",
  },
  {
    id: "tires-counter",
    number: 640,
    text: "Tires Changed",
  },
  {
    id: "wheels-counter",
    number: 2200,
    text: "Wheels Aligned",
  },
  {
    id: "oil-counter",
    number: 5000,
    text: "Oils Changed",
  },
];
const counterBoxesHtml = counterBoxesData.map((cb) => {
  return `<div id="${cb.id}" class="counter-widget ${cb.id} col-6 col-lg-3">
    <div class="counter-inner shadow-sm rounded-4 p-4 bg-secondary h-100">
      <div class="counter-container">
        <div class="counter-head fs-3">
          <span class="counter-number">${cb.number}</span>+
        </div>
      </div>
      <div>${cb.text}</div>
    </div>
  </div>`;
});
const counterBoxesElement = document.getElementById("counter-boxes");
if (counterBoxesElement) counterBoxesElement.innerHTML = counterBoxesHtml.join("");


// Setup WhyUs Counter Boxes
const reasonBoxesData = [
  {
    title: `Unmatched Expertise`,
    body: `At Car Club Tire & Auto Repair Service, our team of highly skilled and certified technicians brings years of experience and expertise to the table. You can trust us to handle your vehicle with precision and care, ensuring top-notch repairs and maintenance.`,
  },
  {
    title: `Customer-Centric Approach`,
    body: `We prioritize your satisfaction and go the extra mile to provide personalized attention to every customer. Our friendly and approachable team is always ready to listen to your concerns and offer tailored solutions that suit your specific needs.`,
  },
  {
    title: `Wide Range of Services`,
    body: `From tire work and maintenance to comprehensive auto repairs, we offer a diverse range of services under one roof. Whether it's routine maintenance or complex repairs, we've got you covered, saving you time and hassle.`,
  },
  {
    title: `Quality and Reliability`,
    body: `We are committed to using top-quality parts and materials in all our services. Our emphasis on reliability ensures that your vehicle receives the best possible care, enhancing its performance and longevity.`,
  },
  {
    title: `Transparent Pricing`,
    body: `At Car Club, we believe in transparent and fair pricing. You can count on us to provide honest estimates and no hidden fees, allowing you to make informed decisions without any surprises.`,
  },
  {
    title: `Swift Turnaround`,
    body: `We understand that your time is valuable, which is why we strive to deliver efficient and timely service. Our team works diligently to get you back on the road as quickly as possible, without compromising on quality.`,
  },
];
const reasonBoxesHtml = reasonBoxesData.map((rs) => {
  return `<div class="col-lg-4 col-6 col-12">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <div class="fs-5 text-primary fw-medium card-title">${rs.title}</div>
          ${rs.body}
        </div>
      </div>
    </div>`;
});
const reasaonBoxesElement = document.getElementById("reason-boxes");
if (reasaonBoxesElement) reasaonBoxesElement.innerHTML = reasonBoxesHtml.join("");


// animate counters
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let startTime = null;
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      startTime = performance.now();
      let count = 0;
      let duration = speed;
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount;
        } else {
          count = Math.floor(progress * targetCount);
          element.innerHTML = count;
        }
      }, 20);
    }
  });

  if (element) observer.observe(element);
}
countWhenVisible(
  document.querySelector(".business-counter .counter-number"),
  5,
  1000
);
countWhenVisible(
  document.querySelector(".tires-counter .counter-number"),
  640,
  1000
);
countWhenVisible(
  document.querySelector(".wheels-counter .counter-number"),
  2200,
  2000
);
countWhenVisible(
  document.querySelector(".oil-counter .counter-number"),
  5000,
  3000
);
