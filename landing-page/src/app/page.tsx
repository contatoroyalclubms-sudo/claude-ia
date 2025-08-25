'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  Rocket, 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone,
  Crown,
  Star,
  ArrowRight,
  Check,
  Play
} from 'lucide-react';

// Componente de Partículas 3D
const Particles3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-supreme rounded-full opacity-20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Componente Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section 
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/10 to-dark-bg" />
      
      {/* Glassmorphism Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Supreme Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card backdrop-blur-glass border border-neon-purple/30 mb-8"
        >
          <Crown className="w-5 h-5 text-neon-purple" />
          <span className="text-sm font-medium bg-gradient-supreme bg-clip-text text-transparent">
            Sistema #1 em Eventos Premium
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-supreme bg-clip-text text-transparent">
            SUPREME
          </span>
          <br />
          <span className="text-white">SYSTEM</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          O futuro da gestão de eventos chegou. Dashboard futurístico, 
          analytics em tempo real e experiência premium que seus clientes nunca viram.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 0, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-purple-pink rounded-full font-semibold text-white text-lg shadow-neon-purple transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            EXPERIMENTAR GRÁTIS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 glass-card backdrop-blur-glass border border-neon-blue/30 rounded-full font-semibold text-white text-lg hover:border-neon-blue/60 transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            VER DEMONSTRAÇÃO
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
        >
          {[
            { number: "500+", label: "Eventos Realizados" },
            { number: "50k+", label: "Participantes" },
            { number: "99.9%", label: "Uptime" },
            { number: "4.9/5", label: "Avaliação" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-supreme bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Componente Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Futurístico",
      description: "Interface 3D com gráficos em tempo real e design cinematográfico",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Supreme",
      description: "60fps garantidos, animações suaves e carregamento instantâneo",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Inteligente",
      description: "IA integrada para insights preditivos e otimização automática",
      gradient: "from-neon-pink to-neon-green"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Supreme",
      description: "App nativo com realidade aumentada e experiência premium",
      gradient: "from-neon-green to-neon-blue"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Militar",
      description: "Criptografia quantum e proteção enterprise-grade",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Experiência Única",
      description: "Efeitos holográficos e interações nunca vistas antes",
      gradient: "from-neon-purple to-neon-pink"
    }
  ];

  return (
    <section className="py-32 px-4 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-supreme bg-clip-text text-transparent">
            RECURSOS
          </span>
          <span className="text-white"> SUPREMOS</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Tecnologias que seus concorrentes só terão em 2030
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`} />
            
            <div className="relative h-full p-8 glass-card backdrop-blur-glass border border-gray-800 rounded-3xl group-hover:border-gray-700 transition-all duration-500">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <span className="text-white">
                  {feature.icon}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-supreme group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Componente Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "STARTER",
      price: "R$ 297",
      period: "/mês",
      description: "Para eventos pequenos",
      features: [
        "Dashboard Supreme",
        "Até 500 participantes", 
        "2 módulos inclusos",
        "Suporte 24/7",
        "Analytics básicos"
      ],
      popular: false,
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      name: "PROFESSIONAL", 
      price: "R$ 597",
      period: "/mês",
      description: "Para eventos médios",
      features: [
        "Todos recursos Starter",
        "Até 2.000 participantes",
        "6 módulos inclusos", 
        "IA preditiva",
        "App mobile",
        "Integrações premium"
      ],
      popular: true,
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      name: "ENTERPRISE",
      price: "R$ 1.297",
      period: "/mês", 
      description: "Para grandes eventos",
      features: [
        "Todos recursos Pro",
        "Participantes ilimitados",
        "Todos os 10 módulos",
        "White label",
        "Suporte dedicado",
        "Customização completa"
      ],
      popular: false,
      gradient: "from-neon-pink to-neon-green"
    }
  ];

  return (
    <section className="py-32 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">PLANOS </span>
          <span className="bg-gradient-supreme bg-clip-text text-transparent">
            SUPREMOS
          </span>
        </h2>
        <p className="text-xl text-gray-300">
          Escolha o poder que seu evento merece
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative group ${plan.popular ? 'md:scale-110' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-purple-pink rounded-full text-white font-semibold text-sm">
                MAIS POPULAR
              </div>
            )}

            <div className={`relative h-full p-8 rounded-3xl border-2 ${plan.popular ? 'border-neon-purple glass-card backdrop-blur-glass' : 'border-gray-800 bg-dark-card'} transition-all duration-500`}>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-supreme bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-purple-pink text-white shadow-neon-purple' 
                    : 'glass-card backdrop-blur-glass border border-gray-700 text-white hover:border-neon-blue/50'
                }`}
              >
                COMEÇAR AGORA
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Componente Footer
const FooterSection = () => {
  return (
    <footer className="py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-supreme bg-clip-text text-transparent">
                SUPREME SYSTEM
              </span>
            </h2>
            <p className="text-gray-400">
              O futuro da gestão de eventos está aqui
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-left mb-12">
            <div>
              <h3 className="font-semibold text-white mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dashboard</li>
                <li>Analytics</li>
                <li>Mobile App</li>
                <li>Integrações</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre</li>
                <li>Carreira</li>
                <li>Blog</li>
                <li>Imprensa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentação</li>
                <li>API</li>
                <li>Status</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
                <li>LGPD</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; 2024 Supreme System. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Componente Principal
export default function LandingPageSupreme() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-white">Carregando experiência Supreme...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white font-supreme relative overflow-x-hidden">
      <Particles3D />
      
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FooterSection />
      </div>
    </div>
  );
}