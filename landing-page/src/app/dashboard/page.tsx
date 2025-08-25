'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Plus,
  Search,
  Bell,
  Settings,
  LogOut,
  Ticket,
  BarChart3,
  Clock,
  MapPin,
  Star,
  ChevronRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    // Demo mode - simular usuário logado
    setUser({
      email: 'demo@supremesystem.com',
      user_metadata: {
        name: 'Usuário Demo'
      }
    })
    setLoading(false)
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const stats = [
    {
      title: 'Total de Eventos',
      value: '24',
      change: '+12%',
      icon: Calendar,
      color: 'neon-blue'
    },
    {
      title: 'Participantes',
      value: '1,847',
      change: '+23%',
      icon: Users,
      color: 'neon-purple'
    },
    {
      title: 'Receita Total',
      value: 'R$ 48.5K',
      change: '+18%',
      icon: DollarSign,
      color: 'neon-green'
    },
    {
      title: 'Taxa de Ocupação',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'neon-pink'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Summit 2025',
      date: '15 Jan 2025',
      time: '19:00',
      location: 'São Paulo, SP',
      attendees: 450,
      capacity: 500,
      status: 'active'
    },
    {
      id: 2,
      title: 'Workshop de IA',
      date: '20 Jan 2025',
      time: '14:00',
      location: 'Rio de Janeiro, RJ',
      attendees: 80,
      capacity: 100,
      status: 'active'
    },
    {
      id: 3,
      title: 'Conferência Dev',
      date: '28 Jan 2025',
      time: '09:00',
      location: 'Belo Horizonte, MG',
      attendees: 320,
      capacity: 400,
      status: 'upcoming'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="glass-card border-b border-dark-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-supreme flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-xl font-bold text-white">Sistema Supreme</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  className="w-full bg-dark-bg/50 border border-dark-border rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-400 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-pink rounded-full"></span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">
                    {user?.user_metadata?.name || 'Usuário'}
                  </p>
                  <p className="text-xs text-gray-400">{user?.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo de volta! 👋
          </h2>
          <p className="text-gray-400">
            Aqui está um resumo dos seus eventos e métricas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}/20 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <span className="text-green-400 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Próximos Eventos</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-supreme text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-neon-purple transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Novo Evento</span>
                </motion.button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-dark-bg/50 rounded-lg p-4 hover:bg-dark-bg/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-white font-semibold">{event.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.status === 'active' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {event.status === 'active' ? 'Ativo' : 'Em breve'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">
                              {event.attendees}/{event.capacity} participantes
                            </span>
                          </div>
                          <div className="w-32 h-2 bg-dark-bg rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-supreme rounded-full"
                              style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full bg-dark-bg/50 hover:bg-dark-bg/70 rounded-lg p-3 flex items-center space-x-3 transition-colors">
                  <Ticket className="w-5 h-5 text-neon-blue" />
                  <span className="text-white">Verificar Ingressos</span>
                </button>
                <button className="w-full bg-dark-bg/50 hover:bg-dark-bg/70 rounded-lg p-3 flex items-center space-x-3 transition-colors">
                  <BarChart3 className="w-5 h-5 text-neon-purple" />
                  <span className="text-white">Ver Relatórios</span>
                </button>
                <button className="w-full bg-dark-bg/50 hover:bg-dark-bg/70 rounded-lg p-3 flex items-center space-x-3 transition-colors">
                  <Users className="w-5 h-5 text-neon-green" />
                  <span className="text-white">Gerenciar Equipe</span>
                </button>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Vendas de Ingressos</span>
                    <span className="text-sm text-white font-medium">87%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                    <div className="h-full bg-neon-blue rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Satisfação</span>
                    <span className="text-sm text-white font-medium">92%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                    <div className="h-full bg-neon-green rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Engajamento</span>
                    <span className="text-sm text-white font-medium">78%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                    <div className="h-full bg-neon-purple rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}