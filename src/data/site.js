// Central business config — edit once, changes everywhere.
export const SITE = {
  name: 'Venus Holidays',
  tagline: 'Learn to Travel · Travel to Learn',
  url: 'https://venusholidays.co', // keep in sync with astro.config.mjs
  waNumber: '919004005565', // WhatsApp number, digits only with country code
  phoneDisplay: '+91 98202 48186',
  phoneHref: '+919820248186',
  phone2Display: '+91 90040 05565',
  phone2Href: '+919004005565',
  email: 'venusmanoj@gmail.com',
  emailAlt: '',
  address: {
    street: '39 Target Mall, Chandavarkar Road',
    locality: 'Borivali West',
    city: 'Mumbai',
    postalCode: '400092',
    region: 'Maharashtra',
    country: 'IN',
  },
  foundingYear: 2009,
  // Cloudflare Web Analytics token — leave empty to disable the beacon entirely.
  // Get one free at dash.cloudflare.com → Analytics & Logs → Web Analytics.
  cfAnalyticsToken: '',
};

export function waLink(text) {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;
}

export function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

// Services — from the business's own flyer ("Everything You Need For A Perfect Journey").
export const SERVICES = [
  { name: 'Holiday Packages', desc: 'Domestic & international tour packages, customised to your budget, dates and pace.', href: '/packages/' },
  { name: 'Hotel Booking', desc: 'Handpicked stays at negotiated rates — from budget rooms to premium resorts.' },
  { name: 'Air, Rail & Bus Tickets', desc: 'Flight, railway and bus ticket booking — one call and it’s done.' },
  { name: 'Passport & Visa Assistance', desc: 'Application help and visa guidance for every destination we sell.' },
  { name: 'Rent-a-Car', desc: 'Sedans to tempo travellers — airport transfers, local and outstation, with driver.', href: '/car-rental/' },
  { name: 'Group Tours', desc: 'Housing societies, friends’ circles and communities — planned end to end.' },
  { name: 'School & College Tours', desc: 'Educational tours and industrial visits with safety, permissions and coordination handled.', href: '/school-tours/' },
  { name: 'Corporate Tours', desc: 'Offsites, conferences and dealer meets — venue, travel and logistics under one roof.' },
  { name: 'Honeymoon Packages', desc: 'Per-couple packages with decoration, candlelight dinners and private transfers.', href: '/packages/?cat=honeymoon' },
  { name: 'Pilgrimage Tours', desc: 'Char Dham to 12 Jyotirlinga — yatras with darshan assistance and pure-veg meals.', href: '/packages/?cat=pilgrimage' },
];

// Package ids shown in the home "Featured" grid and the trending carousel.
export const FEATURED = ['kashmir', 'kerala', 'rajasthan', 'char-dham', 'goa', 'dubai'];
export const TRENDING = [
  'kashmir', 'kerala', 'goa', 'bali', 'rajasthan', 'dubai',
  'himachal', 'maldives', 'kutch', 'thailand', 'andaman', 'char-dham',
];
