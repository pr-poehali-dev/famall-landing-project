import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const FACTORY_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/89317544-6923-4c18-abf4-3cc40f0ea65c.jpg";
const HERO_PRODUCT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/f7495e26-3cd4-4b85-9243-f804b5a06b40.jpg";
const LOGO_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/6aef32ab-6791-4c39-9dbf-3d018da18144.jpg";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const NAV_ITEMS = [
  { label: "О платформе", href: "#platform" },
  { label: "Производство", href: "#production" },
  { label: "Продукты", href: "#products" },
  { label: "Партнёрство", href: "#partnership" },
  { label: "ИИ-инструменты", href: "#ai" },
];

const STATS = [
  { value: "39 000", unit: "м²", label: "производства" },
  { value: "38+", unit: "", label: "стран присутствия" },
  { value: "GMPC", unit: "", label: "100K класс чистоты" },
  { value: "от 17 500", unit: "₽", label: "старт партнёра" },
];

const PRODUCTS = [
  { name: "BERCLEAN", category: "Дом", icon: "Sparkles", desc: "Бытовая химия для дома — концентраты, эффективные составы." },
  { name: "LIMANCY", category: "Уход", icon: "Flower2", desc: "Уход за кожей. Дерматологически проверено." },
  { name: "SUTING / BOCARE", category: "Гигиена", icon: "Droplets", desc: "Средства личной гигиены ежедневного спроса." },
  { name: "YIJIAN", category: "Полость рта", icon: "Star", desc: "Зубные пасты, ополаскиватели, профуход." },
  { name: "OKFAD / PREDAWN", category: "Здоровье", icon: "Leaf", desc: "БАДы, витамины, функциональное питание." },
];

const WHO_FOR = [
  { icon: "PlusCircle", title: "Доп доход", desc: "Хотите зарабатывать параллельно с основной занятостью." },
  { icon: "LogOut", title: "Выйти из найма", desc: "Ищете свой путь без потолка зарплаты." },
  { icon: "TrendingUp", title: "Свой поток", desc: "Хотите выстроить систему, которая работает на вас." },
  { icon: "Users", title: "Развивать команду", desc: "Строите партнёрскую сеть и масштабируетесь." },
  { icon: "Briefcase", title: "Запустить B2B", desc: "Шоурум, опт, корпоративные клиенты." },
];

const AI_TOOLS = [
  { icon: "Image", title: "Карточки товара", desc: "Готовые карточки для маркетплейсов и соцсетей" },
  { icon: "Video", title: "Видео и сценарии", desc: "Reels, VK Клипы — тексты и визуальные решения" },
  { icon: "FileText", title: "Посты и сторис", desc: "Тексты под ваш стиль, готовые к публикации" },
  { icon: "Presentation", title: "Презентации", desc: "Слайды для встреч с партнёрами и клиентами" },
  { icon: "MessageSquare", title: "Сценарии продаж", desc: "Скрипты и ответы на возражения" },
  { icon: "Wand2", title: "Баннеры и промо", desc: "Обложки, баннеры, промо-материалы" },
];

const TRAINING = [
  "ИИ для продаж и создания контента",
  "Упаковка продукта и личного бренда",
  "Продажи без давления",
  "Партнёрская презентация",
  "Командная дупликация",
  "Работа с B2B-клиентами",
];

const INCOME_STEPS = [
  { step: "01", title: "Личные продажи", desc: "Продаёте продукт напрямую клиентам из своего окружения или через соцсети" },
  { step: "02", title: "Повторные покупки", desc: "Клиенты возвращаются за товарами ежедневного спроса снова и снова" },
  { step: "03", title: "Партнёрская команда", desc: "Подключаете партнёров и получаете бонусы с их товарооборота" },
  { step: "04", title: "Рост товарооборота", desc: "Бонусы по маркетинг-плану растут вместе с объёмом команды" },
];

const PAIN_POINTS = [
  { icon: "X", text: "Нет системы — продаёшь хаотично" },
  { icon: "X", text: "Нет продукта с возвратом — каждый клиент с нуля" },
  { icon: "X", text: "Нет поддержки — разбираешься сам" },
  { icon: "X", text: "Нет потока заявок — не знаешь где искать" },
];

