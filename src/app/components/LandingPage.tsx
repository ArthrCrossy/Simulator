import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  BookOpen, 
  CheckCircle2, 
  Target, 
  Trophy, 
  Clock, 
  BarChart3,
  Shield,
  Zap,
  Users,
  Star,
  ArrowRight,
  GraduationCap
} from "lucide-react";

interface LandingPageProps {
  onStartQuiz: () => void;
}

export function LandingPage({ onStartQuiz }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
              <Zap className="w-4 h-4 inline mr-1" />
              100% Gratuito
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Conquiste sua CNH na
              <span className="block text-blue-600">Primeira Tentativa!</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prepare-se com nosso simulado completo do DETRAN. Questões atualizadas, 
              feedback imediato e aprovação garantida com 70% de acertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                onClick={onStartQuiz}
                size="lg"
                className="px-8 py-6 text-lg w-full sm:w-auto"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Começar Simulado Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500">
                <Users className="w-4 h-4 inline mr-1" />
                Mais de 10.000 aprovados
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">30</p>
                <p className="text-sm text-gray-600 mt-1">Questões</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-gray-600 mt-1">Gratuito</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">5</p>
                <p className="text-sm text-gray-600 mt-1">Categorias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso simulado?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para passar na prova teórica do DETRAN
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Questões Reais</CardTitle>
              <CardDescription>
                30 questões baseadas na prova oficial do DETRAN, cobrindo todas as categorias exigidas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Feedback Imediato</CardTitle>
              <CardDescription>
                Receba explicações detalhadas para cada questão, aprendendo com seus erros
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Sistema de Aprovação</CardTitle>
              <CardDescription>
                Simulação real: você precisa de 70% de acertos para ser aprovado, como na prova oficial
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Sem Limite de Tempo</CardTitle>
              <CardDescription>
                Pratique no seu ritmo, sem pressão. Revise quantas vezes precisar
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Análise Detalhada</CardTitle>
              <CardDescription>
                Veja seu desempenho por categoria e identifique seus pontos fracos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle>Resultados Comprovados</CardTitle>
              <CardDescription>
                Milhares de candidatos já foram aprovados usando nosso simulado
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              5 Categorias Essenciais
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Conteúdo completo para cobrir todos os tópicos da prova
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Shield, title: "Legislação de Trânsito", desc: "CTB, infrações e penalidades" },
              { icon: Target, title: "Direção Defensiva", desc: "Segurança e prevenção" },
              { icon: BookOpen, title: "Sinalização", desc: "Placas e marcações viárias" },
              { icon: CheckCircle2, title: "Primeiros Socorros", desc: "Atendimento a vítimas" },
              { icon: GraduationCap, title: "Meio Ambiente", desc: "Consciência ecológica" },
            ].map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-base text-white">{category.title}</CardTitle>
                  <CardDescription className="text-blue-100 text-sm">
                    {category.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos usuários estão dizendo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Silva",
              role: "Aprovada em 2025",
              text: "Fiz o simulado 3 vezes e passei na prova real de primeira! As questões são muito parecidas com as da prova.",
              rating: 5
            },
            {
              name: "João Santos",
              role: "Aprovado em 2026",
              text: "O feedback imediato me ajudou muito a entender meus erros. Não precisei de auto escola extra!",
              rating: 5
            },
            {
              name: "Ana Costa",
              role: "Aprovada em 2026",
              text: "Gratuito e completo! Melhor simulado que encontrei na internet. Super recomendo!",
              rating: 5
            }
          ].map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Pronto para conquistar sua CNH?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comece agora mesmo e junte-se a milhares de pessoas que já foram aprovadas!
          </p>
          <Button 
            onClick={onStartQuiz}
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-blue-50"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Começar Simulado Gratuito
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-blue-100">
            ✓ Sem cadastro necessário  ✓ 100% gratuito  ✓ Acesso imediato
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 Simulado DETRAN. Todos os direitos reservados.</p>
            <p className="mt-2">Material educacional para preparação da prova teórica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
