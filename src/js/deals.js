// Setup Alert Boxes
const alertBoxesData = [
  {
    body: `We are Open 7 days a week.`,
  },
  {
    body: `Both Appointments and Walkins are Welcome.`,
  },
  {
    body: `Special Discounts for Veterans & Military Personel, Students, and Senior Citizens.`,
  },
];
const alertBoxHtml = alertBoxesData.map((bx) => {
  return `<div class="col-lg-4">
      <div class="p-3 fw-medium rounded bg-secondary border border-primary h-100">${bx.body}</div>
    </div>`;
});
const alertBoxesElement = document.getElementById("alert-boxes");
if (alertBoxesElement) alertBoxesElement.innerHTML = alertBoxHtml.join("");







// Setup Deals Slides
const dealsSlidesData = [
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Oil Change for $18.99 & Up`,
    body: `Oil Change for Only $18.99 & Up! Limited time offer. Expert technicians. Unbeatable price. Visit us Today for a quick Oil Change!`,
  },
  {
    icon: `<i class="icon bx bx-stop-circle display-6"></i>`,
    title: `Brake Pads for $79.99 & Up`,
    body: `Enhance your vehicle's safety with our limited-time brake pads deal! Expert replacements, special pricing. Act now, drive confidently!`,
  },
  {
    icon: `<i class="icon bx bx-color display-6"></i>`,
    title: `Wheel Alignment for $49.99 & Up`,
    body: `Wheel alignment for $49.99 & up! Limited time offer. Improved handling and fuel efficiency. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-wrench display-6"></i>`,
    title: `Tune Up for $299.99 & Up`,
    body: `Tune up for $299.99 & up! Limited time offer. Optimize performance and reliability. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 New Tires for $399.99 & Up`,
    body: `Get rolling with a fantastic deal! 4 new tires for $399.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 Used Tires for $199.99 & Up`,
    body: `Get road-ready with our special deal! 4 used tires for $199.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-car-mechanic display-6"></i>`,
    title: `Free Diagnostics with Repairing`,
    body: `Diagnostic service now FREE with any repair! Limited time offer. Let us find and fix the issue. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bx-wind display-6"></i>`,
    title: `Free AC Checks with Repairing`,
    body: `Stay cool this summer! Free AC checks with any repair. Limited time offer. Beat the heat, visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `Free Vehicle Inspection with any service.`,
    body: `Comprehensive vehicle inspection FREE with any service! Limited time offer. Visit us today!`,
  },
];
const dealsSlidesHtml = dealsSlidesData.map((sl) => {
  return `<li class="glide__slide h-auto">
      <div class="ag-courses_item h-100 bg-primary p-3 text-light rounded">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title fs-5 fw-medium mb-2">
          <div>${sl.icon}</div>
          <div>${sl.title}</div>
        </div>
        <div class="ag-course-body"> ${sl.body}</div>
      </div>
    </li>`;
});
const dealsSlidesElement = document.getElementById("deals-slides");
if (dealsSlidesElement) dealsSlidesElement.innerHTML = dealsSlidesHtml.join("");
