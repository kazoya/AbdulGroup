function readPublic(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}
function parseEmailList(raw: string): string[] {
  return raw.split(/[,;\s]+/).map((e) => e.trim()).filter((e) => e.includes("@"));
}
export const siteConfig = {
  nameAr: "مجموعة عبدل / الزيتونة",
  nameEn: "Abdul Group / Tops",
  brandLine: "TOPS",
  productName: "تصور مبيعات شوكولاتة وتجارة صناعية",
  parentAr: "مجموعة عبدل",
  parentEn: "Abdul Group / Tops",
  recipient: "مدير المبيعات",
  recipientRole: "مجموعة عبدل / الزيتونة",
  country: "الأردن",
  city: "عمّان",
  cityDetailAr: "الأردن",
  since: 0,
  websiteUrl: "https://abdulgroup.com/",
  defaultMapsUrl: "",
  defaultWhatsAppPhone: "962796959525",
  defaultWhatsAppPrefill: "السلام عليكم مجموعة عبدل / الزيتونة بخصوص ",
  defaultEmails: ["zaid@abdulgroup.com"] as const,
  phones: ["962796959525"] as const,
  salesPhone: "962796959525",
  hoursAr: "ساعات الدوام الداخلي غير منشورة على الموقع",
  addressAr: "الأردن",
  promiseAr: "عرض صنف شوكولاتة للتجزئة لا يُعتمد سعره إلا من المبيعات",
  developer: { nameAr: "م. صهيب الصالح", phone: "962787523192", prefill: "AbdulGroup" },
} as const;
export function getDiscoveryFormUrl(): string { return readPublic("NEXT_PUBLIC_DISCOVERY_FORM_URL"); }
export function getContactEmails(): string[] {
  const fromEnv = parseEmailList(readPublic("NEXT_PUBLIC_CONTACT_EMAILS"));
  if (fromEnv.length) return fromEnv;
  const single = readPublic("NEXT_PUBLIC_CONTACT_EMAIL");
  if (single) { const parts = parseEmailList(single); if (parts.length) return parts; }
  return [...siteConfig.defaultEmails];
}
export function getMapsUrl(): string { return readPublic("NEXT_PUBLIC_MAPS_URL") || siteConfig.defaultMapsUrl; }
export function getCompanyWebsiteUrl(): string { return readPublic("NEXT_PUBLIC_COMPANY_WEBSITE") || siteConfig.websiteUrl; }
export function getWhatsAppPhone(): string {
  return (readPublic("NEXT_PUBLIC_WHATSAPP_PHONE") || siteConfig.defaultWhatsAppPhone).replace(/[^\d]/g, "");
}
export function getWhatsAppPhoneDisplay(): string { const d = getWhatsAppPhone(); return d ? `+${d}` : ""; }
export function getWhatsAppPrefill(): string {
  return readPublic("NEXT_PUBLIC_WHATSAPP_PREFILL") || siteConfig.defaultWhatsAppPrefill;
}
export function getWhatsAppUrl(extra = ""): string {
  const phone = getWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(`${getWhatsAppPrefill()}${extra}`.trim())}`;
}
export function getWhatsAppQrValue(): string {
  const phone = getWhatsAppPhone();
  return phone ? `https://wa.me/${phone}` : "";
}
export function getDeveloperWhatsAppPhone(): string {
  return (readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PHONE") || siteConfig.developer.phone).replace(/[^\d]/g, "");
}
export function getDeveloperWhatsAppPhoneDisplay(): string {
  const d = getDeveloperWhatsAppPhone(); return d ? `+${d}` : "";
}
export function getDeveloperWhatsAppPrefill(): string {
  return readPublic("NEXT_PUBLIC_DEVELOPER_WHATSAPP_PREFILL") || siteConfig.developer.prefill;
}
export function getDeveloperWhatsAppUrl(): string {
  const phone = getDeveloperWhatsAppPhone();
  if (!phone) return "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(getDeveloperWhatsAppPrefill().trim())}`;
}
export function getSiteUrl(): string {
  const fromEnv = readPublic("NEXT_PUBLIC_SITE_URL");
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}
export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/[^\d]/g, "");
  if (d.startsWith("962") && d.length === 12) return `+${d.slice(0, 3)} ${d.slice(3, 4)} ${d.slice(4, 8)} ${d.slice(8)}`;
  return `+${d}`;
}
export function getSalesCallUrl(): string { return `tel:+${siteConfig.salesPhone}`; }
