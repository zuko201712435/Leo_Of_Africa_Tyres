// Setup Alert Boxes
const alertBoxesData = [
  {
    url: `https://maps.app.goo.gl/6gwbvcAP8LdTyMnb6`,
    img: `./media/reviewers/Danielle_Marie.webp`,
    name: `Danielle Marie`,
    body: `I just bought a used vehicle and a day later turns out I need brakes. I found a Car Club Tire & auto on Groupon. I drove 51 minutes with no brakes just to get there. Thinking I just needed brake pads I was not financially prepared to afford much more than that. Turns out I need orders also. I'm a single mom and can't afford it. Everyone there was super helpful and did their best to help me and found the right option for my situation and I left with all 4 new brake pads and 2 new front rods. I won't be going anywhere else from now on. Everyone was so nice and very professional and treated me very kindly. Thank you so much 👍😊`,
  },
  {
    url: `https://goo.gl/maps/SJc9B8wmXW4ezHcF6`,
    img: `./media/reviewers/Lex_Scooter.webp`,
    name: `Lex Scooter`,
    body: `I will always be back to this location for service on my vehicles . I read a review for them that read "this location restored their faith in humanity" & I couldn't agree more. Thank you for doing ,all y'all can do ,for your customers. Fair prices & they gave me a fair quote over the phone , WITH EASE, after calling around for days to find the best deal on brakes .. I went the next day , around a general time i thought I could make it & it was one of the best experiences I've had at an auto repair shop. Can't thank them enough super trust worthy, Will be !!`,
  },
  {
    url: `https://goo.gl/maps/hDdZ7p2JEXzQrLyB9`,
    img: `./media/reviewers/Mercy_Ares.webp`,
    name: `Mercy Ares`,
    body: `Found this place on Groupon, they take appts & walk-ins. Arrived and was serviced immediately, the staff employees are professional and courteous. Amazing customer service experience. Super clean facility with an indoor AC comfortable waiting area, very clean bathrooms and free coffee! Was well worth the over an hour drive to get here but I'll definitely be returning even without Groupon to fix other issues on both my minivan & suv!`,
  },
  {
    url: `https://maps.app.goo.gl/ZrkBPvtVE1q8PyoA7`,
    img: false,
    name: `Sandra Jordan`,
    body: `My fiance was told about how "Great" Car Club Tire is by a co-worker and how Reasonable and Professional they were. I got my struts done on my car, the price was very reasonable. We took my car that morning and they finished the work by evening. Thank you for a Great job👍🏽 …`,
  },
  {
    url: `https://maps.app.goo.gl/kA71gK8pm4hP5vtz9`,
    img: false,
    name: `Shalandra Davis`,
    body: `I have a Toyota Prius, which is a hybrid vehicle. The battery was no good the owner of the shop and his brother fixed my vehicle in record timing. They were very fast very efficient and I highly recommend the services. I will always use them as my mechanics, the honesty and prices you can’t beat.`,
  },
  {
    url: `https://maps.app.goo.gl/vp4xVF3Ykv3xeHpw5`,
    img: false,
    name: `Victory Karate`,
    body: `I just recently bought a used vehicle and a day later turns out I need brakes. I found a Car Club Tire & auto on Groupon. I drove 51 minutes with no brakes just to get there. Thinking I just needed brake pads I was not financially prepared to afford much more than that. Turns out I need orders also. I'm a single mom and can't afford it. Everyone there was super helpful and did their best to help me and find an option for my situation and I left with all 4 new brake pads and 2 new front roders. I won't be going anywhere else from now on. Everyone was so nice and very professional and treated me very kindly. Thank you so much !!!`,
  },
  {
    url: `https://goo.gl/maps/qARRRYUnj4GqAedLA`,
    img: false,
    name: `Maybelline Sierra`,
    body: `I needed 4 new tires, a wheel alignment and rear brake pads and rotors for my 2018 Honda Accord. I called at least 6 places for quotes and Car Club gave me the best deal by far. I called them back several times with new questions while I was still shopping around for price quotes and each time, they were super patien+t and kind with me. When I finally decided to go with them, they got me in for service the very next day and did a great job! Now we will be bringing them our second car as well for some needed routine maintenance. I highly recommend them!`,
  },
];
const aletBoxHtml = alertBoxesData.map((rv) => {

  const avatar = rv.img
    ? `<img decoding="async" loading="lazy" width="26" height="26" src="${rv.img}" alt="Google Reviewer's Photo">`
    : `<i class='bx bx-user p-1 border rounded-circle'></i>`;

  const output =
  `<li class="glide__slide h-auto">
    <figure class="h-100">
      <figcaption class="text-center text-md-start mb-2 fw-medium">
        <a href="${rv.url}" title="5 star Google Review" target="_blank" rel="nofollow">
          ${avatar} ${rv.name} &#8212; <i class="bx bxl-google"></i> <i class="bx bx-map-alt"></i>
        </a>
      </figcaption>
      <div class="star-ratings mb-2 text-center text-md-start">
        <i class="bxs-star bx"></i>
        <i class="bxs-star bx"></i>
        <i class="bxs-star bx"></i>
        <i class="bxs-star bx"></i>
        <i class="bxs-star bx"></i>
      </div>
      <blockquote class="blockquote">"${rv.body}"</blockquote>
    </figure>
  </li>`;

  return output;

});
const aletBoxesElement = document.getElementById("review-slides");
if (aletBoxesElement) aletBoxesElement.innerHTML = aletBoxHtml.join("");
