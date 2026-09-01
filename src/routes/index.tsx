import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Compass, Route as RouteIcon, RefreshCw, LayoutDashboard, ArrowRight } from "lucide-react";
import gilvanFoto from "@/assets/foto-gilvan-genos-exclusivo-clinicas.webp";
import thalitaFoto from "@/assets/foto-thalita-genos-exclusivo-clinicas.webp";

const WHATSAPP_URL = "https://wa.me/5521985237650?text=Oi!%20Vim%20pela%20p%C3%A1gina%20da%20Genos%20e%20quero%20destravar%20minha%20cl%C3%ADnica.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusivo para clínicas" },
      {
        name: "description",
        content:
          "Estruturamos o comercial de clínicas de implantodontia para transformar avaliações em protocolos fechados e faturamento previsível.",
      },
      { property: "og:title", content: "Genos: Sistema Reabilita" },
      {
        property: "og:description",
        content:
          "Sua clínica não precisa de mais pacientes. Precisa fechar os que já chegam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Genos: Sistema Reabilita" },
      {
        name: "twitter:description",
        content: "Sua clínica não precisa de mais pacientes. Precisa fechar os que já chegam.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function CtaButton({
  note,
  className = "",
  variant = "default",
}: {
  note?: string;
  className?: string;
  variant?: "default" | "inverted";
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead");
    }
    // Defer redirect slightly to let the pixel beacon fire
    e.preventDefault();
    window.setTimeout(() => {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }, 300);
  };

  const styles = "bg-cta text-cta-foreground hover:bg-cta-hover";
  void variant;

  return (
    <span className={`flex flex-col items-center gap-3 ${className}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 text-base font-medium tracking-wide shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_10px_30px_-14px_rgba(20,20,25,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_18px_40px_-16px_rgba(20,20,25,0.55)] sm:px-10 sm:py-6 sm:text-lg ${styles}`}
      >
        <span>Quero destravar minha clínica</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
      </a>
      {note ? (
        <span className={`max-w-xs text-center text-xs leading-relaxed ${variant === "inverted" ? "text-background/60" : "text-muted-foreground"}`}>
          {note}
        </span>
      ) : null}
    </span>
  );
}

const stats = [
  { value: "+R$50 milhões", label: "gerados para clientes" },
  { value: "120", label: "projetos entregues" },
  { value: "3 continentes", label: "de atuação" },
  { value: "+10 anos", label: "de experiência dos sócios" },
];

const mirror = [
  "Marca a avaliação e **não comparece**. A agenda enche, a cadeira fica vazia.",
  "Avalia, ouve o valor, **pede pra pensar e some**. Ninguém acompanha.",
  "**Orçamento aprovado parado** no sistema, sem ninguém retomar.",
  "Tratamento que começou, **parou no meio** e nunca foi concluído.",
  "**Mês bom, mês fraco.** O faturamento nunca é previsível.",
  "**Atende muito e lucra pouco.** A clínica cheia, e você exausto.",
];

function withBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

const cards = [
  {
    icon: Compass,
    title: "Mapeamento Clínico",
    text: "Antes de tocar em qualquer coisa, a gente mergulha na sua clínica: a presença digital, os processos internos, a equipe, a gestão, o seu momento atual e os seus desafios, e ainda o que a concorrência está fazendo. É o mapa de onde a clínica ganha e onde perde, com base em dado, não em achismo.",
  },
  {
    icon: RouteIcon,
    title: "Jornada Reabilitadora",
    text: "Com base em tudo que o mapeamento revelou, e no que a concorrência está fazendo, montamos um plano de ação exclusivo pra sua clínica. Desenhamos o caminho inteiro do paciente, aproveitando cada ponto forte e corrigindo cada ponto fraco.",
  },
  {
    icon: RefreshCw,
    title: "Reativação Estruturada",
    text: "Aqui entra a força comercial. Trazemos novos pacientes com mais qualificação e volume, e ao mesmo tempo recuperamos quem já está na sua base: orçamento que não fechou, tratamento que parou, paciente que sumiu. Faturamento novo e faturamento esquecido, trabalhados juntos.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel Cirúrgico",
    text: "Tudo isso vira dado na palma da mão. Um painel com os números da clínica: quanto entra, quanto fecha, quanto está parado. No fim do mês você decide pelo que os números mostram, não pelo feeling.",
  },
];

