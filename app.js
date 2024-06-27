// Partner Carousel

const swiper = new Swiper(".sample-slider", {
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 3000,
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
// Partner Carousel

// Product Carousel
const swiper2 = new Swiper(".sample-slider-2", {
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 3000,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
// Product Carousel

// lastest Post Section Landing Page starts
const lastestPosts = [
  {
    date: "25",
    month: "AUG",
    imgSrc: "./assets/landing-page/posts/latestPost1.png",
    category: "FOOD STORIES",
    description: "Lorem Ipsum is simply dummy text of the printing 1500s.",
  },
  {
    date: "20",
    month: "AUG",
    imgSrc: "./assets/landing-page/posts/latestPost2.png",
    category: "FOOD STORIES",
    description: "Lorem Ipsum is simply dummy text of the printing 1500s.",
  },
  {
    date: "02",
    month: "AUG",
    imgSrc: "./assets/landing-page/posts/latestPost3.png",
    category: "FOOD STORIES",
    description: "Lorem Ipsum is simply dummy text of the printing 1500s.",
  },
];

const postsContainer = document.getElementById(
  "landing-latest-posts-container"
);

lastestPosts.forEach((post) => {
  postsContainer.innerHTML += `
    <div class="landing-latest-post-box">
      <div class="landing-latest-post-image-box">
        <div class="landing-latest-post-tag">
          <p class="landing-latest-post-tag-date">${post.date}</p>
          <p>${post.month}</p>
        </div>

        <div class="landing-latest-post-poster">
          <img src="${post.imgSrc}" alt="latestPost" />
        </div>
      </div>

      <div>
        <span class="general-gradient-bg landing-latest-post-category">${post.category}</span>
      </div>

      <div class="landing-latest-post-description-box">
        <p>${post.description}</p>
        <span>
          <a href="#" class="uppercase"> Read More </a>
        </span>
      </div>
    </div>
  `;
});
// lastest Post Section Landing Page ends

// Plans Section Landing Page starts

const plans = [
  {
    name: "Basic Plan",
    priceMonthly: "$12 USD",
    priceYearly: "$200 USD",
    yearlyNote: "per year (2 months free)",
    details: [
      "All features of the Basic Plan",
      "Custom domain support",
      "Request page modifications from our support team",
    ],
    light: true,
  },
  {
    name: "Standard Plan",
    priceMonthly: "$20 USD",
    priceYearly: "$200 USD",
    yearlyNote: "per year (2 months free)",
    discount: "-30%",
    details: [
      "All features of the Basic Plan",
      "Custom domain support",
      "Request page modifications from our support team",
    ],
    light: false,
  },
  {
    name: "Premium Plan",
    priceMonthly: "$30 USD",
    priceYearly: "$300 USD",
    yearlyNote: "per year (2 months free)",
    details: [
      "All features of the Basic and Standard Plans",
      "Content monitoring and periodic AI analysis to keep your content up-to-date",
      "VIP support with ultra-fast response times and page modifications",
    ],
    light: true,
  },
];

const planscontainer = document.getElementById("pricing-plans-container");

plans.map((plan,i) => {
  const planElement = document.createElement("div");
  planElement.className = `landing-pricing-plan ${
    plan.light ? "landing-pricing-plan-light" : "landing-pricing-plan-dark"
  }`;
  planElement.innerHTML = `
        ${
          plan.discount
            ? `<div><h4 class="general-gradient-bg landing-pricing-plan-standard-discount">${plan.discount}</h4></div>`
            : ""
        }
        <div>
    <h2 class="landing-pricing-plan-name${
      i === 2 && plan.light ? "-dark2" :
      plan.light ? "-dark" :
      "-light"
    }">${plan.name}</h2>
          <div>
          
            <span class="landing-pricing-plan-price${
              plan.light ? "" : "-light"
            }">${plan.priceMonthly}</span>
            <span class="landing-pricing-plan-time${
              plan.light ? "-dark" : "-light"
            }">Per Month</span>
          </div>
          <div>
            <span class="landing-pricing-plan-price${
              plan.light ? "" : "-light"
            }">${plan.priceYearly}</span>
            <span class="landing-pricing-plan-time${
              plan.light ? "-dark" : "-light"
            }">${plan.yearlyNote}</span>
          </div>
          <div class="landing-pricing-plan-separator"></div>
        </div>
        <div class="landing-pricing-plan-details-container">
          ${plan.details
            .map(
              (detail) => `
            <div class="landing-pricing-plan-detail-box">
              <div class="landing-pricing-plan-detail-check">
                <img src="./assets/landing-page/plans/checkIcon${
                  plan.light ? "" : "Light"
                }.png" alt="checked" />
              </div>
              <p class="landing-pricing-plan-detail-para${
                plan.light ? "-dark" : "-light"
              }${detail.includes("modifications") ? "-highlighted" : ""}">
                ${detail}
              </p>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="choose-plan-box">
          <div class="choose-plan-button">
            <a href="#">Choose this plan</a>
            <div class="choose-plan-image-box">
              <img src="./assets/landing-page/plans/arrowRight.png" alt="arrow" />
            </div>
          </div>
        </div>
      `;
  planscontainer.appendChild(planElement);
});

// Plans Section Landing Page ends

// FAQ Section Landing Page starts

const faqs = [
  {
    question: "Qu'est-ce qu'une section FAQ?",
    answer:
      "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
  },
  {
    question: "Pourquoi les FAQ sont-elles importantes?",
    answer:
      "You can track your order status in the 'My Orders' section of your account.",
  },
  {
    question: "Où puis-je ajouter mes FAQ?",
    answer:
      "Yes, we ship internationally. Shipping costs will apply and will be added at checkout.",
  },
  {
    question: "Comment puis-je ajouter une nouvelle question/réponse?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Puis-je ajouter une image, une vidéo ou un GIF à ma FAQ?",
    answer:
      "You can contact our customer service team via the 'Contact Us' page on our website.",
  },
];

function toggleFaq(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.getElementById("landing-faq-section");

  const faqHtml = faqs
    .map(
      (faq) => `
        <div class="landing-faq-section-item">
            <div class="landing-faq-section-question" onclick="toggleFaq(this)">
            <div class="landing-faq-section-question-container">
                <span>${faq.question}</span>
            </div>
                <div class="landing-faq-section-plus-icon-container">
                <span class="landing-faq-section-plus-icon">+</span>
                </div>
            </div>
            <div class="landing-faq-section-faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `
    )
    .join("");

  faqContainer.innerHTML = faqHtml;
});

// FAQ Section Landing Page ends

// Blogs  Page starts

// const cardContainer = document.getElementById("cardDataList");

// const cardData = [
//   {
//     id: 1,
//     url: "./assets/blogs-page/blogs/card1.jpg",
//   },
//   { id: 2, url: "./assets/blogs-page/blogs/card2.jpg" },
//   { id: 3, url: "./assets/blogs-page/blogs/card3.jpg" },
//   { id: 4, url: "./assets/blogs-page/blogs/card4.jpg" },
//   { id: 5, url: "./assets/blogs-page/blogs/card5.png" },
//   { id: 6, url: "./assets/blogs-page/blogs/card6.jpg" },
//   { id: 7, url: "./assets/blogs-page/blogs/card7.jpg" },
//   { id: 8, url: "./assets/blogs-page/blogs/card8.jpg" },
//   { id: 9, url: "./assets/blogs-page/blogs/card9.jpg" },
// ];

// const card = cardData
//   .map(
//     (items) =>
//       `<div class="blogCard" key={${items.id}}>
//                         <div class="cardImageContainer">
//                             <img src="${items.url}" alt="cardImg">
//                         </div>
//                         <p class="cardTitle">Technology</p>
//                         <h4>The Impact of Technology on the Workplace: How Technology is Changing</h4>
//                         <div class="blogUserDetail">
//                             <img src="./assets/blogs-page/blogs/avatar.jpg" width="20px" height="20px" alt="avatar">
//                             <p>jason fransisco</p>
//                             <p>August 20 2022</p>
//                     </div>
//                 </div>`
//   )
//   .join("");

// cardContainer.innerHTML = "No Data Found";

// Blogs  Page ends
