import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import CatWalker from "@/components/CatWalker";

const FACTORY_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/files/89317544-6923-4c18-abf4-3cc40f0ea65c.jpg";
const HERO_PRODUCT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/b769d8b6-d882-4b53-a7de-5541a3944347.png";
const LOGO_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/6aef32ab-6791-4c39-9dbf-3d018da18144.jpg";
const CAT_IMG = "https://cdn.poehali.dev/projects/500e7e19-f909-411b-8b8a-65379865920d/bucket/178d660f-0fbc-45e5-a994-9c9b0ad4f7c5.png";

const TG_LINK = "https://t.me/+4KTa6_cKA6s2OWZi";
const TG_POST = "https://t.me/FaMall_Rus/5";
const TG_VIDEO = "https://t.me/FaMall_Rus/4";

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

  return (
    <div className="font-ibm bg-white overflow-x-hidden">

      {/* 🐱 Кошка с анимацией */}
      <CatWalker />

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
      <section className="relative min-h-screen overflow-hidden bg-white" style={{ paddingTop: 64 }}>

        {/* ФОТО — на весь правый экран, от верха до низа, без рамки */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none" aria-hidden="true">
          <img
            src={HERO_PRODUCT_IMG}
            alt=""
            className="absolute object-cover object-center"
            style={{ top: "-5%", left: 0, width: "115%", height: "110%", maxWidth: "none" }}
          />
          {/* растворение в белый — левый край (плавный переход к тексту) */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, white 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 80%)"
          }} />
          {/* растворение сверху */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.7) 90%, white 100%)"
          }} />
          {/* правый край */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to left, white 0%, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0) 40%)"
          }} />
        </div>

        {/* КОНТЕНТ */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col justify-center min-h-[calc(100vh-64px)] py-16">
          <div className="max-w-xl">

            {/* лейбл */}
            <div className="inline-flex items-center gap-2 bg-famall-red text-white px-3 py-1 mb-6 reveal">
              <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase">Эксклюзив Россия · Новый бренд</span>
            </div>

            {/* контекст */}
            <p className="font-ibm text-famall-silver text-sm mb-5 reveal">
              На рынок России выходит новый бренд.<br />
              <span className="text-famall-dark font-semibold">Первые позиции формируются сейчас.</span>
            </p>

            {/* H1 */}
            <h1 className="font-montserrat font-black leading-[0.88] tracking-tight text-famall-dark mb-8 reveal delay-100"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}>
              FAMALL —<br />
              <span className="text-famall-red">премиальный бренд</span><br />
              товаров с повторным спросом
            </h1>

            {/* 3 тезиса */}
            <div className="space-y-2 mb-5 reveal delay-150">
              {["Это не маркетплейс.", "Не перепродажа.", "И не «заработок на баночках»."].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-famall-red rounded-full flex-shrink-0" />
                  <span className="font-ibm text-famall-silver-dark">{t}</span>
                </div>
              ))}
            </div>

            {/* месседж */}
            <div className="border-l-4 border-famall-red pl-4 py-1 mb-5 bg-famall-red/5 reveal delay-200">
              <p className="font-montserrat font-bold text-famall-dark">Это продукт, который покупают снова.</p>
              <p className="font-ibm text-xs text-famall-silver mt-0.5">Потому что им пользуются каждый день.</p>
            </div>

            {/* срочность */}
            <div className="flex items-center gap-2 mb-7 reveal delay-200">
              <div className="w-1.5 h-1.5 rounded-full bg-famall-red animate-pulse flex-shrink-0" />
              <span className="text-xs font-ibm text-famall-silver-dark">Сейчас этап формирования рынка — позже вход будет сложнее.</span>
            </div>

            {/* кнопки */}
            <div className="flex flex-wrap gap-4 mb-10 reveal delay-300">
              <TgBtn text="👉 Перейти и посмотреть" />
              <a href="#not-jars" className="inline-flex items-center gap-2 bg-transparent text-famall-dark font-montserrat font-semibold text-sm px-7 py-4 border border-famall-platinum-dark hover:border-famall-dark transition-all">
                Как это работает
              </a>
            </div>

            {/* статистика */}
            <div className="grid grid-cols-2 gap-px bg-famall-platinum-dark reveal delay-400" style={{ maxWidth: 420 }}>
              {[
                { value: "39 000", unit: "м²", label: "собственного производства" },
                { value: "38+", unit: "", label: "стран присутствия" },
                { value: "GMPC", unit: " 100K", label: "фарм-уровень чистоты" },
                { value: "от 17 500", unit: "₽", label: "старт партнёра" },
              ].map((s, i) => (
                <div key={i} className="bg-white/90 backdrop-blur-sm p-5 hover:bg-white transition-colors duration-300">
                  <div className="font-montserrat font-black text-xl text-famall-dark leading-none">
                    {s.value}<span className="text-famall-red text-sm ml-0.5">{s.unit}</span>
                  </div>
                  <div className="text-xs text-famall-silver mt-1.5 font-ibm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* плашка "Zeson Group" — внизу справа, не перекрывает кошку */}
          <div className="absolute bottom-8 right-4 md:right-8 bg-famall-dark/80 backdrop-blur-sm text-white px-5 py-3 hidden lg:flex items-center gap-3 reveal delay-400">
            <div className="w-0.5 h-8 bg-famall-red flex-shrink-0" />
            <div>
              <div className="font-montserrat font-black text-sm">39 000 м²</div>
              <div className="font-ibm text-[10px] text-white/50 mt-0.5">Производственная база Zeson Group</div>
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

      {/* ─── ДОХОД БЕЗ ПОТОЛКА ─── */}
      <section className="py-20 px-4 bg-white" id="income">
        <div className="max-w-6xl mx-auto">
          {/* заголовок */}
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-famall-red text-white px-3 py-1 mb-5">
              <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase">Система · Продукт · Команда · Доход</span>
            </div>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-famall-dark mb-2">
              Твой доход<br /><span className="text-famall-red">не имеет потолка</span>
            </h2>
            <p className="font-ibm text-famall-silver text-sm mt-3">Прогноз дохода в проекте FAMALL</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* ─ рост по месяцам ─ */}
            <div className="lg:col-span-2 reveal delay-100">
              <div className="text-xs font-montserrat font-semibold tracking-[0.18em] uppercase text-famall-red mb-5">Как растёт твой доход</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-famall-platinum-dark">
                {[
                  { period: "1 месяц", team: "5–10 человек в команде", income: "10 000 – 30 000 ₽" },
                  { period: "3 месяца", team: "20–40 человек в команде", income: "50 000 – 150 000 ₽" },
                  { period: "6 месяцев", team: "80–150 человек в команде", income: "150 000 – 300 000 ₽" },
                  { period: "12 месяцев", team: "250–500 человек в команде", income: "300 000 – 700 000 ₽" },
                  { period: "18 месяцев", team: "500–1000 человек в команде", income: "700 000 – 1 000 000 ₽" },
                  { period: "24 месяца+", team: "1000+ человек в команде", income: "1 000 000 ₽+ и больше", highlight: true },
                ].map((m, i) => (
                  <div key={i} className={`p-5 ${m.highlight ? "bg-famall-red" : "bg-white"}`}>
                    <div className={`font-montserrat font-black text-sm mb-2 ${m.highlight ? "text-white" : "text-famall-dark"}`}>{m.period}</div>
                    <div className={`font-ibm text-xs mb-3 leading-snug ${m.highlight ? "text-white/70" : "text-famall-silver"}`}>{m.team}</div>
                    <div className={`font-montserrat font-black text-sm leading-snug ${m.highlight ? "text-white" : "text-famall-red"}`}>{m.income}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-famall-dark p-4 flex items-center gap-3">
                <div className="text-2xl leading-none">∞</div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-white">Масштабируйся до 1 000 000 ₽+ и больше!</div>
                  <div className="font-ibm text-xs text-white/50 mt-0.5">Доход без потолка — за счёт бесконечного роста оборота сети</div>
                </div>
              </div>
            </div>

            {/* ─ проценты по уровням ─ */}
            <div className="reveal delay-150">
              <div className="bg-famall-dark p-6 h-full">
                <div className="text-xs font-montserrat font-semibold tracking-[0.15em] uppercase text-famall-red mb-4">Процент от оборота всей твоей структуры</div>
                <div className="grid grid-cols-2 gap-px bg-white/10 mb-1">
                  <div className="bg-famall-dark px-3 py-2 font-montserrat font-bold text-[10px] text-white/40 uppercase tracking-wider">Уровень</div>
                  <div className="bg-famall-dark px-3 py-2 font-montserrat font-bold text-[10px] text-white/40 uppercase tracking-wider">% от оборота</div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  {[
                    { level: "1 уровень", pct: "8%" },
                    { level: "2 уровень", pct: "4%" },
                    { level: "3 уровень", pct: "3%" },
                    { level: "4 уровень", pct: "2%" },
                    { level: "5 уровень и выше", pct: "1%" },
                  ].map((row, i) => (
                    <>
                      <div key={`a${i}`} className="bg-famall-dark/90 px-3 py-3 font-ibm text-xs text-white/70">{row.level}</div>
                      <div key={`b${i}`} className="bg-famall-dark/90 px-3 py-3 font-montserrat font-black text-famall-red">{row.pct}</div>
                    </>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-famall-red mt-1.5 flex-shrink-0" />
                  <p className="font-ibm text-xs text-white/50 leading-relaxed">Чем больше твоя структура — тем выше твой пассивный доход!</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─ почему это работает ─ */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-famall-platinum-dark mb-10 reveal delay-200">
            {[
              { icon: "RefreshCw", title: "Доход без потолка", desc: "За счёт бесконечного роста оборота сети" },
              { icon: "ShoppingCart", title: "Повседневные покупки (FMCG)", desc: "Спрос есть всегда" },
              { icon: "Users", title: "Рекомендации знакомым", desc: "Простая и понятная система" },
              { icon: "GitBranch", title: "Дупликация системы", desc: "Масштабируй и умножай доход" },
              { icon: "Bot", title: "Автоматизация через AI", desc: "Экономь время — получай результат" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 flex flex-col gap-2">
                <Icon name={item.icon} fallback="CircleAlert" size={18} className="text-famall-red" />
                <div className="font-montserrat font-bold text-xs text-famall-dark leading-snug">{item.title}</div>
                <div className="font-ibm text-[11px] text-famall-silver leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* ─ финальный призыв ─ */}
          <div className="bg-famall-dark p-6 md:p-8 reveal delay-300">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-6">
              <div className="flex-1">
                <div className="font-montserrat font-black text-white text-lg md:text-xl leading-snug mb-1">
                  Начни с малого — <span className="text-famall-red">построй систему, которая принесёт свободу и финансовый рост!</span>
                </div>
              </div>
              <TgBtn text="Узнать подробнее →" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {[
                { icon: "Target", label: "Доступный старт" },
                { icon: "Package", label: "Продукты, которые нужны" },
                { icon: "BadgeCheck", label: "Проверенная бизнес-модель" },
                { icon: "HeadphonesIcon", label: "Поддержка на каждом этапе" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon name={item.icon} fallback="CircleAlert" size={14} className="text-famall-red flex-shrink-0" />
                  <span className="font-ibm text-xs text-white/60 leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="font-ibm text-[10px] text-white/25 mt-4">Результаты зависят от активности, вовлечённости и навыков каждого партнёра.</p>
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
      <section className="py-20 px-4 bg-famall-dark" id="production">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-montserrat font-semibold tracking-[0.2em] uppercase text-famall-red mb-4 reveal">Производство</div>
              <div className="w-12 h-0.5 bg-famall-red mb-6 reveal" />
              <h2 className="font-montserrat font-black text-4xl md:text-5xl leading-tight text-white mb-6 reveal delay-100">
                Большинство продаёт то, что даже не видел
              </h2>
              <p className="font-ibm text-white/70 mb-4 reveal delay-150">
                FAMALL — это другое.
              </p>
              <p className="font-ibm text-white/70 mb-6 reveal delay-150">
                Это реальное производство: не склад, не перепродажа, не «с Али».
              </p>
              <div className="space-y-2 mb-8 reveal delay-200">
                {["завод", "контроль качества", "технологический процесс", "готовый продукт под брендом"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-famall-red font-bold">—</span>
                    <span className="font-ibm text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 px-5 py-4 mb-8 reveal delay-300">
                <p className="font-ibm text-sm text-white/70 mb-1">Ты понимаешь, что продаёшь.</p>
                <p className="font-montserrat font-bold text-white">И клиент это чувствует.</p>
              </div>
              <p className="font-ibm text-sm text-white/50 mb-4 reveal delay-300">Смотри сам 👇</p>
              <a
                href={TG_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-famall-red text-white font-montserrat font-bold text-sm px-8 py-4 hover:bg-famall-red-dark transition-colors reveal delay-400"
              >
                👉 Видео с производства <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="space-y-4 reveal delay-200">
              <div className="relative h-64 overflow-hidden">
                <img src={FACTORY_IMG} alt="Zeson Group производство" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-famall-dark/30" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 px-3 py-2">
                  <img src={LOGO_IMG} alt="FAMALL" className="h-6 w-6 object-cover rounded-sm" />
                  <span className="font-montserrat font-bold text-xs text-famall-dark">FAMALL × Zeson Group</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {[
                  { val: "39 000", label: "м² площадей" },
                  { val: "Контроль", label: "на каждом этапе" },
                  { val: "Собственные", label: "разработки формул" },
                  { val: "Стерильные", label: "производственные зоны" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5">
                    <div className="font-montserrat font-black text-lg text-white leading-none">{item.val}</div>
                    <div className="text-xs text-white/40 font-ibm mt-1">{item.label}</div>
                  </div>
                ))}
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