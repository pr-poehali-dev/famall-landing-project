import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const FACTORY_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/89317544-6923-4c18-abf4-3cc40f0ea65c.jpg";

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
  { value: "39 000", unit: "м²", label: "производственных площадей" },
  { value: "38+", unit: "", label: "стран присутствия" },
  { value: "100K", unit: "", label: "GMPC класс чистоты" },
  { value: "от 17 500", unit: "₽", label: "старт партнёра" },
];

const PRODUCTS = [
  { name: "BERCLEAN", category: "Уход за домом", color: "emerald", icon: "Sparkles", desc: "Профессиональная бытовая химия для дома. Концентрированные формулы, эффективные составы." },
  { name: "LIMANCY", category: "Косметика и уход", color: "red", icon: "Flower2", desc: "Линейка средств по уходу за кожей. Дерматологически проверено, без лишних компонентов." },
  { name: "SUTING / BOCARE", category: "Личная гигиена", color: "silver", icon: "Droplets", desc: "Средства личной гигиены ежедневного спроса. Мягкие формулы, доступная цена." },
  { name: "YIJIAN", category: "Уход за полостью рта", color: "emerald", icon: "Star", desc: "Профессиональная линейка стоматологического ухода. Зубные пасты, ополаскиватели." },
  { name: "OKFAD / PREDAWN", category: "Wellness", color: "gold", icon: "Leaf", desc: "Продукты для здорового образа жизни. БАДы, витамины, функциональное питание." },
];

const WHO_FOR = [
  { icon: "Users", title: "Новички", desc: "Хотите начать своё дело. Стартовый набор и наставничество с первого дня." },
  { icon: "Briefcase", title: "Предприниматели", desc: "Ищете дополнительный канал продаж. B2B и шоурум." },
  { icon: "Network", title: "Сетевые лидеры", desc: "Имеете опыт и хотите сильный продуктовый портфель." },
  { icon: "Share2", title: "Блогеры", desc: "Создаёте контент и хотите монетизировать аудиторию." },
  { icon: "TrendingUp", title: "Те, кто хочет рост", desc: "Ищете систему: обучение, ИИ-инструменты, команда." },
];

const AI_TOOLS = [
  { icon: "Image", title: "Карточки товара", desc: "AI-генерация карточек для маркетплейсов и соцсетей" },
  { icon: "Video", title: "Reels и VK Клипы", desc: "Сценарии и визуальные решения для коротких видео" },
  { icon: "FileText", title: "Посты и сторис", desc: "Тексты постов и сторис — адаптированные под ваш стиль" },
  { icon: "Presentation", title: "Презентации", desc: "Слайды для встреч с партнёрами и клиентами" },
  { icon: "MessageSquare", title: "Сценарии продаж", desc: "Скрипты и ответы на возражения для личных продаж" },
  { icon: "Wand2", title: "Упаковка продукта", desc: "Обложки, баннеры и промо-материалы" },
];

const TRAINING = [
  "ИИ для продаж и создания контента",
  "Упаковка продукта и личного бренда",
  "Продажи без давления и скриптов",
  "Партнёрская презентация",
  "Командная дупликация",
  "Работа с B2B-клиентами",
];

const INCOME_STEPS = [
  { step: "01", title: "Личные продажи", desc: "Продаёте продукт напрямую клиентам из своего окружения или через соцсети" },
  { step: "02", title: "Повторные покупки", desc: "Клиенты возвращаются за товарами ежедневного спроса снова и снова" },
  { step: "03", title: "Партнёрская команда", desc: "Подключаете партнёров и получаете бонусы с их товарооборота" },
  { step: "04", title: "Товарооборот структуры", desc: "Бонусы по маркетинг-плану растут вместе с объёмом команды" },
];

