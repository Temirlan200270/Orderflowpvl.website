export const BUSINESS_INFO = {
  name: "ИП АБИШЕВ",
  iin: "830520350723",
  contact: {
    phoneDisplay: "+7 701 100 05 70",
    phoneTelHref: "tel:+77011000570",
    email: "info@orderflowpvl.website",
    emailMailtoHref: "mailto:info@orderflowpvl.website",
    website: "https://orderflowpvl.website",
  },
  address: {
    formatted: "ул. Естая, д. 81/1, Павлодар, 140000, Казахстан",
  },
  mapEmbed: {
    lat: 52.280652,
    lng: 76.96035,
    zoom: 18,
  },
} as const;

export function getGoogleMapsEmbedUrl(): string {
  const { lat, lng, zoom } = BUSINESS_INFO.mapEmbed;
  return `https://www.google.com/maps?q=${lat}%2C${lng}&z=${zoom}&hl=ru&output=embed`;
}
