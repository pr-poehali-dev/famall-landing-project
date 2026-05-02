import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const FACTORY_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/89317544-6923-4c18-abf4-3cc40f0ea65c.jpg";
const HERO_PRODUCT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/f7495e26-3cd4-4b85-9243-f804b5a06b40.jpg";
const LOGO_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/6aef32ab-6791-4c39-9dbf-3d018da18144.jpg";
const CAT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/93e4f138-98d0-4f4d-871d-d4610a4f6ead.png";

const TG_LINK = "https://t.me/+4KTa6_cKA6s2OWZi";
const TG_POST = "https://t.me/FaMall_Rus/5";

function TgBtn({ text = "Написать в Telegram", href = TG_LINK, className = "" }: { text?: string; href?: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm tracking-wide px-8 py-4 hover:bg-famall-red-dark transition-colors shadow-lg shadow-famall-red/20 ${className}`}
    >
      {text} <Icon name="ArrowRight" size={16} />
    </a>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const NAV_ITEMS = [
  { label: "О бренде", href: "#platform" },
  { label: "Производство", href: "#production" },
  { label: "Продукты", href: "#products" },
  { label: "Партнёрство", href: "#partnership" },
  { label: "ИИ-инструменты", href: "#ai" },
];

const PRODUCTS = [
  { name: "BERCLEAN", category: "Дом", icon: "Sparkles", desc: "Бытовая химия — то, что покупают в каждую семью." },
  { name: "LIMANCY", category: "Уход", icon: "Flower2", desc: "Уход за кожей. Дерматологически проверено." },
  { name: "SUTING / BOCARE", category: "Гигиена", icon: "Droplets", desc: "Средства личной гигиены ежедневного спроса." },
  { name: "YIJIAN", category: "Полость рта", icon: "Star", desc: "Зубные пасты, ополаскиватели, профуход." },
  { name: "OKFAD / PREDAWN", category: "Здоровье", icon: "Leaf", desc: "БАДы, витамины, функциональное питание." },
];

const WHO_FOR = [
  { icon: "PlusCircle", title: "Доп доход" },
  { icon: "LogOut", title: "Выйти из найма" },
  { icon: "TrendingUp", title: "Свой поток" },
  { icon: "Users", title: "Масштаб" },
  { icon: "Briefcase", title: "B2B" },
];

const INCOME_STEPS = [
  { n: "01", title: "Личные продажи", desc: "Продаёте напрямую — клиентам из окружения или соцсетей" },
  { n: "02", title: "Повторные покупки", desc: "Клиенты возвращаются за товарами сами — без доп. рекламы" },
  { n: "03", title: "Команда", desc: "Подключаете партнёров, получаете бонусы с их оборота" },
  { n: "04", title: "Рост оборота", desc: "Бонусы по маркетинг-плану растут вместе со структурой" },
];

const CONTENT_CARDS = [
  { icon: "FileText", title: "Посты и сторис", label: "Контент", btn: "Забрать контент" },
  { icon: "Video", title: "Видео и сценарии", label: "Reels / VK", btn: "Забрать сценарии" },
  { icon: "MessageSquare", title: "Скрипты продаж", label: "Воронки", btn: "Получить скрипты" },
  { icon: "Presentation", title: "Презентации", label: "Встречи", btn: "Скачать" },
];

export default function Index() {
  useReveal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catPhase, setCatPhase] = useState<"walking" | "sitting" | "done">("walking");

  useEffect(() => {
    const t1 = setTimeout(() => setCatPhase("sitting"), 17500);
    const t2 = setTimeout(() => setCatPhase("done"), 30000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="font-ibm bg-white overflow-x-hidden">

      {/* 🐱 Кошка идёт */}
      {catPhase === "walking" && (
        <div className="cat-walking" aria-hidden="true">
          <img src={CAT_IMG} alt="" draggable={false} />
        </div>
      )}

      {/* 🐱 Кошка сидит + плашка */}
      {catPhase === "sitting" && (
        <div className="cat-sitting" aria-hidden="true">
          <div className="relative">
            <div className="absolute bottom-full right-0 mb-2 bg-famall-dark text-white text-[10px] font-ibm leading-snug px-3 py-2 shadow-lg" style={{ maxWidth: 190 }}>
              Ищите товары с нашей кошкой —<br />
              <span className="text-famall-red font-semibold">не нарвитесь на подделку</span>
              <div className="absolute bottom-0 right-6 translate-y-full border-4 border-transparent border-t-famall-dark" />
            </div>
            <img src={CAT_IMG} alt="FAMALL" draggable={false} />
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={LOGO_IMG} alt="FAMALL" className="h-9 w-9 object-cover rounded" />
            <span className="font-montserrat font-black text-lg text-famall-red tracking-tight">FAMALL</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} className="font-ibm text-sm text-famall-silver-dark hover:text-famall-red transition-colors duration-200">{item.label}</a>
            ))}
          </div>
          <TgBtn text="Перейти" className="hidden md:inline-flex !px-5 !py-2.5 !text-xs" />
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name="Menu" size={24} className="text-famall-dark" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="font-ibm text-sm text-famall-silver-dark">{item.label}</a>
            ))}
            <TgBtn text="Перейти в Telegram" className="w-fit" />
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 bg-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-famall-platinum/40" />
        <div className="max-w-6xl mx-auto px-4 relative z-10 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-famall-red text-white px-3 py-1.5 mb-5 reveal">
                <img src={LOGO_IMG} alt="" className="h-5 w-5 object-cover rounded-sm flex-shrink-0" />
                <span className="font-montserrat font-bold text-xs tracking-wide uppercase">Эксклюзив Россия</span>
              </div>
              <h1 className="font-montserrat font-black text-5xl md:text-6xl leading-[0.92] tracking-tight text-famall-dark mb-6 reveal delay-100">
                FAMALL —<br />
                <span className="text-famall-red">премиальный бренд</span><br />
                товаров с повторным спросом
              </h1>
              <div className="space-y-2 mb-6 reveal delay-200">
                {[
                  "Это не маркетплейс.",
                  "Не перепродажа чужого.",
                  "И не «заработок на баночках».",
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                    <span className="font-ibm text-famall-silver-dark text-base">{t}</span>
                  </div>
                ))}
              </div>
              <p className="font-ibm text-famall-silver-dark mb-3 reveal delay-200">
                FAMALL — это брендовая продукция, которая производится на заводах с контролем качества и создаётся под массовый спрос.
              </p>
              <p className="font-ibm text-sm text-famall-dark font-semibold border-l-2 border-famall-red pl-4 mb-6 reveal delay-200">
                Товары, которые покупают снова.<br />Потому что ими пользуются каждый день.
              </p>
              <div className="flex items-center gap-2 mb-6 reveal delay-200">
                <div className="w-1.5 h-1.5 rounded-full bg-famall-red animate-pulse flex-shrink-0" />
                <span className="text-xs font-ibm text-famall-silver-dark">Сейчас этап формирования рынка — позже вход будет сложнее.</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-5 reveal delay-300">
                <TgBtn text="👉 Перейти и посмотреть" />
                <a href="#not-jars" className="inline-flex items-center gap-2 bg-transparent text-famall-dark font-montserrat font-semibold text-sm px-8 py-4 border border-famall-platinum-dark hover:border-famall-dark transition-all">
                  Как это работает
                </a>
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

            <div className="relative reveal delay-200">
              <div className="relative overflow-hidden" style={{ height: 520 }}>
                <img src={HERO_PRODUCT_IMG} alt="FAMALL продукция" className="w-full h-full object-cover" />
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

      {/* ─── РЫНОК ─── */}
      <section className="py-20 px-4 bg-famall-dark" id="not-jars">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6 reveal">Сейчас формируется рынок</div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6 reveal delay-100">
                Зайди сейчас —<br />или догоняй потом
              </h2>
              <p className="font-ibm text-white/70 mb-4 reveal delay-150">
                Ты либо заходишь сейчас и занимаешь позицию, либо потом догоняешь тех, кто уже внутри.
              </p>
              <p className="font-ibm text-white/70 mb-8 reveal delay-200">
                Спрос на товары ежедневного использования растёт всегда. Но зарабатывают не те, кто «просто покупает». А те, кто заходят раньше.
              </p>
              <TgBtn text="👉 Перейти и посмотреть" />
            </div>
            <div className="space-y-4 reveal delay-200">
              <div className="bg-famall-red/10 border border-famall-red/20 p-8">
                <p className="font-montserrat font-bold text-sm text-famall-red uppercase tracking-wider mb-5">Старт партнёра от 17 500 ₽</p>
                <p className="font-ibm text-sm text-white/60 mb-4">Ты получаешь не просто продукт, а:</p>
                <div className="space-y-2 mb-6">
                  {["доступ к бренду", "обучение", "готовые инструменты", "сценарии продаж", "систему запуска"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                      <span className="font-ibm text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="font-ibm text-sm text-white/50 mb-1">Ты не начинаешь с нуля.</p>
                  <p className="font-montserrat font-bold text-white text-lg">Ты заходишь в готовую модель.</p>
                </div>
              </div>
              <a href={TG_POST} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-famall-red font-montserrat font-bold text-sm px-6 py-4 hover:bg-famall-platinum transition-colors">
                👉 Посмотреть, как это работает <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ОТКУДА ДЕНЬГИ ─── */}
      <section className="py-20 px-4 bg-famall-platinum">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Доход</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">Откуда деньги</h2>
              <p className="font-ibm text-famall-silver-dark mb-6 reveal delay-150">
                Есть два варианта:
              </p>
              <div className="space-y-3 mb-8 reveal delay-200">
                <div className="flex items-center gap-3 bg-white p-4 border border-famall-platinum-dark">
                  <Icon name="X" size={14} className="text-famall-silver flex-shrink-0" />
                  <span className="font-ibm text-sm text-famall-silver">Продал → заработал один раз</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-famall-red/30">
                  <Icon name="Check" size={14} className="text-famall-red flex-shrink-0" />
                  <span className="font-ibm text-sm text-famall-dark font-semibold">Выстроил систему → получаешь постоянно</span>
                </div>
              </div>
              <p className="font-ibm text-sm text-famall-silver-dark mb-4 reveal delay-300">В FAMALL упор на второе:</p>
              <div className="space-y-px mb-8 reveal delay-300">
                {INCOME_STEPS.map((s, i) => (
                  <div key={i} className="bg-white p-5 flex items-start gap-4">
                    <div className="font-montserrat font-black text-2xl text-famall-red/20 leading-none w-10 flex-shrink-0">{s.n}</div>
                    <div>
                      <div className="font-montserrat font-bold text-sm text-famall-dark mb-1">{s.title}</div>
                      <div className="text-xs text-famall-silver font-ibm">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <TgBtn text="Показать мою модель" />
            </div>
            <div className="space-y-4 reveal delay-200">
              <div className="bg-famall-dark p-8">
                <p className="font-ibm text-xs text-white/40 uppercase tracking-widest mb-5">Ты не ищешь клиентов заново каждый раз</p>
                <p className="font-montserrat font-bold text-xl text-white mb-3">Ты создаёшь поток.</p>
                <div className="space-y-3 mt-6 pt-6 border-t border-white/10">
                  {["повторные покупки", "команда", "рост оборота"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                      <span className="font-ibm text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-famall-platinum-dark p-5">
                <div className="flex gap-3 items-start">
                  <Icon name="Info" size={16} className="text-famall-silver mt-0.5 flex-shrink-0" />
                  <p className="text-xs font-ibm text-famall-silver leading-relaxed">
                    Доход зависит от действий, команды и активности. Никаких фиксированных сумм.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПОЧЕМУ НЕ ПОЛУЧАЕТСЯ ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Почему не получается у большинства</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">
                Поэтому каждый раз<br />всё с нуля
              </h2>
              <div className="space-y-2 mb-6 reveal delay-200">
                {["нет системы", "нет продукта с возвратом", "нет понимания продаж", "нет поддержки"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-famall-platinum p-4 border border-famall-platinum-dark">
                    <Icon name="X" size={14} className="text-famall-red flex-shrink-0" />
                    <span className="font-ibm text-sm text-famall-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-famall-dark p-10 reveal delay-200">
              <div className="font-montserrat font-black text-xl text-white mb-6">В FAMALL это закрыто</div>
              <div className="space-y-3 mb-8">
                {[
                  "продукт с повторным спросом",
                  "обучение с первого дня",
                  "команда и наставник",
                  "готовые инструменты",
                  "AI для продвижения",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-famall-red mt-0.5 flex-shrink-0" />
                    <span className="font-ibm text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6 mb-6">
                <p className="font-ibm text-sm text-white/50 mb-1">Ты не «разбираешься годами».</p>
                <p className="font-montserrat font-bold text-white">Ты сразу работаешь по системе.</p>
              </div>
              <TgBtn text="👉 Разобраться" href={TG_LINK} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI / CONTENT ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="ai">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">ИИ-инструменты для партнёров</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-4 reveal delay-100">
                Ты не думаешь,<br />что постить
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-6 reveal delay-150">
                У тебя уже есть всё готовое:
              </p>
              <div className="space-y-2 mb-6 reveal delay-200">
                {["посты", "сторис", "сценарии", "карточки товаров", "воронки"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                    <span className="font-ibm text-sm text-famall-dark">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-famall-red pl-4 reveal delay-300">
                <p className="font-ibm text-sm text-famall-silver mb-1">Ты не маркетолог.</p>
                <p className="font-montserrat font-bold text-famall-dark">Но выглядишь как команда.</p>
              </div>
            </div>
            <div className="space-y-4 reveal delay-200">
              <div className="bg-famall-dark p-8">
                <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-5">Цепочка уже выстроена</div>
                <div className="flex flex-wrap items-start gap-0 mb-6">
                  {["контент", "заявка", "созвон", "подключение", "обучение", "команда"].map((step, i, arr) => (
                    <div key={step} className="flex items-start">
                      <div className="flex flex-col items-center px-2 py-1">
                        <div className="w-8 h-8 bg-famall-red flex items-center justify-center mb-1.5">
                          <span className="font-montserrat font-black text-xs text-white">{i + 1}</span>
                        </div>
                        <span className="text-xs text-white/60 font-ibm whitespace-nowrap">{step}</span>
                      </div>
                      {i < arr.length - 1 && <Icon name="ChevronRight" size={13} className="text-famall-red/40 flex-shrink-0 mt-2.5" />}
                    </div>
                  ))}
                </div>
                <p className="font-ibm text-sm text-white/50 mb-1">Ты не создаёшь систему.</p>
                <p className="font-montserrat font-bold text-white">Ты заходишь в готовую.</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 reveal delay-200">
            {CONTENT_CARDS.map((card, i) => (
              <div key={i} className="bg-white border border-famall-platinum-dark p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-10 h-10 bg-famall-red/10 flex items-center justify-center mb-4">
                  <Icon name={card.icon} size={18} className="text-famall-red" />
                </div>
                <div className="font-montserrat font-bold text-sm text-famall-dark mb-1">{card.title}</div>
                <div className="text-xs text-famall-red font-ibm mb-4">{card.label}</div>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 bg-famall-dark text-white font-montserrat font-bold text-xs px-4 py-2.5 hover:bg-famall-red transition-colors">
                  👉 {card.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ОБУЧЕНИЕ ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Обучение</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-6 reveal delay-100">
                Тебя не оставят<br />«разбирайся сам»
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-8 reveal delay-200">
                Ты понимаешь, что делать с первого дня.
              </p>
              <TgBtn text="Начать" />
            </div>
            <div className="space-y-px reveal delay-200">
              {["пошаговая система", "наставник", "реальные кейсы", "поддержка"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-famall-platinum p-5 border border-famall-platinum-dark hover:bg-white transition-colors group">
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

      {/* ─── PRODUCTS ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="products">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Продукт</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">
              5 направлений, которые закрывают ежедневный спрос
            </h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">
              Это не «хочу — не хочу». Это то, что покупают всегда.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-famall-platinum-dark mb-10">
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
          <div className="text-center reveal delay-200">
            <TgBtn text="Узнать о продуктах" />
          </div>
        </div>
      </section>

      {/* ─── CERTS ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Стандарты качества</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark mb-4 reveal delay-100">
              Не просто слова на упаковке
            </h2>
            <p className="font-ibm text-famall-silver-dark reveal delay-200">
              ISO, GMPC, FDA, Halal — это стандарты, которые проходят только реальные производства.
            </p>
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
              { icon: "Shield", title: "Контроль сырья", desc: "Безопасность и стабильное качество" },
              { icon: "Globe", title: "Мировые требования", desc: "Соответствие международным стандартам" },
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
          <div className="bg-famall-platinum border border-famall-platinum-dark p-5 mt-4 reveal delay-300">
            <p className="font-ibm text-sm text-famall-dark text-center">
              Ты продаёшь не «что-то с рынка».<br />
              <span className="font-semibold">Ты работаешь с продуктом, которому доверяют.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTION ─── */}
      <section className="py-20 px-4 bg-famall-platinum" id="production">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 overflow-hidden reveal">
              <img src={FACTORY_IMG} alt="Zeson Group" className="w-full h-full object-cover" />
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
                Не склад. Производство.
              </h2>
              <p className="font-ibm text-famall-silver-dark mb-6 reveal delay-200">
                Большинство — перекупы. Здесь по-другому.
              </p>
              <div className="grid grid-cols-2 gap-px bg-famall-platinum-dark mb-8 reveal delay-300">
                {[
                  { val: "39 000", label: "м² площадей" },
                  { val: "Контроль", label: "на каждом этапе" },
                  { val: "Собственные", label: "разработки формул" },
                  { val: "Чистые", label: "производственные зоны" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5">
                    <div className="font-montserrat font-black text-lg text-famall-dark leading-none">{item.val}</div>
                    <div className="text-xs text-famall-silver font-ibm mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-famall-red/10 border border-famall-red/20 px-5 py-4 reveal delay-400">
                <p className="font-ibm text-sm text-famall-dark font-semibold">
                  Ты продаёшь бренд, а не ноунейм.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── КОШКА / ОРИГИНАЛ ─── */}
      <section className="py-20 px-4 bg-famall-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Как отличить оригинал</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-white mb-6 reveal delay-100">
                Ищи фирменную<br />кошку FAMALL
              </h2>
              <p className="font-ibm text-white/70 mb-4 reveal delay-200">
                Это знак оригинального продукта и контроля качества.
              </p>
              <div className="bg-famall-red/10 border border-famall-red/30 px-5 py-4 mb-8 reveal delay-300">
                <p className="font-montserrat font-bold text-white">Нет кошки — нет гарантии.</p>
              </div>
              <TgBtn text="Перейти в Telegram" />
            </div>
            <div className="flex flex-col items-center justify-center reveal delay-200">
              <img src={CAT_IMG} alt="FAMALL кошка" className="w-48 h-auto opacity-90" />
              <div className="mt-6 text-center">
                <p className="font-montserrat font-black text-lg text-white tracking-widest uppercase">FAMALL NETWORK</p>
                <p className="font-ibm text-xs text-white/40 mt-1">Знак подлинности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO FOR ─── */}
      <section className="py-20 px-4 bg-white" id="partnership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Для кого</div>
            <div className="w-12 h-0.5 bg-famall-red mx-auto mb-6 reveal" />
            <h2 className="font-montserrat font-black text-4xl text-famall-dark reveal delay-100">Подойдёт, если ты хочешь</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-famall-platinum-dark mb-10">
            {WHO_FOR.map((w, i) => (
              <div key={i} className={`bg-white p-6 text-center hover:bg-famall-platinum transition-colors group reveal delay-${i * 100}`}>
                <div className="w-12 h-12 bg-famall-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-famall-red transition-colors duration-300">
                  <Icon name={w.icon} size={20} className="text-famall-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-montserrat font-bold text-sm text-famall-dark">{w.title}</div>
              </div>
            ))}
          </div>
          <div className="text-center reveal delay-300">
            <TgBtn text="Это моё — хочу разобраться" />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-4 bg-famall-dark" id="cta">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-6 reveal">Финал</div>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6 reveal delay-100">
            Можно ещё подумать.<br />
            <span className="text-famall-red">А можно зайти сейчас.</span>
          </h2>
          <p className="font-ibm text-white/60 mb-10 reveal delay-200">
            И не догонять потом.
          </p>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-famall-red text-white font-montserrat font-black text-lg px-10 py-5 hover:bg-famall-red-dark transition-colors shadow-2xl shadow-famall-red/30 reveal delay-300"
          >
            👉 Перейти в Telegram <Icon name="ArrowRight" size={20} />
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 reveal delay-400">
            <div className="w-1.5 h-1.5 rounded-full bg-famall-red animate-pulse" />
            <span className="text-xs font-ibm text-white/40">Сейчас вход простой. Позже — нет.</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-famall-dark border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="FAMALL" className="h-9 w-9 object-cover rounded" />
            <div>
              <div className="font-montserrat font-black text-sm text-white tracking-tight leading-tight">FAMALL Россия</div>
              <div className="text-[11px] font-ibm text-white/30 leading-tight">Система с повторными продажами · Zeson Group</div>
            </div>
          </div>
          <p className="text-xs font-ibm text-white/20 text-center">
            © 2026 FAMALL Россия · Доход зависит от действий и результатов
          </p>
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-ibm text-famall-red hover:text-white transition-colors">
            Перейти в Telegram →
          </a>
        </div>
      </footer>

    </div>
  );
}
