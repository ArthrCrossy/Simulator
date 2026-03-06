import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { GraduationCap, Menu, X, User, LogIn } from "lucide-react";

interface NavbarProps {
    onStartQuiz?: () => void;
}

export function Navbar({ onStartQuiz }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                Simulado <span className="text-blue-600">DETRAN</span>
              </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <button
                                onClick={() => scrollToSection("features")}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Recursos
                            </button>
                            <button
                                onClick={() => scrollToSection("categories")}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Categorias
                            </button>
                            <button
                                onClick={() => scrollToSection("testimonials")}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Depoimentos
                            </button>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="ghost">
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Entrar
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl text-center">Bem-vindo!</DialogTitle>
                                        <DialogDescription className="text-center">
                                            Entre ou crie sua conta para salvar seu progresso
                                        </DialogDescription>
                                    </DialogHeader>

                                    <Tabs defaultValue="login" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="login">Entrar</TabsTrigger>
                                            <TabsTrigger value="register">Cadastrar</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="login" className="space-y-4 mt-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="login-email">E-mail</Label>
                                                <Input
                                                    id="login-email"
                                                    type="email"
                                                    placeholder="seu@email.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="login-password">Senha</Label>
                                                <Input
                                                    id="login-password"
                                                    type="password"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <Button className="w-full" size="lg">
                                                Entrar
                                            </Button>
                                            <p className="text-xs text-center text-gray-600">
                                                <a href="#" className="text-blue-600 hover:underline">
                                                    Esqueceu a senha?
                                                </a>
                                            </p>
                                        </TabsContent>

                                        <TabsContent value="register" className="space-y-4 mt-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="register-name">Nome completo</Label>
                                                <Input
                                                    id="register-name"
                                                    type="text"
                                                    placeholder="Seu nome"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="register-email">E-mail</Label>
                                                <Input
                                                    id="register-email"
                                                    type="email"
                                                    placeholder="seu@email.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="register-password">Senha</Label>
                                                <Input
                                                    id="register-password"
                                                    type="password"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="register-confirm">Confirmar senha</Label>
                                                <Input
                                                    id="register-confirm"
                                                    type="password"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <Button className="w-full" size="lg">
                                                Criar conta
                                            </Button>
                                            <p className="text-xs text-center text-gray-600">
                                                Ao se cadastrar, você aceita nossos{" "}
                                                <a href="#" className="text-blue-600 hover:underline">
                                                    Termos de Uso
                                                </a>
                                            </p>
                                        </TabsContent>
                                    </Tabs>

                                    <div className="relative my-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">
                        Ou continue com
                      </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" className="w-full">
                                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                />
                                            </svg>
                                            Google
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                            GitHub
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Button onClick={onStartQuiz}>
                                <User className="w-4 h-4 mr-2" />
                                Cadastrar-se
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-4 py-4 space-y-3">
                            <button
                                onClick={() => scrollToSection("features")}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Recursos
                            </button>
                            <button
                                onClick={() => scrollToSection("categories")}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Categorias
                            </button>
                            <button
                                onClick={() => scrollToSection("testimonials")}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Depoimentos
                            </button>
                            <div className="pt-3 border-t border-gray-200 space-y-2">
                                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            <LogIn className="w-4 h-4 mr-2" />
                                            Entrar
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl text-center">Bem-vindo!</DialogTitle>
                                            <DialogDescription className="text-center">
                                                Entre ou crie sua conta para salvar seu progresso
                                            </DialogDescription>
                                        </DialogHeader>

                                        <Tabs defaultValue="login" className="w-full">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="login">Entrar</TabsTrigger>
                                                <TabsTrigger value="register">Cadastrar</TabsTrigger>
                                            </TabsList>

                                            <TabsContent value="login" className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-login-email">E-mail</Label>
                                                    <Input
                                                        id="mobile-login-email"
                                                        type="email"
                                                        placeholder="seu@email.com"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-login-password">Senha</Label>
                                                    <Input
                                                        id="mobile-login-password"
                                                        type="password"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                                <Button className="w-full" size="lg">
                                                    Entrar
                                                </Button>
                                                <p className="text-xs text-center text-gray-600">
                                                    <a href="#" className="text-blue-600 hover:underline">
                                                        Esqueceu a senha?
                                                    </a>
                                                </p>
                                            </TabsContent>

                                            <TabsContent value="register" className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-register-name">Nome completo</Label>
                                                    <Input
                                                        id="mobile-register-name"
                                                        type="text"
                                                        placeholder="Seu nome"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-register-email">E-mail</Label>
                                                    <Input
                                                        id="mobile-register-email"
                                                        type="email"
                                                        placeholder="seu@email.com"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-register-password">Senha</Label>
                                                    <Input
                                                        id="mobile-register-password"
                                                        type="password"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="mobile-register-confirm">Confirmar senha</Label>
                                                    <Input
                                                        id="mobile-register-confirm"
                                                        type="password"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                                <Button className="w-full" size="lg">
                                                    Criar conta
                                                </Button>
                                            </TabsContent>
                                        </Tabs>

                                        <div className="relative my-4">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">
                          Ou continue com
                        </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <Button variant="outline" className="w-full">
                                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    />
                                                </svg>
                                                Google
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                                </svg>
                                                GitHub
                                            </Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <Button onClick={onStartQuiz} className="w-full">
                                    <User className="w-4 h-4 mr-2" />
                                    Cadastrar-se
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
