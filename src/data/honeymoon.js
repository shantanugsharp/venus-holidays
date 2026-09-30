// Honeymoon packages — per-couple pricing, from the business's honeymoon flyer.
// `pkgId` reuses that destination's photo; `slug` links to the full itinerary page.
export const HONEYMOON_DOMESTIC = [
  { name: 'Goa Romantic Escape', pkgId: 'goa', slug: 'goa-holiday', nights: 3, days: 4, priceINR: 29999, places: 'North Goa · South Goa · Beach Sunsets', inc: ['3/4★ hotel', 'Breakfast', 'Private sightseeing', 'Couple cake', 'Room decoration', 'Romantic dinner'] },
  { name: 'Kashmir Romantic Holiday', pkgId: 'kashmir', slug: 'kashmir-paradise', nights: 5, days: 6, priceINR: 59999, places: 'Srinagar · Gulmarg · Pahalgam · Sonmarg', inc: ['Premium hotel', 'Breakfast & dinner', 'Private vehicle', 'Shikara ride', 'Room decoration', 'Romantic dinner'] },
  { name: 'Kerala Romantic Escape', pkgId: 'kerala', slug: 'kerala-gods-own-country', nights: 4, days: 5, priceINR: 49999, places: 'Munnar · Thekkady · Alleppey', inc: ['Romantic hotel stay', 'Private cab', 'Breakfast & dinner', 'Alleppey houseboat', 'Candlelight dinner', 'Room decoration'] },
  { name: 'Himachal Honeymoon', pkgId: 'himachal', slug: 'himachal-shimla-manali', nights: 5, days: 6, priceINR: 49999, places: 'Shimla · Manali · Solang Valley', inc: ['3/4★ hotel', 'Private cab', 'Breakfast & dinner', 'Room decoration', 'Cake', 'Candlelight dinner'] },
  { name: 'Andaman Romantic Escape', pkgId: 'andaman', slug: 'andaman-holiday', nights: 5, days: 6, priceINR: 69999, places: 'Port Blair · Havelock · Neil Island', inc: ['Beach resort', 'Breakfast', 'Ferry transfers', 'Private sightseeing', 'Candlelight dinner', 'Couple decoration'] },
  { name: 'Rajasthan Royal Honeymoon', pkgId: 'rajasthan', slug: 'rajasthan-royal', nights: 5, days: 6, priceINR: 54999, places: 'Udaipur · Jodhpur · Jaisalmer', inc: ['Heritage/premium hotel', 'Private vehicle', 'Breakfast & dinner', 'Desert camp', 'Romantic dinner', 'Couple arrangements'] },
];

export const HONEYMOON_INTERNATIONAL = [
  { name: 'Maldives Honeymoon', pkgId: 'maldives', slug: 'maldives-holiday', nights: 3, days: 4, priceINR: 89999, places: 'Island Resort · Beach · Water Activities', inc: ['Resort stay', 'Breakfast', 'Speedboat transfers', 'Room decoration', 'Candlelight dinner', 'Honeymoon cake'] },
  { name: 'Bali Honeymoon', pkgId: 'bali', slug: 'bali-tour', nights: 5, days: 6, priceINR: 89999, places: 'Bali · Ubud · Nusa Penida', inc: ['4★ hotel', 'Breakfast', 'Private transfers', 'Private sightseeing', 'Candlelight dinner', 'Flower decoration'] },
  { name: 'Thailand Honeymoon', pkgId: 'thailand', slug: 'thailand-bangkok-pattaya', nights: 4, days: 5, priceINR: 69999, places: 'Bangkok · Pattaya', inc: ['Hotel', 'Breakfast', 'Airport transfers', 'Coral Island', 'City tour', 'Romantic dinner'] },
  { name: 'Singapore Honeymoon', pkgId: 'singapore', slug: 'singapore-tour', nights: 4, days: 5, priceINR: 99999, places: 'City · Sentosa Island', inc: ['4★ hotel', 'Breakfast', 'City tour', 'Sentosa Island', 'Couple dinner', 'Private transfers'] },
  { name: 'Dubai Honeymoon', pkgId: 'dubai', slug: 'dubai-tour', nights: 4, days: 5, priceINR: 99999, places: 'Dubai City · Desert · Burj Khalifa', inc: ['4★ hotel', 'City tour', 'Burj Khalifa', 'Desert safari', 'BBQ dinner', 'Couple arrangements'] },
  { name: 'Malaysia Honeymoon', pkgId: 'malaysia', slug: 'malaysia-tour', nights: 4, days: 5, priceINR: 79999, places: 'Kuala Lumpur · Genting Highlands', inc: ['Hotel', 'Breakfast', 'Private transfers', 'City tour', 'Genting Highlands', 'Couple dinner'] },
];

export const HONEYMOON_EXTRAS = [
  'Room decoration', 'Honeymoon cake', 'Candlelight dinner', 'Couple photoshoot',
  'Couple spa', 'Private transfers', 'Romantic room / resort', 'Sunset experience', 'Special couple surprise',
];
