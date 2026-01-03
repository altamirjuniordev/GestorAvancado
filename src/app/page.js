export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow-pulse">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Gestor Avançado</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            <a href="#problema" className="hover:text-primary transition-colors">O Problema</a>
            <a href="#metodo" className="hover:text-primary transition-colors">Método</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>
          <a
            href="#contato"
            className="hidden sm:flex px-5 py-2.5 bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-primary text-white text-sm font-medium rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Falar com especialista
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(224, 123, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 123, 38, 0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          <div className="absolute top-32 right-[15%] w-20 h-20 border border-primary/20 rotate-45 animate-float" />
          <div className="absolute bottom-40 left-[10%] w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 right-[8%] w-6 h-6 bg-primary/30 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Estratégia. Sistema. Escala.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Transformamos marketing em{' '}
            <span className="relative">
              <span className="relative z-10 gradient-text">
                sistemas previsíveis
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0" />
            </span>
            {' '}de crescimento.
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 leading-relaxed mb-10">
            Estratégia, tráfego pago, tecnologia e automação integrados para negócios que querem escalar com inteligência — <span className="text-foreground/80">não no improviso.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#contato"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-primary text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
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

          <p className="text-sm text-foreground/40 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Atendemos um número limitado de projetos por mês.
          </p>

          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">+150</div>
                <div className="text-sm text-foreground/50">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">R$2M+</div>
                <div className="text-sm text-foreground/50">Em mídia gerenciada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">98%</div>
                <div className="text-sm text-foreground/50">Satisfação dos clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-foreground/50">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-foreground/30 uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Seção 2 - O Problema */}
      <section id="problema" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              Diagnóstico
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              O problema não é o marketing.<br />
              <span className="gradient-text">É a falta de sistema.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/60">
              Você já investiu em anúncios, sites, criativos ou até automações.<br />
              Mas, no final, tudo parece desconectado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🎯", text: "Anúncios que geram leads desqualificados" },
              { icon: "📉", text: "Leads que não convertem" },
              { icon: "😰", text: "Equipe sobrecarregada" },
              { icon: "🎲", text: "Decisões tomadas no achismo" },
              { icon: "📊", text: "Crescimento instável" },
              { icon: "💸", text: "Investimento sem retorno claro" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-surface-light/50 border border-white/5 rounded-xl hover:border-red-500/20 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-foreground/70">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl text-foreground/60">
              <span className="text-red-400">Marketing sem estratégia</span> vira custo.<br />
              <span className="text-red-400">Marketing sem sistema</span> vira caos.
            </p>
            <p className="text-lg">
              <span className="text-accent font-semibold">A Gestor Avançado nasce exatamente para resolver isso.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 - O Método */}
      <section id="metodo" className="relative py-24 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Nossa Metodologia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Nosso trabalho começa onde<br />
              <span className="gradient-text">a maioria das agências para.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/60">
              Antes de rodar anúncios, construímos a estrutura que sustenta o crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold">Estratégia & Diagnóstico</h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Antes de qualquer execução, analisamos profundamente:
              </p>
              <ul className="space-y-3">
                {["Modelo de negócio", "Funil de vendas", "Público e posicionamento", "Métricas reais", "Estrutura operacional"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-accent font-medium">
                Sem diagnóstico, não existe escala.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold">Aquisição Inteligente</h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Tráfego pago com inteligência estratégica:
              </p>
              <ul className="space-y-3">
                {["Meta Ads e Google Ads", "Funis híbridos e estruturados", "Criativos com narrativa estratégica", "Testes organizados (não achismo)", "Otimização baseada em dados reais"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-accent font-medium">
                Tráfego não é botão. É engenharia.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold">Estrutura Digital</h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Sites e Landing Pages que convertem:
              </p>
              <ul className="space-y-3">
                {["Sites focados em conversão", "Landing pages orientadas a dados", "Copywriting estratégico", "Experiência do usuário pensada para vender"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-accent font-medium">
                Design bonito chama atenção. Estrutura converte.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group p-8 bg-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold">Tecnologia & IA</h3>
              </div>
              <p className="text-foreground/60 mb-6">
                Automações e inteligência artificial:
              </p>
              <ul className="space-y-3">
                {["Automações de marketing e vendas", "Sistemas internos personalizados", "Integração de ferramentas", "IA aplicada à operação e performance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-accent font-medium">
                Escala acontece quando o sistema trabalha por você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - Serviços */}
      <section id="servicos" className="relative py-24 md:py-32 bg-surface">
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(224, 123, 38, 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Soluções integradas para<br />
              <span className="gradient-text">crescimento real.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Serviço 1 */}
            <div className="group relative p-8 bg-background border border-white/5 rounded-2xl overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Estratégia & Tráfego Pago</h3>
                <p className="text-accent font-medium mb-4">Não geramos cliques. Geramos crescimento previsível.</p>
                <ul className="space-y-2 mb-6">
                  {["Planejamento estratégico", "Funis completos", "Gestão de tráfego", "Criativos orientados por dados", "Escala com controle"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/60 text-sm">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/50 italic">
                  Para empresas que já faturam ou querem estruturar escala real.
                </p>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="group relative p-8 bg-background border border-white/5 rounded-2xl overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Sites & Landing Pages</h3>
                <p className="text-accent font-medium mb-4">Construímos ativos digitais, não páginas.</p>
                <ul className="space-y-2 mb-6">
                  {["Estrutura de conversão", "Copywriting estratégico", "Integrações completas", "Otimização contínua"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/60 text-sm">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/50 italic">
                  Seu site precisa vender enquanto você dorme.
                </p>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="group relative p-8 bg-background border border-white/5 rounded-2xl overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Criação de Apps & Sistemas</h3>
                <p className="text-accent font-medium mb-4">Soluções sob medida para negócios em crescimento.</p>
                <ul className="space-y-2 mb-6">
                  {["Sistemas internos", "Plataformas personalizadas", "Apps web e mobile", "Integrações avançadas"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/60 text-sm">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/50 italic">
                  Quando o Excel não aguenta mais, entra o sistema.
                </p>
              </div>
            </div>

            {/* Serviço 4 */}
            <div className="group relative p-8 bg-background border border-white/5 rounded-2xl overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Automações & IA</h3>
                <p className="text-accent font-medium mb-4">Menos esforço humano. Mais eficiência.</p>
                <ul className="space-y-2 mb-6">
                  {["Automações de vendas", "Atendimento automatizado", "IA aplicada ao marketing", "Redução de custos operacionais"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/60 text-sm">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/50 italic">
                  Escalar sem automação é virar refém da operação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Quem Somos */}
      <section id="sobre" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            A Gestor Avançado nasceu da<br />
            <span className="gradient-text">prática, não da teoria.</span>
          </h2>
          <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
            <p>
              A Gestor Avançado é resultado de anos de experiência real no mercado digital — com erros, reinvenções e aprendizados práticos.
            </p>
            <p>
              Não seguimos fórmulas prontas.<br />
              <span className="text-foreground/80">Criamos estratégias personalizadas, baseadas em dados, tecnologia e visão de longo prazo.</span>
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-surface-light border border-white/5 rounded-full">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-foreground/70">Aqui, cada projeto é tratado como um negócio — não como um job.</span>
          </div>
        </div>
      </section>

      {/* Seção 6 - Para Quem É */}
      <section className="relative py-24 md:py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Qualificação
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Será que somos o <span className="gradient-text">match certo?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Para quem é */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary">É para você se:</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Busca crescimento com estratégia",
                  "Valoriza dados e processos",
                  "Quer previsibilidade",
                  "Está disposto a estruturar o negócio"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é para quem */}
            <div className="p-8 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-400">Não é para você se:</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Procura soluções mágicas",
                  "Quer resultado sem base",
                  "Vê marketing apenas como custo"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7 - CTA Final */}
      <section id="contato" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-background to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="p-10 md:p-16 bg-surface border border-white/5 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Se o seu negócio precisa de<br />
                <span className="gradient-text">estrutura, estamos prontos.</span>
              </h2>
              <p className="text-lg text-foreground/60 mb-10 max-w-xl mx-auto">
                Antes de qualquer proposta, realizamos um diagnóstico estratégico para entender se faz sentido crescermos juntos.
              </p>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-primary text-white text-lg font-semibold rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 animate-glow-pulse"
              >
                <span>Solicitar diagnóstico estratégico</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="mt-6 text-sm text-foreground/40 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Diagnóstico gratuito para projetos selecionados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="font-semibold text-lg">Gestor Avançado</span>
                <p className="text-sm text-foreground/50">Estratégia. Sistema. Escala.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-foreground/50">
              <a href="#problema" className="hover:text-primary transition-colors">O Problema</a>
              <a href="#metodo" className="hover:text-primary transition-colors">Método</a>
              <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-foreground/40">
            <p>&copy; {new Date().getFullYear()} Gestor Avançado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