const DUPLIC_STEPS = ["Контент", "Интерес", "Заявка", "Презентация", "Старт", "Обучение", "Команда"];

export default function Index() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", phone: "", city: "", contact: "WhatsApp", interest: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const interests = ["Продукт", "Партнёрство", "B2B", "Шоурум", "ИИ-инструменты"];

  const toggleInterest = (item: string) => {
    setFormData(prev => ({
      ...prev,
      interest: prev.interest.includes(item)
        ? prev.interest.filter(i => i !== item)
        : [...prev.interest, item]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-ibm bg-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={LOGO_IMG} alt="FAMALL" className="h-9 w-9 object-cover rounded" />
            <span className="font-montserrat font-black text-lg text-famall-red tracking-tight">FAMALL</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href}
                className="font-ibm text-sm text-famall-silver-dark hover:text-famall-red transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#cta" className="hidden md:inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-xs tracking-wide px-5 py-2.5 hover:bg-famall-red-dark transition-colors">
            Стать партнёром
          </a>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name="Menu" size={24} className="text-famall-dark" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                className="font-ibm text-sm text-famall-silver-dark">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="bg-famall-red text-white font-montserrat font-bold text-xs px-5 py-2.5 w-fit">Стать партнёром</a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 bg-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-famall-platinum/40" />
        <div className="absolute bottom-0 left-0 w-1.5 h-32 bg-famall-red/20 hidden lg:block" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-famall-red text-white px-3 py-1.5 mb-5 reveal">
                <img src={LOGO_IMG} alt="" className="h-5 w-5 object-cover rounded-sm flex-shrink-0" />
                <span className="font-montserrat font-bold text-xs tracking-wide uppercase">Эксклюзив Россия</span>
              </div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.15em] uppercase text-famall-silver-dark mb-3 reveal">
                Платформа, где покупают снова и снова — и на этом зарабатывают
              </div>
              <h1 className="font-montserrat font-black text-5xl md:text-6xl leading-[0.92] tracking-tight text-famall-dark mb-6 reveal delay-100">
                Famall выходит<br />
                <span className="text-famall-red">на рынок</span><br />
                России и СНГ
              </h1>
              <p className="font-ibm text-lg text-famall-silver-dark leading-relaxed max-w-lg mb-4 reveal delay-200">
                Ты заходишь в растущий рынок товаров ежедневного спроса через готовую систему:
                продукт, обучение, ИИ-инструменты и партнёрскую модель с повторными продажами.
              </p>
              <p className="font-ibm text-sm text-famall-dark font-semibold leading-relaxed max-w-lg mb-4 border-l-2 border-famall-red pl-4 reveal delay-200">
                Большинство зарабатывает один раз и снова ищет клиента.<br />
                Здесь ты работаешь с продуктом, за которым возвращаются.
              </p>
              <div className="flex items-center gap-2 mb-6 reveal delay-200">
                <div className="w-1.5 h-1.5 rounded-full bg-famall-red animate-pulse flex-shrink-0" />
                <span className="text-xs font-ibm text-famall-silver-dark">Сейчас этап формирования рынка — позже вход будет сложнее.</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-5 reveal delay-300">
                <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm tracking-wide px-8 py-4 hover:bg-famall-red-dark transition-colors shadow-lg shadow-famall-red/20">
                  Получить условия и разбор <Icon name="ArrowRight" size={16} />
                </a>
                <a href="#not-jars" className="inline-flex items-center gap-2 bg-transparent text-famall-dark font-montserrat font-semibold text-sm px-8 py-4 border border-famall-platinum-dark hover:border-famall-dark transition-all">
                  Разобраться за 3 минуты
                </a>
              </div>
              <div className="flex items-center gap-2 mb-5 reveal delay-300">
                <div className="flex -space-x-1">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-famall-red/20 border-2 border-white flex items-center justify-center">
                      <Icon name="User" size={10} className="text-famall-red" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-ibm text-famall-silver-dark">Уже подключаются первые партнёры по России и СНГ</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-famall-platinum-dark reveal delay-400">
                {[
                  { value: "39 000", unit: "м²", label: "собственного производства" },
                  { value: "38+", unit: "", label: "стран — международное присутствие" },
                  { value: "GMPC", unit: "", label: "100K — фарм-уровень чистоты" },
                  { value: "от 17 500", unit: "₽", label: "старт партнёра" },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-5 hover:bg-famall-platinum transition-colors duration-300">
                    <div className="font-montserrat font-black text-2xl text-famall-dark leading-none">
                      {s.value}<span className="text-famall-red text-base ml-1">{s.unit}</span>
                    </div>
                    <div className="text-xs text-famall-silver mt-1.5 font-ibm leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: визуал */}
            <div className="relative reveal delay-200">
              <div className="relative overflow-hidden" style={{ height: 520 }}>
                <img
                  src={HERO_PRODUCT_IMG}
                  alt="FAMALL — премиальные FMCG-продукты"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-famall-platinum-dark px-2.5 py-2 flex items-center gap-2">
                  <img src={LOGO_IMG} alt="FAMALL" className="h-7 w-7 object-cover rounded-sm flex-shrink-0" />
                  <div>
                    <div className="font-montserrat font-black text-xs text-famall-red tracking-widest uppercase leading-none">FAMALL</div>
                    <div className="font-ibm text-[10px] text-famall-silver mt-0.5">Premium FMCG</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-1.5">
                  {["GMPC 100K", "ISO", "FDA", "Halal"].map(cert => (
                    <div key={cert} className="bg-white/95 backdrop-blur-sm border border-famall-platinum-dark px-2 py-0.5 text-center">
                      <span className="font-montserrat font-black text-[10px] text-famall-dark tracking-wide">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-famall-dark/80 backdrop-blur-sm px-4 py-2.5 flex items-center gap-2">
                  <div className="w-1 h-4 bg-famall-red flex-shrink-0" />
                  <span className="font-ibm text-xs text-white/80">Производственная база Zeson Group</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-famall-red text-white px-6 py-5 shadow-xl hidden md:block">
                <div className="font-montserrat font-black text-3xl leading-none">39 000</div>
                <div className="font-ibm text-xs text-white/80 mt-1">м² производства</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN STRIP ─── */}
      <section className="py-10 px-4 bg-famall-platinum border-b border-famall-platinum-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-1 h-12 bg-famall-red flex-shrink-0 hidden md:block" />
            <p className="font-montserrat font-bold text-xl md:text-2xl text-famall-dark text-center md:text-left leading-snug">
              Если ты устал продавать без системы, без повторных продаж и без роста —
              <span className="text-famall-red"> тебе сюда.</span>
            </p>
            <a href="#not-jars" className="ml-auto flex-shrink-0 inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-6 py-3 hover:bg-famall-red-dark transition-colors">
              Узнать подробнее <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── NOT JARS (БЛОК 1) ─── */}
      <section className="py-20 px-4 bg-famall-dark" id="not-jars">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT — текст */}
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6 reveal">Что такое Famall на самом деле</div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6 reveal delay-100">
                Это не<br />«попробуй продай»
              </h2>
              <p className="font-ibm text-lg text-white/80 font-semibold leading-snug mb-6 reveal delay-150">
                Это система, в которой ты не начинаешь с нуля каждый раз.
              </p>

              <p className="font-montserrat font-bold text-sm text-famall-red uppercase tracking-wider mb-3 reveal delay-200">
                Большинство сливается не потому что «не получилось»
              </p>
              <p className="font-ibm text-sm text-white/60 mb-4 reveal delay-200">А потому что:</p>
              <div className="space-y-2 mb-6 reveal delay-200">
                {[
                  "нет продукта с повторным спросом",
                  "нет системы продаж",
                  "нет понимания, что делать каждый день",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-famall-red font-bold text-base leading-none">—</span>
                    <span className="font-ibm text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 px-5 py-4 mb-8 reveal delay-300">
                <p className="font-ibm text-sm text-white/50 mb-1">В итоге:</p>
                <p className="font-montserrat font-bold text-white">сегодня продал — завтра снова с нуля</p>
              </div>

              <p className="font-montserrat font-bold text-sm text-famall-red uppercase tracking-wider mb-4 reveal delay-300">
                Здесь по-другому
              </p>
              <p className="font-ibm text-sm text-white/60 mb-3 reveal delay-300">Ты заходишь в модель, где:</p>
              <div className="space-y-2 mb-8 reveal delay-300">
                {[
                  "продукт покупают снова и снова",
                  "клиент возвращается без доп. рекламы",
                  "есть готовые сценарии продаж",
                  "есть ИИ-контент: посты, сторис, видео",
                  "есть обучение и разборы",
                  "есть поддержка с первого дня",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                    <span className="font-ibm text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-red-dark transition-colors reveal delay-400">
                Получить условия и разбор <Icon name="ArrowRight" size={16} />
              </a>
            </div>

            {/* RIGHT — контраст */}
            <div className="space-y-4 reveal delay-200">
              <div className="bg-white/5 border border-white/10 p-8">
                <p className="font-ibm text-sm text-white/50 mb-2">Ты не придумываешь, как продавать.</p>
                <p className="font-montserrat font-bold text-lg text-white leading-snug">
                  Ты используешь систему, которая уже работает.
                </p>
              </div>

              <div className="bg-famall-red/10 border border-famall-red/20 p-8">
                <p className="font-ibm text-xs text-famall-red uppercase tracking-widest font-semibold mb-5">Это разница между</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="X" size={10} className="text-white/30" />
                    </div>
                    <span className="font-ibm text-sm text-white/50">«попробую и посмотрю»</span>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-famall-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={10} className="text-white" />
                    </div>
                    <span className="font-ibm text-sm text-white font-semibold">«зарабатываю на понятной модели»</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8">
                <div className="font-montserrat font-black text-4xl text-famall-red/15 mb-4">SYSTEM</div>
                <div className="space-y-4">
                  {[
                    "Продукт с повторным спросом",
                    "Обучение и наставничество",
                    "ИИ-инструменты для продвижения",
                    "Гибридная бизнес-модель",
                    "Международная производственная база",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 border border-famall-red/40 flex items-center justify-center flex-shrink-0">
                        <span className="font-montserrat font-bold text-xs text-famall-red">0{i + 1}</span>
                      </div>
                      <span className="text-sm text-white/70 font-ibm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PLATFORM / WHAT IS FAMALL (БЛОК 2) ─── */}
      <section className="py-20 px-4" id="platform">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Продукт</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">
                Продукт, который не нужно «впаривать»
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-4 reveal delay-200">
                Бытовая химия, косметика, уход, товары для дома и здоровья.
                То, что люди покупают регулярно.
              </p>
              <p className="font-ibm text-famall-dark font-semibold mb-8 reveal delay-200 border-l-2 border-famall-red pl-4">
                Клиент не исчезает после первой покупки. Он возвращается — и это основа дохода.
              </p>
              <div className="grid grid-cols-3 gap-px bg-famall-platinum-dark reveal delay-300">
                {[
                  { icon: "RefreshCw", label: "Повторные покупки" },
                  { icon: "Globe", label: "Международное качество" },
                  { icon: "ShoppingBag", label: "Ежедневный спрос" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 text-center hover:bg-famall-platinum transition-colors">
                    <Icon name={item.icon} size={20} className="text-famall-red mx-auto mb-2" />
                    <div className="text-xs font-montserrat font-bold text-famall-dark leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 overflow-hidden reveal delay-200">
              <img src={HERO_PRODUCT_IMG} alt="FAMALL продукция" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-famall-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTION (БЛОК 3) ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="production">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 overflow-hidden reveal">
              <img src={FACTORY_IMG} alt="Zeson Group производство" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-famall-dark/20" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 px-3 py-2">
                <img src={LOGO_IMG} alt="FAMALL" className="h-6 w-6 object-cover rounded-sm" />
                <span className="font-montserrat font-bold text-xs text-famall-dark">FAMALL × Zeson Group</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Производство</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">
                Не склад.<br />Реальное производство.
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-8 reveal delay-200">
                Zeson Group — современный производственный комплекс полного цикла.
              </p>
              <div className="grid grid-cols-2 gap-px bg-famall-platinum-dark mb-8 reveal delay-300">
                {[
                  { val: "39 000", label: "м² площадей" },
                  { val: "Стерильные", label: "производственные зоны" },
                  { val: "Контроль", label: "на каждом этапе" },
                  { val: "Собственные", label: "разработки формул" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5">
                    <div className="font-montserrat font-black text-lg text-famall-dark leading-none">{item.val}</div>
                    <div className="text-xs text-famall-silver font-ibm mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-famall-red/10 border border-famall-red/20 px-5 py-4 reveal delay-400">
                <p className="font-ibm text-sm text-famall-dark font-semibold">
                  Ты продаёшь не «ноунейм». Ты продаёшь систему с базой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST / CERTS (БЛОК 4) ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Стандарты качества</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark reveal delay-100">
              Стандарты, которые нельзя подделать
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-famall-platinum-dark mb-10">
            {[
              { cert: "ISO", desc: "Международный стандарт качества" },
              { cert: "GMPC", desc: "100K класс производственной чистоты" },
              { cert: "FDA", desc: "Соответствие стандартам безопасности" },
              { cert: "Halal", desc: "Сертификация для всех рынков" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 text-center hover:bg-famall-platinum transition-colors group reveal">
                <div className="font-montserrat font-black text-3xl text-famall-red mb-3 group-hover:scale-105 transition-transform">{item.cert}</div>
                <div className="text-xs font-ibm text-famall-silver leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-famall-platinum-dark reveal delay-200">
            {[
              { icon: "Truck", title: "Официальная логистика", desc: "Поставки без серых схем и посредников" },
              { icon: "FileCheck", title: "Работа с физлицами, ИП и ООО", desc: "Официальное партнёрское соглашение" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-famall-red/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-famall-red" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-famall-dark mb-1">{item.title}</div>
                  <div className="text-xs font-ibm text-famall-silver">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS (БЛОК 5) ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="products">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Продуктовая линейка</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">
              5 направлений, которые закрывают ежедневные потребности
            </h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">
              Ты не ищешь, что продавать. У тебя уже есть линейка под массовый спрос.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-famall-platinum-dark">
            {PRODUCTS.map((p, i) => (
              <div key={i} className={`bg-white p-6 text-center hover:bg-famall-platinum transition-colors group reveal delay-${i * 100}`}>
                <div className="w-12 h-12 bg-famall-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-famall-red transition-colors duration-300">
                  <Icon name={p.icon} size={20} className="text-famall-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-montserrat font-black text-xs text-famall-red mb-1 tracking-wide">{p.category}</div>
                <div className="font-montserrat font-bold text-sm text-famall-dark mb-2">{p.name}</div>
                <div className="text-xs text-famall-silver font-ibm leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO FOR (БЛОК 6) ─── */}
      <section className="py-20 px-4" id="partnership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Для кого</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark reveal delay-100">Подойдёт, если ты хочешь</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-famall-platinum-dark">
            {WHO_FOR.map((w, i) => (
              <div key={i} className={`bg-white p-6 text-center hover:bg-famall-platinum transition-colors group reveal delay-${i * 100}`}>
                <div className="w-12 h-12 bg-famall-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-famall-red transition-colors duration-300">
                  <Icon name={w.icon} size={20} className="text-famall-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-montserrat font-bold text-sm text-famall-dark mb-2">{w.title}</div>
                <div className="text-xs text-famall-silver font-ibm leading-relaxed">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HYBRID MODEL ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Бизнес-модель</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">Гибридная модель</h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">Два пути роста — выберите свой или комбинируйте</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-famall-gold/40 bg-famall-platinum p-10 reveal">
              <div className="text-xs font-montserrat font-semibold tracking-widest text-famall-gold uppercase mb-4">B2B направление</div>
              <h3 className="font-montserrat font-black text-2xl text-famall-dark mb-4">Шоурумы и оптовые продажи</h3>
              <div className="space-y-3">
                {["Открытие шоурума или точки продаж", "Работа с корпоративными клиентами", "Оптовые поставки", "Сотрудничество с розничными сетями"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-gold rounded-full flex-shrink-0" />
                    <span className="text-sm text-famall-silver-dark font-ibm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 border-famall-red/30 bg-famall-platinum p-10 reveal delay-200">
              <div className="text-xs font-montserrat font-semibold tracking-widest text-famall-red uppercase mb-4">Партнёрская сеть</div>
              <h3 className="font-montserrat font-black text-2xl text-famall-dark mb-4">Личные продажи и команда</h3>
              <div className="space-y-3">
                {["Личные продажи клиентам", "Повторные покупки с постоянного круга", "Сборка партнёрской команды", "Бонусы с товарооборота структуры"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                    <span className="text-sm text-famall-silver-dark font-ibm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI TOOLS (БЛОК 7) ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="ai">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">ИИ-инструменты</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">
              Ты не будешь «думать,<br />что постить»
            </h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">
              Мы даём систему продвижения через ИИ — без опыта в дизайне и маркетинге.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-famall-platinum-dark mb-12">
            {AI_TOOLS.map((tool, i) => (
              <div key={i} className={`bg-white p-8 group transition-all duration-300 border-b-2 border-b-transparent hover:border-b-famall-red reveal delay-${i * 100}`}>
                <div className="w-10 h-10 bg-famall-red/10 flex items-center justify-center mb-4 group-hover:bg-famall-red transition-colors duration-300">
                  <Icon name={tool.icon} size={18} className="text-famall-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-montserrat font-bold text-base text-famall-dark mb-2">{tool.title}</div>
                <div className="text-sm text-famall-silver font-ibm leading-relaxed">{tool.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12 reveal delay-200">
            {[
              { label: "Карточка товара", tag: "Маркетплейс", lines: [70, 90, 55] },
              { label: "Пост для VK / TG", tag: "Контент", lines: [80, 65, 75] },
              { label: "Сторис-обложка", tag: "Reels / VK Клипы", lines: [60, 85, 50] },
              { label: "Презентация", tag: "PDF / Slides", lines: [90, 70, 60] },
            ].map((mock, i) => (
              <div key={i} className="bg-white border border-famall-platinum-dark p-4 hover:shadow-md transition-shadow">
                <div className="h-20 bg-famall-platinum mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-famall-red/5 to-transparent" />
                  <Icon name="Layers" size={24} className="text-famall-red/30" />
                </div>
                <div className="space-y-1.5 mb-2">
                  {mock.lines.map((w, j) => (
                    <div key={j} className="h-1.5 bg-famall-platinum-dark rounded-full" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="font-montserrat font-bold text-xs text-famall-dark">{mock.label}</div>
                <div className="text-xs text-famall-red font-ibm mt-0.5">{mock.tag}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-famall-platinum-dark p-8 md:p-10 reveal delay-300">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6">Цифровая система: от контента до партнёров</div>
            <div className="flex flex-wrap items-start gap-0">
              {DUPLIC_STEPS.map((step, i) => (
                <div key={step} className="flex items-start">
                  <div className="flex flex-col items-center px-3 py-2">
                    <div className="w-9 h-9 bg-famall-red flex items-center justify-center mb-2">
                      <span className="font-montserrat font-black text-xs text-white">{i + 1}</span>
                    </div>
                    <span className="text-xs text-famall-silver-dark font-ibm whitespace-nowrap">{step}</span>
                  </div>
                  {i < DUPLIC_STEPS.length - 1 && (
                    <Icon name="ChevronRight" size={14} className="text-famall-red/40 flex-shrink-0 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINING (БЛОК 8) ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Обучение</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">
                Тебя не оставят<br />«разбирайся сам»
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-8 reveal delay-200">
                Практические мастер-классы с разбором реальных кейсов.
                Пошаговая система с наставничеством — конкретные инструменты, которые применяешь сразу.
              </p>
              <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-red-dark transition-colors reveal delay-300">
                Записаться на старт <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="space-y-px reveal delay-200">
              {TRAINING.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-famall-platinum p-4 border border-famall-platinum-dark hover:bg-white transition-colors group">
                  <div className="w-8 h-8 bg-famall-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-famall-red transition-colors duration-300">
                    <span className="font-montserrat font-black text-xs text-famall-red group-hover:text-white transition-colors duration-300">0{i + 1}</span>
                  </div>
                  <span className="font-ibm text-sm text-famall-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INCOME (БЛОК 9) ─── */}
      <section className="py-20 px-4 bg-famall-platinum">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Доход</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">Откуда деньги</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-famall-platinum-dark mb-10">
            {INCOME_STEPS.map((s, i) => (
              <div key={i} className={`bg-white p-8 hover:bg-famall-platinum transition-colors reveal delay-${i * 100}`}>
                <div className="font-montserrat font-black text-3xl text-famall-red/20 mb-4">{s.step}</div>
                <div className="font-montserrat font-bold text-base text-famall-dark mb-3">{s.title}</div>
                <div className="text-sm text-famall-silver font-ibm leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-famall-platinum-dark p-6 reveal delay-400">
            <div className="flex gap-3 items-start">
              <Icon name="Info" size={18} className="text-famall-silver mt-0.5 flex-shrink-0" />
              <p className="text-sm font-ibm text-famall-silver-dark leading-relaxed">
                <strong className="text-famall-dark font-semibold">Важно:</strong> Доход зависит от действий, команды и активности. Никаких фиксированных сумм — только реальные результаты вашей работы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EARLY ENTRY (БЛОК 10) ─── */}
      <section className="py-20 px-4 bg-famall-red">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-widest text-white/60 uppercase mb-6 reveal">Ранний вход</div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6 reveal delay-100">
                Сейчас<br />формируется рынок
              </h2>
              <p className="font-ibm text-lg text-white/80 leading-relaxed mb-4 reveal delay-200">
                Это момент, когда ещё можно зайти и занять позицию.
              </p>
              <p className="font-ibm text-white/60 text-sm mb-8 reveal delay-200">
                Позже — будешь догонять тех, кто зашёл сейчас.
              </p>
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-famall-red font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-platinum transition-colors reveal delay-300">
                Занять место сейчас <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal delay-200">
              {[
                { num: "Ранний", sub: "этап входа в Россию и СНГ" },
                { num: "Первые", sub: "позиции в структуре ещё свободны" },
                { num: "Рост", sub: "рынка FMCG в России" },
                { num: "Старт", sub: "формирования партнёрской сети" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/20 p-5">
                  <div className="font-montserrat font-black text-xl text-white mb-1">{item.num}</div>
                  <div className="text-xs text-white/60 font-ibm">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── START PACK ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Вход в партнёрство</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">
                Старт партнёра<br />от 17 500 ₽
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-8 reveal delay-200">
                Стартовый пакет включает всё необходимое для начала работы
                с первого дня — без лишних затрат и без опыта продаж.
              </p>
              <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-red-dark transition-colors reveal delay-300 shadow-lg shadow-famall-red/20">
                Получить условия партнёрства <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-px bg-famall-platinum-dark reveal delay-200">
              {[
                { icon: "Package", title: "Продуктовый набор", desc: "Ассортимент для работы и демонстрации" },
                { icon: "GraduationCap", title: "Обучение", desc: "Живые мастер-классы и видеокурсы" },
                { icon: "Users", title: "Наставничество", desc: "Куратор с первого дня" },
                { icon: "BarChart2", title: "Маркетинг-план", desc: "Личный разбор системы дохода" },
                { icon: "FileText", title: "Материалы", desc: "Карточки, посты, сценарии продаж" },
                { icon: "Wand2", title: "ИИ-инструменты", desc: "Доступ к системе создания контента" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 hover:bg-famall-platinum transition-colors">
                  <Icon name={item.icon} size={18} className="text-famall-red mb-2" />
                  <div className="font-montserrat font-bold text-xs text-famall-dark mb-1">{item.title}</div>
                  <div className="text-xs text-famall-silver font-ibm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN BLOCK (БЛОК 11) ─── */}
      <section className="py-20 px-4 bg-famall-platinum">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Почему не получается</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-8 reveal delay-100">
                Почему не получается<br />у большинства
              </h2>
              <div className="space-y-3 reveal delay-200">
                {PAIN_POINTS.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 border border-famall-platinum-dark">
                    <div className="w-8 h-8 bg-famall-red/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="X" size={14} className="text-famall-red" />
                    </div>
                    <span className="font-ibm text-sm text-famall-dark">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-famall-dark p-10 reveal delay-200">
              <div className="font-montserrat font-black text-2xl text-white mb-6">В Famall это закрыто</div>
              <div className="space-y-4">
                {[
                  { icon: "CheckCircle", text: "Готовая система продаж и продвижения" },
                  { icon: "CheckCircle", text: "Продукт с повторным спросом — клиент возвращается" },
                  { icon: "CheckCircle", text: "Наставник и команда с первого дня" },
                  { icon: "CheckCircle", text: "ИИ-инструменты — постоянный поток контента" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name={item.icon} size={18} className="text-famall-red mt-0.5 flex-shrink-0" />
                    <span className="font-ibm text-sm text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="#cta" className="mt-8 inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-6 py-3 hover:bg-famall-red-dark transition-colors">
                Хочу разобраться <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FORM (БЛОК 12) ─── */}
      <section className="py-20 px-4 bg-white" id="cta">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Оставить заявку</div>
              <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-famall-dark mb-4 reveal delay-100">
                Хочешь понять,<br />подходит ли тебе?
              </h2>
              <p className="font-ibm text-famall-silver-dark max-w-xl mx-auto reveal delay-200">
                Покажем продукт, систему и как на этом зарабатывать.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-famall-platinum-dark p-12 text-center">
                <div className="w-16 h-16 bg-famall-red/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={28} className="text-famall-red" />
                </div>
                <h3 className="font-montserrat font-black text-2xl text-famall-dark mb-3">Заявка принята</h3>
                <p className="font-ibm text-famall-silver-dark">
                  Свяжемся с вами в ближайшее время для личного разбора.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-famall-platinum border border-famall-platinum-dark p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Имя</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors bg-white"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Телефон</label>
                    <input
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors bg-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Город</label>
                  <input
                    value={formData.city}
                    onChange={e => setFormData(p => ({ ...p, city: e.target.value }))}
                    className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors bg-white"
                    placeholder="Ваш город"
                  />
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-3">Способ связи</label>
                  <div className="flex flex-wrap gap-2">
                    {["WhatsApp", "Telegram", "VK", "Звонок"].map(opt => (
                      <button
                        key={opt} type="button"
                        onClick={() => setFormData(p => ({ ...p, contact: opt }))}
                        className={`px-4 py-2 text-xs font-montserrat font-semibold tracking-wide border transition-all duration-200 ${
                          formData.contact === opt
                            ? "bg-famall-dark text-white border-famall-dark"
                            : "bg-white text-famall-silver-dark border-famall-platinum-dark hover:border-famall-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-3">Что интересует</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(item => (
                      <button
                        key={item} type="button"
                        onClick={() => toggleInterest(item)}
                        className={`px-4 py-2 text-xs font-montserrat font-semibold tracking-wide border transition-all duration-200 ${
                          formData.interest.includes(item)
                            ? "bg-famall-red text-white border-famall-red"
                            : "bg-white text-famall-silver-dark border-famall-platinum-dark hover:border-famall-red hover:text-famall-red"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-famall-red text-white font-montserrat font-bold text-base py-4 hover:bg-famall-red-dark transition-colors shadow-lg shadow-famall-red/20">
                  Получить условия и разбор <Icon name="ArrowRight" size={18} />
                </button>
                <div className="flex items-center justify-center gap-2 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-famall-red animate-pulse" />
                  <span className="text-xs font-ibm text-famall-silver-dark">Ранний этап входа в Россию и СНГ — сейчас выгоднее всего</span>
                </div>
                <p className="text-xs text-famall-silver font-ibm text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-famall-dark py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="FAMALL" className="h-10 w-10 object-cover rounded" />
            <div>
              <div className="font-montserrat font-black text-base text-white tracking-tight leading-tight">FAMALL Россия</div>
              <div className="text-[11px] font-ibm text-white/40 leading-tight">Платформа товаров с повторным спросом · Zeson Group</div>
            </div>
          </div>
          <div className="text-xs font-ibm text-white/30 text-center">
            © 2026 FAMALL Россия. Партнёрская модель. Производственная база Zeson Group.
          </div>
          <div className="text-xs font-ibm text-white/30 text-center max-w-xs">
            Доход зависит от действий и результатов
          </div>
        </div>
      </footer>

    </div>
  );
}