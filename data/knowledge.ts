import type { KnowledgeAnswer } from "@/types";

export const sampleQuestions = [
  "من مجموعة عبدل / الزيتونة؟",
  "ما مجال مجموعة عبدل؟",
  "كيف يعمل محرّك تجزئة؟",
  "ماذا نعرف من الموقع فقط؟",
];

export const knowledgeAnswers: KnowledgeAnswer[] = [
  {
    id: "k1",
    question: "من مجموعة عبدل / الزيتونة؟",
    answer: "مجموعة عبدل / الزيتونة — مجموعة عبدل. المجال المعلن: شوكولاتة وتجارة صناعية. المصدر: https://abdulgroup.com/",
    citations: [{ title: "abdulgroup.com", note: "صفحة عامة / من نحن كما فُحصت" }],
  },
  {
    id: "k2",
    question: "ما مجال مجموعة عبدل؟",
    answer: "شوكولاتة وتجارة صناعية — عرض صنف شوكولاتة للتجزئة لا يُعتمد سعره إلا من المبيعات",
    citations: [{ title: "abdulgroup.com", note: "مجال معلن كما فُحص" }],
  },
  {
    id: "k3",
    question: "كيف يعمل محرّك تجزئة؟",
    answer: "الاقتراح يظهر في اللوح. التنفيذ (سعر، عرض، زيارة) لا يتم إلا باعتماد مدير المبيعات. عرض صنف شوكولاتة للتجزئة لا يُعتمد سعره إلا من المبيعات",
    citations: [{ title: "هذا التصور", note: "صفحة المحرّك — بيانات تجريبية" }],
  },
  {
    id: "k4",
    question: "ماذا نعرف من الموقع فقط؟",
    answer: "الموقع أعاد 403 للفحص الآلي. نلتزم بالبطاقة والمجموعة دون اختراع كتالوج. أرقام اللوح تجريبية.",
    citations: [{ title: "abdulgroup.com", note: "ما هو منشور فقط" }],
  },
];

export const fallbackKnowledgeAnswer: KnowledgeAnswer = {
  id: "fallback",
  question: "",
  answer: "لا إجابة من مصدر معتمد داخل هذا التصور. نعتذر بدل الاختراع. اسأل المبيعات أو راجع الموقع.",
  citations: [{ title: "قاعدة الصدق", note: "المصدر أو الاعتذار" }],
};