const cases = [
  {
    nome: "Implantum",
    texto:
      "Faturamento mais que dobrou em 5 meses, com +46% de conversão e atendimento comercial estruturado.",
  },
  {
    nome: "Dr. Rodrigo Galvão",
    texto: "2x mais reativação de pacientes e 3 novos canais de aquisição com produtos digitais.",
  },
  {
    nome: "Reference",
    texto: "+49% de faturamento em 3 meses, recordes consecutivos nas duas unidades da clínica.",
  },
];

const proofs = [
  {
    destaque: "135 leads, 1 fechamento.",
    linha: "Não faltou gente na porta. Faltou acompanhar quem já tinha demonstrado interesse.",
  },
  {
    destaque: "Quase R$1 milhão por ano parado.",
    linha: "Passava pela recepção sem ninguém organizar o retorno e a recuperação dos orçamentos.",
  },
];

/**
 * Depoimentos em vídeo do YouTube.
 * Basta colar o ID do vídeo (ex.: "dQw4w9WgXcQ") ou o link completo em `youtube`.
 * Enquanto vazio, o card mostra o estado "em breve".
 */
const testimonials: { youtube?: string; nome?: string; clinica?: string; cidade?: string }[] = [
  { youtube: "https://youtu.be/n8JRhnS1p88", nome: "", clinica: "", cidade: "" },
  { youtube: "https://youtu.be/pNWVcZ0kE30", nome: "", clinica: "", cidade: "" },
  { youtube: "https://youtu.be/UHV6k8O7XMQ", nome: "", clinica: "", cidade: "" },
  { youtube: "https://youtu.be/vAMzz2NQUtY", nome: "", clinica: "", cidade: "" },
  { youtube: "https://youtu.be/0D6jv5-IFvI", nome: "", clinica: "", cidade: "" },
  { youtube: "https://www.youtube.com/watch?v=IpsTWh1cNPM", nome: "", clinica: "", cidade: "" },
];

function youtubeId(input?: string) {
  if (!input) return "";
  const trimmed = input.trim();
  if (!trimmed) return "";
  const match = trimmed.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : trimmed;
}

const founders = [
  {
    foto: gilvanFoto,
    nome: "Gilvan Brito",
    pos: "center 20%",
    scale: 1.15,
    texto:
      "Mais de uma década no comercial, com mais de 5.000 vendedores treinados e equipes de mais de 600 pessoas lideradas. Atua diretamente na gestão, processos e vendas, identificando gargalos e estruturando a operação para gerar crescimento, eficiência e previsibilidade.",
  },
  {
    foto: thalitaFoto,
    nome: "Thalita Azeredo",
    pos: "center 15%",
    scale: 1.18,
    texto:
      "Publicitária de formação, acelerou dezenas de negócios em 3 continentes na última década. Vê o que ninguém para pra ver, e como isso faz um negócio crescer ou travar. É ela quem traz a visão estratégica que dá a direção.",
  },
];