const FAQS = [
  { q: "Нужен ли склад для работы?", a: "Нет. Вы можете работать без склада — делать заказы под конкретных клиентов или использовать небольшой стартовый набор для демонстрации продукта." },
  { q: "Подойдёт ли это новичку без опыта продаж?", a: "Да. Стартовый пакет включает обучение, наставничество и готовые материалы для продаж. Опыт не требуется — важно желание." },
  { q: "Можно ли совмещать с основной работой?", a: "Да. Большинство партнёров начинают именно так — параллельно с основной занятостью, постепенно наращивая объёмы." },
  { q: "Сколько можно заработать?", a: "Доход зависит от вашей активности, объёма личных продаж, размера команды и выполнения условий маркетинг-плана. Точные цифры покажем при индивидуальном разборе." },
  { q: "Можно ли развивать через соцсети?", a: "Да. Именно для этого созданы ИИ-инструменты — карточки товара, посты, видео, сторис и сценарии продвижения для любых платформ." },
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

  const interests = ["Продукт", "Партнёрство", "B2B", "Шоурум", "Маркетинг-план", "ИИ-инструменты"];

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

  const productColor = (color: string) => ({
    icon: color === 'emerald' ? 'text-famall-emerald' : color === 'gold' ? 'text-famall-gold' : 'text-famall-red',
    bg: color === 'emerald' ? 'bg-famall-emerald/10' : color === 'gold' ? 'bg-famall-gold/10' : 'bg-famall-red/10',
    label: color === 'emerald' ? 'text-famall-emerald' : color === 'gold' ? 'text-famall-gold' : 'text-famall-red',
  });

  return (
    <div className="font-ibm bg-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-montserrat font-black text-xl text-famall-dark tracking-tight">
            FAM<span className="text-famall-red">ALL</span>
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
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img src={FACTORY_IMG} alt="FAMALL производство" className="w-full h-full object-cover opacity-8" style={{ opacity: 0.08 }} />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-famall-platinum/60" />
        </div>
        <div className="absolute top-1/3 right-0 w-px h-48 bg-famall-red/15 hidden lg:block" />
        <div className="absolute top-28 right-28 w-20 h-20 border border-famall-platinum-dark rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-8 w-1.5 h-24 bg-famall-red/25 hidden lg:block" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6 reveal">
              Партнёрская FMCG-платформа · Россия и СНГ
            </div>
            <h1 className="font-montserrat font-black text-5xl md:text-7xl leading-[0.92] tracking-tight text-famall-dark mb-8 reveal delay-100">
              Famall выходит<br />
              <span className="text-famall-red">на рынок</span><br />
              России и СНГ
            </h1>
            <p className="font-ibm text-lg md:text-xl text-famall-silver-dark leading-relaxed max-w-2xl mb-10 reveal delay-200">
              Партнёрская FMCG-платформа нового поколения: премиальные товары ежедневного спроса,
              производственная база Zeson Group, гибридная модель развития и ИИ-инструменты
              для продаж, контента и масштабирования команды.
            </p>
            <div className="flex flex-wrap gap-4 mb-16 reveal delay-300">
              <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm tracking-wide px-8 py-4 hover:bg-famall-red-dark transition-colors">
                Получить условия партнёрства <Icon name="ArrowRight" size={16} />
              </a>
              <a href="#platform" className="inline-flex items-center gap-2 bg-transparent text-famall-dark font-montserrat font-semibold text-sm px-8 py-4 border border-famall-dark hover:bg-famall-dark hover:text-white transition-all">
                Посмотреть презентацию
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-famall-platinum-dark reveal delay-400">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white p-6 hover:bg-famall-platinum transition-colors duration-300">
                  <div className="font-montserrat font-black text-3xl text-famall-dark leading-none">
                    {s.value}<span className="text-famall-red text-xl ml-1">{s.unit}</span>
                  </div>
                  <div className="text-xs text-famall-silver mt-2 font-ibm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOT JARS ─── */}
      <section className="py-20 px-4 bg-famall-dark" id="not-jars">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6 reveal">Что такое Famall на самом деле</div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6 reveal delay-100">
                Это не бизнес<br />с баночками
              </h2>
              <p className="font-ibm text-lg text-white/70 leading-relaxed mb-8 reveal delay-200">
                Партнёр Famall получает не просто товар — он получает готовую систему для бизнеса.
              </p>
              <div className="space-y-3 reveal delay-300">
                {[
                  ["Продукт", "Премиальный FMCG с повторным спросом"],
                  ["Обучение", "Живые мастер-классы и видеокурсы"],
                  ["ИИ-контент", "Карточки, видео, посты, презентации"],
                  ["Поддержка", "Наставник с первого дня"],
                  ["Сценарии", "Готовые скрипты и диалоги для продаж"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-montserrat font-bold text-sm text-white">{title}</div>
                      <div className="text-xs text-white/50 mt-0.5 font-ibm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-famall-red/10 border border-famall-red/20 p-10 reveal delay-200">
              <div className="font-montserrat font-black text-5xl text-famall-red/15 mb-6">SYSTEM</div>
              <div className="space-y-5">
                {[
                  "Продукт с повторным спросом",
                  "Обучение и наставничество",
                  "ИИ-инструменты для продвижения",
                  "Гибридная бизнес-модель",
                  "Международная производственная база"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-famall-red/40 flex items-center justify-center flex-shrink-0">
                      <span className="font-montserrat font-bold text-xs text-famall-red">0{i + 1}</span>
                    </div>
                    <span className="font-ibm text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLATFORM ─── */}
      <section className="py-20 px-4" id="platform">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">О платформе</div>
            <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight tracking-tight text-famall-dark mb-6 reveal delay-100">Что такое Famall</h2>
            <p className="font-ibm text-base leading-relaxed text-famall-silver-dark text-lg reveal delay-200">
              Famall — платформа на базе товаров ежедневного спроса: бытовая химия, косметика,
              средства ухода, личная гигиена, товары для дома и wellness. Продукты с реальным,
              регулярным потреблением — клиент возвращается сам.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-famall-platinum-dark">
            {[
              { icon: "Package", title: "FMCG-товары", desc: "Бытовая химия, косметика, гигиена, wellness — ежедневный спрос без сезонности" },
              { icon: "RefreshCw", title: "Повторный спрос", desc: "Клиент использует продукт и возвращается за новой партией — без дополнительной рекламы" },
              { icon: "Globe", title: "38+ стран", desc: "Международное присутствие, сертификация и стандарты производства мирового уровня" },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 hover:bg-famall-platinum transition-colors duration-300 reveal delay-${(i + 1) * 100}`}>
                <div className="w-10 h-10 bg-famall-red/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={20} className="text-famall-red" />
                </div>
                <div className="font-montserrat font-bold text-lg text-famall-dark mb-2">{item.title}</div>
                <div className="font-ibm text-sm text-famall-silver leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTION ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="production">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Производственная база</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight tracking-tight text-famall-dark mb-6 reveal delay-100">Zeson Group</h2>
              <p className="font-ibm text-base leading-relaxed text-famall-silver-dark mb-8 reveal delay-200">
                Современный производственный комплекс площадью 39 000 м² с полным циклом производства:
                от лабораторной разработки формул до готового продукта. Стерильные зоны, технологичные
                линии, жёсткий контроль качества на каждом этапе.
              </p>
              <div className="grid grid-cols-2 gap-4 reveal delay-300">
                {[
                  { value: "39 000 м²", label: "производство" },
                  { value: "GMPC 100K", label: "класс чистоты" },
                  { value: "R&D лаб", label: "разработка формул" },
                  { value: "Полный цикл", label: "от формулы до продукта" },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-4 border border-famall-platinum-dark">
                    <div className="font-montserrat font-black text-lg text-famall-dark">{s.value}</div>
                    <div className="text-xs text-famall-silver mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal delay-200">
              <img src={FACTORY_IMG} alt="Производство Zeson Group" className="w-full object-cover" style={{ height: 400 }} />
              <div className="absolute bottom-0 left-0 right-0 bg-famall-dark/80 p-4">
                <div className="font-montserrat font-bold text-sm text-white">Zeson Group Manufacturing</div>
                <div className="text-xs text-white/50 font-ibm mt-0.5">Производственный комплекс полного цикла</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATION ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Сертификация и доверие</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">Международные стандарты</h2>
            <p className="font-ibm text-base text-famall-silver-dark reveal delay-200">
              Продукция сертифицирована по международным стандартам. Официальная логистика.
              Работаем с физлицами, ИП и ООО.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-famall-platinum-dark mb-12">
            {["ISO", "GMPC", "FDA", "Halal", "GMP"].map((cert, i) => (
              <div key={cert} className={`bg-white p-8 text-center hover:bg-famall-platinum transition-colors reveal delay-${i * 100}`}>
                <div className="font-montserrat font-black text-xl text-famall-dark mb-2">{cert}</div>
                <div className="w-8 h-0.5 bg-famall-red mx-auto" />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 reveal delay-300">
            {[
              { icon: "Building2", title: "Физлица, ИП, ООО", desc: "Официальное оформление для любой формы деятельности" },
              { icon: "Truck", title: "Официальная логистика", desc: "Доставка по всей России и СНГ. Отслеживание на каждом этапе." },
              { icon: "Shield", title: "Контроль качества", desc: "Лабораторный контроль на каждом этапе производства" },
            ].map((item, i) => (
              <div key={i} className="bg-famall-platinum border border-famall-platinum-dark p-6 flex gap-4">
                <div className="w-10 h-10 bg-famall-red flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-famall-dark mb-1">{item.title}</div>
                  <div className="text-xs text-famall-silver font-ibm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="products">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Продуктовые направления</div>
            <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">Линейки Famall</h2>
            <p className="font-ibm text-famall-silver-dark max-w-2xl reveal delay-200">
              Премиальный FMCG по цене, доступной массовому потребителю. Для клиента — качество
              без переплаты. Для партнёра — товар с реальным, повторным спросом.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-famall-platinum-dark">
            {PRODUCTS.map((p, i) => {
              const c = productColor(p.color);
              return (
                <div key={p.name} className={`bg-white p-8 hover:bg-famall-platinum transition-all duration-300 group reveal delay-${i * 100}`}>
                  <div className={`w-10 h-10 flex items-center justify-center mb-4 ${c.bg}`}>
                    <Icon name={p.icon} size={20} className={c.icon} />
                  </div>
                  <div className="font-montserrat font-black text-xl text-famall-dark mb-1 group-hover:text-famall-red transition-colors">{p.name}</div>
                  <div className={`text-xs font-montserrat font-semibold tracking-wider uppercase mb-3 ${c.label}`}>{p.category}</div>
                  <p className="text-sm text-famall-silver font-ibm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
            <div className="bg-famall-red p-8 flex flex-col justify-between reveal delay-500">
              <div>
                <div className="font-montserrat font-black text-4xl text-white/20 mb-4">5+</div>
                <div className="font-montserrat font-black text-xl text-white mb-2">направлений</div>
                <div className="text-sm text-white/70 font-ibm">Полный ассортимент товаров ежедневного спроса в одной партнёрской системе</div>
              </div>
              <a href="#cta" className="mt-8 text-white border border-white/40 px-4 py-2 text-xs font-montserrat font-semibold tracking-wider hover:bg-white hover:text-famall-red transition-all inline-flex items-center gap-2">
                Узнать подробнее <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO FOR ─── */}
      <section className="py-20 px-4" id="partnership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Для кого партнёрство</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">Famall подойдёт вам, если…</h2>
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
      <section className="py-20 px-4 bg-famall-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Бизнес-модель</div>
            <h2 className="font-montserrat font-black text-4xl text-white mb-4 reveal delay-100">Гибридная модель</h2>
            <p className="font-ibm text-white/60 reveal delay-200">Два пути роста — выберите свой или комбинируйте</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-famall-gold/30 p-10 reveal">
              <div className="text-xs font-montserrat font-semibold tracking-widest text-famall-gold uppercase mb-4">B2B направление</div>
              <h3 className="font-montserrat font-black text-2xl text-white mb-4">Шоурумы и оптовые продажи</h3>
              <div className="space-y-3">
                {["Открытие шоурума или точки продаж", "Работа с корпоративными клиентами", "Оптовые поставки", "Сотрудничество с розничными сетями"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-gold rounded-full flex-shrink-0" />
                    <span className="text-sm text-white/70 font-ibm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-famall-red/30 p-10 reveal delay-200">
              <div className="text-xs font-montserrat font-semibold tracking-widest text-famall-red uppercase mb-4">Партнёрская сеть</div>
              <h3 className="font-montserrat font-black text-2xl text-white mb-4">Личные продажи и команда</h3>
              <div className="space-y-3">
                {["Личные продажи клиентам", "Повторные покупки с постоянного круга", "Сборка партнёрской команды", "Бонусы с товарооборота структуры"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                    <span className="text-sm text-white/70 font-ibm">{item}</span>
                  </div>
                ))}
              </div>
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
              <a href="#cta" className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-red-dark transition-colors reveal delay-300">
                Получить условия <Icon name="ArrowRight" size={16} />
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

      {/* ─── AI TOOLS ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="ai">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">ИИ-инструменты</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">
              Контент и продвижение<br />с помощью ИИ
            </h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">
              Партнёры обучаются создавать карточки товаров, видео, посты и презентации
              с помощью ИИ-инструментов — без опыта в дизайне и маркетинге.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-famall-platinum-dark mb-12">
            {AI_TOOLS.map((tool, i) => (
              <div key={i} className={`bg-white p-8 group transition-all duration-300 border-b-2 border-b-transparent hover:border-b-famall-red reveal delay-${i * 100}`}>
                <div className="w-10 h-10 bg-famall-dark flex items-center justify-center mb-4 group-hover:bg-famall-red transition-colors duration-300">
                  <Icon name={tool.icon} size={18} className="text-white" />
                </div>
                <div className="font-montserrat font-bold text-base text-famall-dark mb-2">{tool.title}</div>
                <div className="text-sm text-famall-silver font-ibm leading-relaxed">{tool.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-famall-dark p-8 md:p-12 reveal delay-300">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6">Цифровая система дупликации</div>
            <div className="flex flex-wrap items-center gap-0">
              {DUPLIC_STEPS.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center px-3 py-2">
                    <div className="w-8 h-8 bg-famall-red/20 border border-famall-red/40 flex items-center justify-center mb-2">
                      <span className="font-montserrat font-black text-xs text-famall-red">{i + 1}</span>
                    </div>
                    <span className="text-xs text-white/70 font-ibm whitespace-nowrap">{step}</span>
                  </div>
                  {i < DUPLIC_STEPS.length - 1 && (
                    <Icon name="ChevronRight" size={14} className="text-famall-red/40 flex-shrink-0 mb-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINING ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Обучение и мастер-классы</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">
                Знания, которые<br />работают
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-8 reveal delay-200">
                Практические мастер-классы с разбором реальных кейсов.
                Не теория — конкретные инструменты, которые применяете сразу.
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

      {/* ─── INCOME ─── */}
      <section className="py-20 px-4 bg-famall-platinum">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Как формируется доход</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">4 источника дохода</h2>
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
                <strong className="text-famall-dark font-semibold">Важно:</strong> Доход партнёра зависит от его личной активности, объёма продаж,
                размера и активности команды, а также от выполнения условий маркетинг-плана.
                Никаких гарантий фиксированного дохода — только реальные результаты вашей работы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EARLY ENTRY ─── */}
      <section className="py-20 px-4 bg-famall-red">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-widest text-white/60 uppercase mb-6 reveal">Ранний вход</div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6 reveal delay-100">
                Famall на этапе<br />формирования сети
              </h2>
              <p className="font-ibm text-lg text-white/80 leading-relaxed mb-8 reveal delay-200">
                В России и СНГ партнёрская сеть только формируется. На раннем этапе —
                больше возможностей занять сильную позицию, собрать первую команду
                и закрепить своё место в структуре.
              </p>
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-famall-red font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-platinum transition-colors reveal delay-300">
                Занять место сейчас <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal delay-200">
              {[
                { num: "Ранний", sub: "этап входа в Россию и СНГ" },
                { num: "Первые", sub: "возможности для позиционирования" },
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

      {/* ─── FAQ ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Часто задают</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">
                Вопросы<br />и ответы
              </h2>
              <p className="font-ibm text-famall-silver-dark reveal delay-200">
                Отвечаем честно — без обещаний лёгких денег и быстрых результатов.
              </p>
            </div>
            <div className="space-y-px reveal delay-200">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-famall-platinum-dark">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-famall-platinum transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-montserrat font-semibold text-sm text-famall-dark pr-4">{faq.q}</span>
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} className="text-famall-red flex-shrink-0" />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm font-ibm text-famall-silver leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FORM ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="cta">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Оставить заявку</div>
              <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-famall-dark mb-4 reveal delay-100">
                Хотите понять,<br />подходит ли вам Famall?
              </h2>
              <p className="font-ibm text-famall-silver-dark max-w-xl mx-auto reveal delay-200">
                Оставьте заявку — покажем продуктовую линейку, условия входа,
                маркетинг-план и ИИ-инструменты для продвижения.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-famall-platinum-dark p-12 text-center">
                <div className="w-12 h-12 bg-famall-red/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={24} className="text-famall-red" />
                </div>
                <div className="font-montserrat font-bold text-xl text-famall-dark mb-2">Заявка принята</div>
                <div className="text-sm text-famall-silver font-ibm">Мы свяжемся с вами в удобный для вас способ в ближайшее время.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-famall-platinum-dark p-8 md:p-12 space-y-6 reveal delay-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Имя *</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Телефон *</label>
                    <input
                      type="tel" required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Город</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData(p => ({ ...p, city: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors"
                      placeholder="Ваш город"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-semibold text-famall-silver-dark uppercase tracking-wider mb-2">Способ связи</label>
                    <select
                      value={formData.contact}
                      onChange={e => setFormData(p => ({ ...p, contact: e.target.value }))}
                      className="w-full border border-famall-platinum-dark px-4 py-3 text-sm font-ibm text-famall-dark focus:outline-none focus:border-famall-red transition-colors appearance-none bg-white"
                    >
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                      <option>Звонок</option>
                      <option>Email</option>
                    </select>
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
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-famall-red text-white font-montserrat font-bold text-base py-4 hover:bg-famall-red-dark transition-colors">
                  Отправить заявку <Icon name="ArrowRight" size={18} />
                </button>
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-montserrat font-black text-xl text-white tracking-tight">
            FAM<span className="text-famall-red">ALL</span>
          </div>
          <div className="text-xs font-ibm text-white/30 text-center">
            © 2024 FAMALL Россия. Партнёрская FMCG-платформа Zeson Group.
          </div>
          <div className="text-xs font-ibm text-white/30 text-center">
            Доход зависит от активности и условий маркетинг-плана
          </div>
        </div>
      </footer>

    </div>
  );
}