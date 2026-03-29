import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Tooth, WhatsappLogo, Phone, MapPin, Clock, Star,
  InstagramLogo, FacebookLogo, List, X, ArrowRight,
  ShieldCheck, Sparkle, Syringe, FirstAid, CalendarCheck,
  ChatCircleDots, CaretDown, CaretUp, UserCircle,
  HandHeart, Stethoscope, Eye
} from '@phosphor-icons/react'

const WA = 'https://wa.me/554832224863?text=Olá! Gostaria de agendar uma consulta na Acorde Odonto.'
const TEL = 'tel:+554832224863'
const IG = 'https://instagram.com/acordeodonto'
const ADDR = 'Rua Jerônimo Coelho, 185, Sala 502, Ed. Centro Executivo WK — Centro, Florianópolis - SC, 88010-030'
const MAPS = 'https://maps.google.com/?q=Acorde+Odonto+Florianópolis'

function Section({ children, className = '', id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id={id} ref={ref} className={className}>
      <motion.div initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        {children}
      </motion.div>
    </section>
  )
}

const equipe = [
  { nome: 'Dr. Cristian Barbará', esp: 'Ortodontia, Implantodontia e ATM', img: './images/dr-cristian.jpg' },
  { nome: 'Dra. Maria Priscila Pacheco', esp: 'Endodontia e Prótese Dentária', img: './images/equipe-nova-1.jpeg' },
  { nome: 'Dra. Elohana Brito', esp: 'Estética e Cirurgia Oral', img: './images/equipe-nova-2.jpeg' },
]

const tratamentos = [
  { icon: Tooth, titulo: 'Ortodontia', desc: 'Aparelhos fixos, móveis e alinhadores para um sorriso perfeitamente alinhado.', img: './images/ortodontia.webp' },
  { icon: Syringe, titulo: 'Implantodontia', desc: 'Implantes dentários de titânio com planejamento digital para resultados precisos.', img: './images/equipamento.jpg' },
  { icon: Stethoscope, titulo: 'Endodontia', desc: 'Tratamento de canal com tecnologia avançada, preservando seu dente natural.', img: './images/endodontia.webp' },
  { icon: Sparkle, titulo: 'Estética Dental', desc: 'Clareamento, facetas e restaurações estéticas para um sorriso deslumbrante.', img: './images/sala-atendimento.jpg' },
  { icon: FirstAid, titulo: 'Cirurgia Oral', desc: 'Procedimentos cirúrgicos realizados com segurança e tecnologia de ponta.', img: './images/sala-cirurgia.jpg' },
  { icon: Eye, titulo: 'Prótese Dentária', desc: 'Próteses fixas e removíveis que devolvem função e beleza ao seu sorriso.', img: './images/recepcao.jpg' },
]

const reviews = [
  { nome: 'Carolina M.', estrelas: 5, texto: 'Excelente! Equipe muito atenciosa e profissional. Fiz meu tratamento ortodôntico aqui e estou muito satisfeita com o resultado. Recomendo demais!' },
  { nome: 'Rafael P.', estrelas: 5, texto: 'Ambiente muito agradável e profissionais competentes. O Dr. Cristian é excelente, muito cuidadoso e explica tudo com paciência.' },
  { nome: 'Beatriz L.', estrelas: 5, texto: 'Melhor experiência que já tive em consultório odontológico. Estrutura moderna e atendimento humanizado. Nota 10!' },
  { nome: 'André S.', estrelas: 5, texto: 'Há mais de 10 anos sou paciente da Acorde. Confiança total na equipe. Sempre indico para amigos e família.' },
]

