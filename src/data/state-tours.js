// Which Indian states each package belongs to (codes match src/data/india-map.js).
// Used by the interactive map filter on the packages page.
export const PKG_STATES = {
  kashmir: ['JK'],
  'vaishno-devi': ['JK', 'PB'],
  himachal: ['HP'],
  uttarakhand: ['UK'],
  'char-dham': ['UK'],
  'delhi-agra': ['DL', 'UP'],
  kashi: ['UP'],
  rajasthan: ['RJ'],
  saurashtra: ['GJ'],
  'dwarka-somnath': ['GJ'],
  'indore-ujjain': ['MP'],
  ashtavinayak: ['MH'],
  akkalkot: ['MH'],
  goa: ['GA'],
  'mysore-ooty': ['KA'],
  gokarna: ['KA'],
  hampi: ['KA'],
  hyderabad: ['AP'],
  kerala: ['KL'],
  ooty: ['TN'],
  rameshwaram: ['TN'],
  'puri-konark': ['OD'],
  sikkim: ['SK', 'WB'],
  northeast: ['ML', 'AS'],
  kamakhya: ['AS'],
  andaman: ['AN'],
};

export function statesFor(pkgId) {
  return PKG_STATES[pkgId] || [];
}
