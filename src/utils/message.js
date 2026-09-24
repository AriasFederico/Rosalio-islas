// numero telefonico aca
const phone_number = '+5217711853601';

export const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;
