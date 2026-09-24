export const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;
