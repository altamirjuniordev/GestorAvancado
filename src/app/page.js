export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Gestor Avançado</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            <a href="#metodo" className="hover:text-primary transition-colors">Método</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>
          <a
            href="#contato"
            className="hidden sm:flex px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-full transition-all hover:scale-105"
          >
            Falar com especialista
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(171, 99, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(171, 99, 38, 0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-[15%] w-20 h-20 border border-primary/20 rotate-45 animate-float" />
          <div className="absolute bottom-40 left-[10%] w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 right-[8%] w-6 h-6 bg-primary/30 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 right-[25%] w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/3 left-[20%] w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Estratégia. Sistema. Escala.</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Transformamos marketing em{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
                sistemas previsíveis
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0" />
            </span>
            {' '}de crescimento.
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 leading-relaxed mb-10">
            Estratégia, tráfego pago, tecnologia e automação integrados para negócios que querem escalar com inteligência — <span className="text-foreground/80">não no improviso.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#contato"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span>Quero estruturar meu crescimento</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#metodo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-primary/50 hover:bg-white/5 text-foreground font-medium rounded-full transition-all"
            >
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Entender nosso método</span>
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-foreground/40 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Atendemos um número limitado de projetos por mês.
          </p>

          {/* Stats/Social Proof */}
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">+150</div>
                <div className="text-sm text-foreground/50">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">R$2M+</div>
                <div className="text-sm text-foreground/50">Em mídia gerenciada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-foreground/50">Satisfação dos clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-foreground/50">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-foreground/30 uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </div>
  );
}