function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    let closest = 0;
    let min = Infinity;
    cards.forEach((card, idx) => {
      const dist = Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (dist < min) {
        min = dist;
        closest = idx;
      }
    });
    setActive(closest);
  };

  return (
    <div className="relative mt-12 sm:mt-16">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:gap-6 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, idx) => {
          const id = youtubeId(t.youtube);
          return (
            <figure
              key={idx}
              data-card
              className="flex w-[88%] shrink-0 snap-center flex-col sm:w-[calc((100%-3rem)/2)] sm:snap-start lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-foreground px-6 text-center">
                {id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Depoimento ${t.nome || idx + 1}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                ) : (
                  <span className="text-sm text-background/70">[Depoimentos de implantodontistas, em breve]</span>
                )}
              </div>
              {(t.nome || t.clinica || t.cidade) && (
                <figcaption className="px-1 pt-5">
                  {t.nome && <p className="text-[15px] font-medium">{t.nome}</p>}
                  {(t.clinica || t.cidade) && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {[t.clinica, t.cidade].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 sm:mt-10">
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => goTo(active - 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-card text-xs text-muted-foreground transition-colors hover:border-ember hover:text-ember"
        >
          <span aria-hidden>&#8592;</span>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Ir para o depoimento ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === active ? "w-5 bg-ember" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => goTo(active + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-card text-xs text-muted-foreground transition-colors hover:border-ember hover:text-ember"
        >
          <span aria-hidden>&#8594;</span>
        </button>
      </div>
    </div>
  );
}


function StatsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 px-6 py-12 md:hidden">
      <div className="relative h-24 w-full">
        {stats.map(({ value, label }, idx) => (
          <div
            key={value}
            className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-center transition-opacity duration-700 ${
              idx === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="font-display text-3xl font-medium tracking-tight">{value}</span>
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {stats.map(({ value }, idx) => (
          <span
            key={value}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === active ? "w-5 bg-ember" : "w-1.5 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="w-full border-b border-hairline bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.32em] sm:text-xs">
            <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-ember align-middle" />
            Exclusivo para clínicas
          </span>
        </div>
      </div>



      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top,_oklch(0.62_0.14_47_/_0.06),_transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="fade-up delay-2 text-balance text-[40px] font-medium leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px]">
              A sua clínica não perde por falta de paciente. Perde{" "}
              <span className="text-ember">no caminho entre a avaliação e o protocolo</span>.
            </h1>

            <p className="fade-up delay-3 mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Genos integra marketing e comercial numa coisa só: atrai o paciente certo e estrutura o atendimento pra
              que ele feche o tratamento e volte, com faturamento previsível.
            </p>

            {/* Marquee */}
            <div className="fade-up delay-3 mt-10 w-screen max-w-[100vw] overflow-hidden border-y border-hairline bg-secondary py-2.5">
              <div className="marquee-track">
                {[0, 1].map((dup) => (
                  <span
                    key={dup}
                    className="flex shrink-0 items-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]"
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span key={i} className="px-4">
                        No momento certo, cuidamos também da sua gestão e do financeiro. Tudo no mesmo lugar, de forma
                        integrada. <span className="text-ember">•</span>
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>

            <div className="fade-up delay-4 mt-10">
              <CtaButton note="Uma conversa pra entender a sua clínica antes de qualquer proposta." />
            </div>
          </div>
        </div>
      </section>

      {/* Prova / números */}
      <section className="border-y border-hairline bg-secondary/40">
        <StatsCarousel />

        <div className="mx-auto hidden max-w-6xl grid-cols-4 gap-y-10 px-6 py-12 sm:py-14 md:grid">
          {stats.map(({ value, label }, idx) => (
            <div
              key={value}
              className="fade-up flex flex-col items-center gap-1 text-center border-l border-hairline first:border-l-0"
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              <span className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{value}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* O espelho */}
      <section className="py-24 sm:py-32">
        <h2 className="fade-up mx-auto max-w-4xl text-balance px-6 text-center text-3xl font-medium leading-tight sm:text-4xl">
          Você reconhece a sua clínica em alguma destas?
        </h2>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 px-6 sm:mt-14 sm:grid-cols-2">
          {mirror.map((item, idx) => (
            <li
              key={item}
              className="fade-up flex items-start gap-4 rounded-xl border border-hairline bg-card px-6 py-5 text-[15px] leading-relaxed transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ember/8 hover:shadow-[0_10px_30px_-15px_rgba(180,80,30,0.25)] sm:text-base"
              style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span>{withBold(item)}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <div className="hairline-divider" />
      </div>

      {/* A virada */}
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <h2 className="fade-up text-balance text-center text-3xl font-medium leading-tight sm:text-4xl">
          O gargalo quase nunca é a falta de paciente. É o que acontece{" "}
          <span className="text-ember">depois</span> que ele chega.
        </h2>

        <p className="fade-up delay-2 mt-12 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          O que a gente vê operando clínicas de verdade
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {proofs.map((p, idx) => (
            <div
              key={p.destaque}
              className="fade-up rounded-2xl border border-hairline bg-card px-7 py-8"
              style={{ animationDelay: `${0.15 + idx * 0.12}s` }}
            >
              <p className="font-display text-xl font-medium leading-tight text-ember sm:text-2xl">{p.destaque}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.linha}</p>
            </div>
          ))}
        </div>

        <p className="fade-up delay-3 mx-auto mt-12 max-w-2xl text-pretty text-center text-base leading-relaxed sm:text-lg">
          Implante é caso caro e de decisão longa. É onde um atendimento bem estruturado vira faturamento. É isso que o{" "}
          <span className="text-ember">Sistema Reabilita</span> faz.
        </p>

        <p className="fade-up delay-4 mx-auto mt-6 max-w-2xl text-pretty text-center text-[15px] leading-relaxed text-muted-foreground">
          A gente integra as duas pontas: atrai o paciente certo e estrutura o atendimento pra que avaliação vire
          protocolo, protocolo vire recorrência, e o mês deixe de ser surpresa.
        </p>
      </section>

      {/* Casos reais */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <h2 className="text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">Casos reais</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cases.map((c, idx) => (
            <article
              key={c.nome}
              className="fade-up flex flex-col rounded-2xl border border-ember/20 bg-ember/8 px-7 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ember/12"
              style={{ animationDelay: `${0.15 + idx * 0.12}s` }}
            >
              <h3 className="font-display text-xl font-medium tracking-tight text-ember">{c.nome}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{c.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Método */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-medium leading-tight sm:text-4xl md:text-[44px]">
            <span className="text-ember">Sistema Reabilita</span>: como estruturamos a sua clínica
          </h2>
          <p className="mt-6 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            O motor da Genos (marketing, vendas, gestão e financeiro) traduzido para a clínica de implante, em quatro
            fases:
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_24px_50px_-30px_rgba(180,80,30,0.4)] sm:p-10"
            >
              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ember/25 bg-ember/8 text-ember">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm text-ember">0{i + 1}</span>
              </div>
              <h3 className="relative text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
              <p className="relative text-[15px] leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <CtaButton />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="border-t border-hairline bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <h2 className="text-center text-3xl font-medium leading-tight sm:text-4xl">Quem já destravou a clínica</h2>
          <TestimonialsCarousel />
        </div>
      </section>


      {/* Quem está por trás */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h2 className="text-balance text-center text-3xl font-medium leading-tight sm:text-4xl">
          Quem está por trás da <span className="text-ember">Genos</span>
        </h2>
        <p className="mt-4 text-center text-[15px] text-muted-foreground">
          As cabeças que vão olhar pra sua clínica.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {founders.map((p, idx) => (
            <div key={p.nome} className="fade-up" style={{ animationDelay: `${0.1 + idx * 0.12}s` }}>
              <div className="mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-hairline bg-muted">
                <img
                  src={p.foto}
                  alt={`Retrato de ${p.nome}, da Genos`}
                  loading="lazy"
                  style={{ objectPosition: p.pos, transform: `scale(${p.scale})`, transformOrigin: "center top" }}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">{p.nome}</h3>
              <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-hairline bg-secondary/40">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <p className="text-balance font-display text-3xl font-normal leading-tight sm:text-4xl md:text-5xl">
            Se a sua clínica já tem paciente entrando, o que falta é transformar isso em{" "}
            <span className="text-ember">faturamento previsível</span>. Vamos conversar.
          </p>
          <div className="mt-12">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-xs text-muted-foreground">
          <span className="italic">Tudo começa com atenção. A nossa é em você.</span>
          <span>Genos Group • Sistema Reabilita</span>
        </div>
      </footer>
    </main>
  );
}
