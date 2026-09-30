// Which Indian states each package touches (codes match src/data/india-map.js).
export const PKG_STATES = {
  kashmir: ['JK'],
  himachal: ['HP'],
  'char-dham': ['UK'],
  kashi: ['UP'],
  rajasthan: ['RJ'],
  'dwarka-somnath': ['GJ'],
  kutch: ['GJ'],
  'jyotirlinga-12': ['GJ', 'MH', 'MP', 'UP', 'AP', 'JH', 'TN'],
  ashtavinayak: ['MH'],
  'tirupati-kolhapur': ['AP', 'MH'],
  vaidyanath: ['JH'],
  goa: ['GA'],
  gokarna: ['KA'],
  kerala: ['KL'],
  andaman: ['AN'],
  'hm-goa': ['GA'],
  'hm-kashmir': ['JK'],
  'hm-kerala': ['KL'],
  'hm-himachal': ['HP'],
  'hm-andaman': ['AN'],
  'hm-rajasthan': ['RJ'],
};

export function statesFor(pkgId) {
  return PKG_STATES[pkgId] || [];
}
