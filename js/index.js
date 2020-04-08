const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//task 1 Create selectors by using any of the DOM element's methods

let headImg = document.getElementById("cta-img");
let midImg = document.getElementById("middle-img");


//tast 1 Note that IDs have been used on all images.  Use the IDs to update src path content
headImg.setAttribute('src', siteContent["cta"]["img-src"])
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//task 2 Using your selectors, update the content to match the example file.

//nav
let nav1 = document.querySelector('.container header nav a:nth-child(1)');
    nav1.textContent = siteContent['nav']['nav-item-1']

let nav2 = document.querySelector('.container header nav a:nth-child(2)');
    nav2.textContent = siteContent['nav']['nav-item-2']

let nav3 = document.querySelector('.container header nav a:nth-child(3)');
    nav3.textContent = siteContent['nav']['nav-item-3']

let nav4 = document.querySelector('.container header nav a:nth-child(4)');
    nav4.textContent = siteContent['nav']['nav-item-4']

let nav5 = document.querySelector('.container header nav a:nth-child(5)');
    nav5.textContent = siteContent['nav']['nav-item-5']

let nav6 = document.querySelector('.container header nav a:nth-child(6)');
    nav6.textContent = siteContent['nav']['nav-item-6']

//cta
let header = document.querySelector('.cta-text h1');
  header.textContent = siteContent['cta']['h1']

let topButton = document.querySelector('.cta-text button');
topButton.textContent = siteContent['cta']['button']

//Main content
//top content
//features section
let features = document.querySelector('.top-content .text-content:nth-child(1) h4');
features.textContent = siteContent['main-content']['features-h4']

let featPara = document.querySelector('.top-content .text-content:nth-child(1) p');
featPara.textContent = siteContent['main-content']['features-content']

//about section
let about = document.querySelector('.top-content .text-content:nth-child(2) h4');
about.textContent = siteContent['main-content']['about-h4']

let aboutPara = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutPara.textContent = siteContent['main-content']['about-content']

//bottom content

//services section
let services = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
services.textContent = siteContent['main-content']['services-h4']

let servPara = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servPara.textContent = siteContent['main-content']['services-content']

//product section
let product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
product.textContent = siteContent['main-content']['product-h4']

let proPara = document.querySelector('.bottom-content .text-content:nth-child(2) p');
proPara.textContent = siteContent['main-content']['product-content']

//vision section

let vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vision.textContent = siteContent['main-content']['vision-h4']

let visionPara = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionPara.textContent = siteContent['main-content']['vision-content']

//contact section
let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4']

let address = document.querySelector('.contact p:nth-child(2)');
address.textContent = siteContent['contact']['address']

let phone = document.querySelector('.contact p:nth-child(3)');
phone.textContent = siteContent['contact']['phone']

let email = document.querySelector('.contact p:nth-child(4)');
email.textContent = siteContent['contact']['email']

//footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']

//task 3  Change the color of the navigation text to be green.

let navGreen = document.querySelectorAll('.container header nav a');
navGreen.forEach(link => link.style.color = 'green')

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
let nav = document.querySelector('.container header nav');
let start = document.createElement('a');
  start.textContent = 'Appended';
  start.style.cursor = 'pointer';
  start.style.color = 'green';
nav.appendChild(start);

let end = document.createElement('a');
    end.textContent = 'Prepended';
    end.style.cursor = 'pointer';
    end.style.color = 'seagreen';
    nav.prepend(end);