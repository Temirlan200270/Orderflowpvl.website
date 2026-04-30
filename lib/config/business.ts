export const BUSINESS_INFO = {
  name: "IE ABISHEV",
  ownerFullName: "ABISHEV BAKHTIYAR SANSYZBAEVICH",
  /** Cyrillic names as on IE notification / bank records — links EN UI to official documents. */
  registry: {
    legalNameCyrillic: "ИП АБИШЕВ",
    ownerFullNameCyrillic: "АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ",
  },
  iin: "830520350723",
  activity: "Automotive repair and maintenance (OKED 45201)",
  established: "2025",
  bankingPartner: "ForteBank",
  contact: {
    phoneDisplay: "+7 701 100 05 70",
    phoneTelHref: "tel:+77011000570",
    email: "info@orderflowpvl.website",
    emailMailtoHref: "mailto:info@orderflowpvl.website",
    website: "https://orderflowpvl.website",
  },
  address: {
    country: "Republic of Kazakhstan",
    zip: "140000",
    region: "Pavlodar Region",
    city: "Pavlodar",
    street: "Estaya St.",
    building: "81/1",
    apartmentOrOffice: "19",
    formatted:
      "140000, Republic of Kazakhstan, Pavlodar, Estaya St., Bld. 81/1, Apt/Office 19.",
  },
  /**
   * Map pin by coordinates (WGS84). Text search embeds often snap to an unrelated POI
   * (wrong business name). Centering on lat/lng matches the registry address on Estaya.
   * Source: ~ул. Естая, 81, Павлодар (same plot as 81/1 per cadastral practice).
   */
  mapEmbed: {
    lat: 52.280652,
    lng: 76.96035,
    zoom: 18,
  },
} as const;

export function getGoogleMapsEmbedUrl(): string {
  const { lat, lng, zoom } = BUSINESS_INFO.mapEmbed;
  return `https://www.google.com/maps?q=${lat}%2C${lng}&z=${zoom}&hl=en&output=embed`;
}
