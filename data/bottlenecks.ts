import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "الموقع لا يحوّل الزيارة طلباً",
    department: "marketing",
    description: "abdulgroup.com — الموقع أعاد 403 للفحص الآلي. نلتزم بالبطاقة والمجموعة دون اختراع كتالوج.",
    signalToInvestigate: "من يرد على النموذج/الهاتف خلال ساعة؟",
  },
  {
    id: "b2",
    title: "مدير المبيعات هو النظام",
    department: "sales",
    description: "الطلب يصل واتساباً أو مكالمة. لا طابور ظاهر ولا بطاقة متابعة. أي غياب شخصي يوقف الصفقة.",
    signalToInvestigate: "كم رسالة يومياً تُنسى بعد الدوام؟",
  },
  {
    id: "b3",
    title: "الكتالوج غير مربوط بمسار تسعير",
    department: "marketing",
    description: "مجال معلن: شوكولاتة وتجارة صناعية. التفاصيل الرقيقة لا تُختلق — المصدر أو الاعتذار.",
    signalToInvestigate: "هل توجد نشرة داخلية لكل خط؟",
  },
  {
    id: "b4",
    title: "السعر والعرض يبقيان بشريين — وهذا صحيح — لكن بلا مسار",
    department: "quality",
    description: "عرض صنف شوكولاتة للتجزئة لا يُعتمد سعره إلا من المبيعات",
    signalToInvestigate: "من يعتمد العرض النهائي اليوم؟ كم يستغرق؟",
  },
  {
    id: "b5",
    title: "لا مسار ظاهر لـ «تجزئة»",
    department: "schools",
    description: "التاجر يريد صنفاً يتحرك من الرف. المنصة تقترح تشكيلة وأنت تعتمد الموقع الحالي لا يُظهر هذا المسار كطابور.",
    signalToInvestigate: "أين تُحفظ طلبات هذا الأسبوع؟",
  },
];
