// Central business config — edit once, changes everywhere.
export const SITE = {
  name: 'Venus Holidays',
  tagline: 'Learn to Travel · Travel to Learn',
  url: 'https://www.venusholidays.co.in', // keep in sync with astro.config.mjs
  waNumber: '919820248186', // WhatsApp number, digits only with country code
  phoneDisplay: '+91 98202 48186',
  phoneHref: '+919820248186',
  phone2Display: '+91 90040 05565',
  phone2Href: '+919004005565',
  email: 'manoj@venusholidays.co.in',
  emailAlt: 'venusmanoj@gmail.com',
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

// Services from the business card — shown on the home page and in schema.org markup.
export const SERVICES = [
  { name: 'Package Tours', desc: 'Custom itineraries across India and abroad, built around your dates, budget and pace.' },
  { name: 'Hotel Booking', desc: 'Handpicked stays at negotiated rates — from budget rooms to 5★ resorts and houseboats.' },
  { name: 'One-Day Picnics', desc: 'Day outings around Mumbai for families, housing societies and office groups.' },
  { name: 'Adventure Camps', desc: 'Trekking, rafting and camping programmes for groups, schools and corporates.' },
  { name: 'Study Tours', desc: 'Educational tours for schools and colleges — itinerary, permissions and supervision handled.' },
  { name: 'Industrial Visits', desc: 'Factory and plant visits arranged end to end, with permissions, transport and scheduling.' },
  { name: 'Conferences & Offsites', desc: 'Dealer meets, team offsites and conferences — venue, travel and logistics under one roof.' },
  { name: 'Passport & Visa', desc: 'Application assistance and visa guidance for every international destination we sell.' },
];

// Package ids shown in the home "Featured" grid and the trending carousel.
export const FEATURED = ['kashmir', 'kerala', 'rajasthan', 'goa', 'bali', 'dubai'];
export const TRENDING = [
  'kashmir', 'kerala', 'goa', 'bali', 'rajasthan', 'dubai',
  'himachal', 'maldives', 'sikkim', 'thailand', 'ooty', 'kashi',
];