const perguntas = [
  { p: 'Quais especialidades a Acorde Odonto oferece?', r: 'Oferecemos Ortodontia, Implantodontia, Endodontia, Estética Dental, Cirurgia Oral e Prótese Dentária. Nossa equipe multidisciplinar cobre todas as necessidades odontológicas.' },
  { p: 'Qual o horário de atendimento?', r: 'Atendemos de segunda a sexta-feira, das 8h às 18h. Agende pelo WhatsApp para garantir o melhor horário.' },
  { p: 'Aceitam convênios odontológicos?', r: 'Sim! Trabalhamos com diversos convênios. Entre em contato para verificar se o seu convênio é aceito.' },
  { p: 'Onde fica a Acorde Odonto?', r: 'Estamos no Centro de Florianópolis, na Rua Jerônimo Coelho, 185, Sala 502, Edifício Centro Executivo WK. Fácil acesso de qualquer ponto da cidade.' },
]

export default function App() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [faq, setFaq] = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const nav = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <div className="overflow-x-hidden bg-cream-50">
      {/* NAVBAR — light/minimal */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/90'}`} style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="flex items-center gap-3">
              <img src="./images/logo.png" alt="Acorde Odonto" className="h-12 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {nav.map(l => (
                <a key={l.href} href={l.href} className="text-gray-600 hover:text-forest-800 transition-colors text-sm font-medium">{l.label}</a>
              ))}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-forest-800/20">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar
              </a>
            </div>
            <button onClick={() => setMenu(!menu)} className="md:hidden text-forest-900 p-2" aria-label="Menu">
              {menu ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-4 space-y-3">
                {nav.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenu(false)} className="block text-gray-700 py-2 text-lg">{l.label}</a>
                ))}
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-forest-800 text-white px-5 py-3 rounded-lg font-semibold w-full justify-center">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO — fullscreen image with overlay */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src="./images/recepcao.jpg" alt="Acorde Odonto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/60 to-forest-950/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-400/30 text-forest-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <HandHeart size={16} weight="duotone" className="flex-shrink-0" />
              Há mais de 15 anos no Centro de Florianópolis
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Seu sorriso em{' '}
            <span className="text-forest-400">boas mãos</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-forest-100/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Atendimento personalizado e resultados de alta qualidade. Estrutura moderna no coração de Florianópolis com equipe multidisciplinar.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl animate-glow">
              <WhatsappLogo size={22} weight="duotone" className="flex-shrink-0" />
              Agendar Consulta
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-all">
              <Phone size={22} weight="duotone" className="flex-shrink-0" />
              (48) 3222-4863
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex items-center gap-6 justify-center mt-10 text-forest-200/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" className="text-yellow-400" />)}</div>
              <span>4.7 no Google</span>
            </div>
            <span>|</span>
            <span>50+ avaliações</span>
          </motion.div>
        </div>
      </section>

      {/* NÚMEROS */}
      <Section className="py-8 bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { v: '15+', l: 'Anos de Experiência' },
              { v: '4.7', l: 'Estrelas Google' },
              { v: '6', l: 'Especialidades' },
              { v: '3', l: 'Profissionais' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{s.v}</div>
                <div className="text-forest-200/70 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOBRE */}
      <Section id="sobre" className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="./images/sala-cirurgia.jpg" alt="Consultório" className="rounded-xl shadow-lg w-full h-48 object-cover" />
              <img src="./images/equipamento.jpg" alt="Equipamentos" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
              <img src="./images/sala-atendimento.jpg" alt="Sala de Atendimento" className="rounded-xl shadow-lg w-full h-48 object-cover" />
              <img src="./images/recepcao.jpg" alt="Recepção" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
                <HandHeart size={16} weight="duotone" className="flex-shrink-0" />
                Sobre Nós
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-forest-950 mb-6">
                Referência em Odontologia no Centro
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Há mais de 15 anos, a <strong className="text-forest-800">Acorde Odonto</strong> é referência em atendimento personalizado e resultados de alta qualidade no Centro de Florianópolis. Nossa estrutura moderna está preparada para proporcionar a melhor experiência, conforto e segurança para todos os públicos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Localizada no Edifício Centro Executivo WK, oferecemos um ambiente acolhedor e tecnologia de última geração para tratamentos que vão desde ortodontia e implantodontia até estética dental e cirurgia oral.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                <CalendarCheck size={20} weight="duotone" className="flex-shrink-0" />
                Agendar Avaliação
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* TRATAMENTOS — alternating cards */}
      <Section id="tratamentos" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
              <Tooth size={16} weight="duotone" className="flex-shrink-0" />
              Tratamentos
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
              Cuidado Completo para Seu Sorriso
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Especialidades integradas para resultados excepcionais.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tratamentos.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-cream-50 rounded-2xl overflow-hidden border border-forest-100 hover:border-forest-400 transition-all hover:shadow-xl">
                <div className="h-44 overflow-hidden">
                  <img src={t.img} alt={t.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <t.icon size={22} weight="duotone" className="text-forest-600 flex-shrink-0" />
                    <h3 className="font-bold text-forest-900 text-lg">{t.titulo}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-forest-700 hover:text-forest-600 text-sm font-medium transition-colors">
                    Agendar <ArrowRight size={14} className="flex-shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* EQUIPE */}
      <Section id="equipe" className="py-20 md:py-28 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-forest-300 text-sm font-medium mb-4">
              <UserCircle size={16} weight="duotone" className="flex-shrink-0" />
              Nossa Equipe
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Profissionais Dedicados ao Seu Sorriso
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {equipe.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 border-4 border-forest-700 shadow-xl">
                  <img src={e.img} alt={e.nome} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-white font-bold text-lg">{e.nome}</h3>
                <p className="text-forest-300/70 text-sm mt-1">{e.esp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
              <ShieldCheck size={16} weight="duotone" className="flex-shrink-0" />
              Diferenciais
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-forest-950">
              Por Que Escolher a Acorde
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: HandHeart, t: 'Atendimento Humanizado', d: 'Cada paciente recebe atenção individualizada e um plano de tratamento personalizado.' },
              { icon: Sparkle, t: 'Tecnologia Moderna', d: 'Equipamentos digitais de última geração para diagnósticos precisos.' },
              { icon: MapPin, t: 'Centro de Florianópolis', d: 'Localização privilegiada com fácil acesso de qualquer ponto da cidade.' },
              { icon: ShieldCheck, t: '15+ Anos de Confiança', d: 'Tradição e experiência comprovada em milhares de tratamentos realizados.' },
            ].map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-xl bg-white border border-forest-100 hover:shadow-lg transition-all">
                <d.icon size={36} weight="duotone" className="text-forest-600 mx-auto mb-4" />
                <h3 className="font-bold text-forest-900 mb-2">{d.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
              <Star size={16} weight="duotone" className="flex-shrink-0" />
              Avaliações Reais
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
              Nossos Pacientes Recomendam
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-forest-50 rounded-xl p-6 md:p-8 border border-forest-100">
                <div className="flex mb-3">{[...Array(a.estrelas)].map((_, j) => <Star key={j} size={16} weight="fill" className="text-yellow-500" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{a.texto}"</p>
                <div className="font-semibold text-forest-800">{a.nome}</div>
                <div className="text-gray-400 text-xs mt-0.5">via Google Maps</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
              <ChatCircleDots size={16} weight="duotone" className="flex-shrink-0" />
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-forest-950">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {perguntas.map((p, i) => (
              <div key={i} className="bg-white border border-forest-100 rounded-xl overflow-hidden">
                <button onClick={() => setFaq(faq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-forest-50 transition-colors">
                  <span className="font-semibold text-forest-900 pr-4">{p.p}</span>
                  {faq === i ? <CaretUp size={20} className="text-forest-600 flex-shrink-0" /> : <CaretDown size={20} className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {faq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-gray-600 leading-relaxed">{p.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section id="contato" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
              <MapPin size={16} weight="duotone" className="flex-shrink-0" />
              Contato
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-forest-950">Venha nos Visitar</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-100">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={24} weight="duotone" className="text-forest-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-1">Endereço</h4>
                    <p className="text-gray-600 text-sm">{ADDR}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} weight="duotone" className="text-forest-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-1">Horário</h4>
                    <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={24} weight="duotone" className="text-forest-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-1">Telefone</h4>
                    <a href={TEL} className="text-forest-700 hover:text-forest-600 font-medium text-sm">(48) 3222-4863</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InstagramLogo size={24} weight="duotone" className="text-forest-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-1">Instagram</h4>
                    <a href={IG} target="_blank" rel="noopener noreferrer" className="text-forest-700 hover:text-forest-600 font-medium text-sm">@acordeodonto</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex-1">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-forest-700 text-forest-800 hover:bg-forest-50 px-6 py-3 rounded-lg font-semibold transition-all flex-1">
                  <MapPin size={20} weight="duotone" className="flex-shrink-0" />
                  Como Chegar
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536!2d-48.5483!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAcorde+Odonto!5e0!3m2!1spt-BR!2sbr" className="w-full h-full border-0" allowFullScreen loading="lazy" title="Mapa Acorde Odonto" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20 md:py-28 bg-gradient-to-br from-forest-800 to-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-96 h-96 rounded-full bg-forest-400 blur-[120px] absolute -top-32 -right-32" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Tooth size={52} weight="duotone" className="text-forest-400 mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6">
            Agende Sua Consulta Hoje
          </h2>
          <p className="text-forest-200/70 text-lg max-w-2xl mx-auto mb-10">
            Há mais de 15 anos transformando sorrisos no Centro de Florianópolis. Venha conhecer a Acorde Odonto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-forest-800 hover:bg-forest-50 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-xl">
              <WhatsappLogo size={24} weight="duotone" className="flex-shrink-0" />
              Agendar pelo WhatsApp
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-all">
              <Phone size={24} weight="duotone" className="flex-shrink-0" />
              Ligar Agora
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-forest-950 text-forest-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <img src="./images/logo.png" alt="Acorde Odonto" className="h-12 mb-4" />
              <p className="text-forest-400 text-sm leading-relaxed">Há mais de 15 anos cuidando do seu sorriso com qualidade e carinho.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Tratamentos</h4>
              <ul className="space-y-2 text-sm text-forest-400">
                <li>Ortodontia</li>
                <li>Implantodontia</li>
                <li>Endodontia</li>
                <li>Estética Dental</li>
                <li>Cirurgia Oral</li>
                <li>Prótese Dentária</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-forest-400">
                <li className="flex items-start gap-2"><MapPin size={14} weight="duotone" className="flex-shrink-0 mt-0.5 text-forest-500" /><span>{ADDR}</span></li>
                <li className="flex items-center gap-2"><Phone size={14} weight="duotone" className="flex-shrink-0 text-forest-500" /><a href={TEL} className="hover:text-white">(48) 3222-4863</a></li>
                <li className="flex items-center gap-2"><Clock size={14} weight="duotone" className="flex-shrink-0 text-forest-500" /><span>Seg-Sex: 8h às 18h</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Redes</h4>
              <div className="flex gap-3 mb-6">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-forest-800 hover:bg-forest-700 flex items-center justify-center transition-colors"><InstagramLogo size={20} weight="duotone" /></a>
                <a href="https://www.facebook.com/acordeodonto/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-forest-800 hover:bg-forest-700 flex items-center justify-center transition-colors"><FacebookLogo size={20} weight="duotone" /></a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-forest-800 hover:bg-forest-700 flex items-center justify-center transition-colors"><WhatsappLogo size={20} weight="duotone" /></a>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar
              </a>
            </div>
          </div>
          <div className="border-t border-forest-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-forest-500">
            <p>CNPJ: 09.338.739/0001-82 — Acorde Odonto Ltda</p>
            <p>© 2026 Acorde Odonto. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110" aria-label="WhatsApp">
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  )
}
