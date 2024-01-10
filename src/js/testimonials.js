// Setup Alert Boxes
const alertBoxesData = [
  {
    url: `https://goo.gl/maps/hDdZ7p2JEXzQrLyB9`,
    img: `./media/reviewers/Mercy_Ares.webp`,
    name: `Mercy Ares`,
    body: `Found this place on Groupon, they take appts & walk-ins. Arrived and was serviced immediately, the staff employees are professional and courteous. Amazing customer service experience. Super clean facility with an indoor AC comfortable waiting area, very clean bathrooms and free coffee! Was well worth the over an hour drive to get here but I'll definitely be returning even without Groupon to fix other issues on both my minivan & suv!`,
  },
  {
    url: `https://goo.gl/maps/qARRRYUnj4GqAedLA`,
    img: `./media/reviewers/Maybelline_Sierra.webp`,
    name: `Maybelline Sierra`,
    body: `I needed 4 new tires, a wheel alignment and rear brake pads and rotors for my 2018 Honda Accord. I called at least 6 places for quotes and Car Club gave me the best deal by far. I called them back several times with new questions while I was still shopping around for price quotes and each time, they were super patien+t and kind with me. When I finally decided to go with them, they got me in for service the very next day and did a great job! Now we will be bringing them our second car as well for some needed routine maintenance. I highly recommend them!`,
  },
  {
    url: `https://goo.gl/maps/SJc9B8wmXW4ezHcF6`,
    img: `./media/reviewers/Lex_Scooter.webp`,
    name: `Lex Scooter`,
    body: `I will always be back to this location for service on my vehicles . I read a review for them that read "this location restored their faith in humanity" & I couldn't agree more. Thank you for doing ,all y'all can do ,for your customers. Fair prices & they gave me a fair quote over the phone , WITH EASE, after calling around for days to find the best deal on brakes .. I went the next day , around a general time i thought I could make it & it was one of the best experiences I've had at an auto repair shop. Can't thank them enough super trust worthy, Will be !!`,
  },
];
const aletBoxHtml = alertBoxesData.map((rv) => {
  return `<li class="glide__slide h-auto">
      <figure class="h-100">
        <figcaption class="text-center text-md-start mb-2 fw-medium">
          <a href="${rv.url}" title="5 star Google Review" target="_blank" rel="nofollow">
            <img decoding="async" loading="lazy" width="24" height="24" src="${rv.img}" alt="Google Reviewer's Photo">
            ${rv.name} &#8212; <i class="bx bxl-google"></i> <i class="bx bx-map-alt"></i>
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
});
const aletBoxesElement = document.getElementById("review-slides");
if (aletBoxesElement) aletBoxesElement.innerHTML = aletBoxHtml.join("");
