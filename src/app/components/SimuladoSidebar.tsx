import { categories } from '../components/data/questions';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { Trophy, TrendingUp } from 'lucide-react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface CategoryProgress {
    categoryId: string;
    total: number;
    correct: number;
    answered: number;
}

interface SimuladoSidebarProps {
    categoryProgress: CategoryProgress[];
    overallProgress: {
        totalQuestions: number;
        answeredQuestions: number;
        correctAnswers: number;
    };
}

export default function SimuladoSidebar({categoryProgress, overallProgress}: SimuladoSidebarProps) {
    const approvalRate = overallProgress.answeredQuestions > 0
        ? (overallProgress.correctAnswers / overallProgress.answeredQuestions) * 100
        : 0;

    const isApproved = approvalRate >= 70;

    return (
        <div className="w-80 bg-white border-r h-screen overflow-y-auto p-6 space-y-6">
            {/* Overall Progress */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Progresso Geral</h2>
                <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Aprovação</span>
                        <Trophy className={`w-5 h-5 ${isApproved ? 'text-yellow-500' : 'text-gray-400'}`}/>
                    </div>
                    <div className="text-3xl font-bold mb-2">
                        {approvalRate.toFixed(0)}%
                    </div>
                    <Progress value={approvalRate} className="h-2 mb-2"/>
                    <div className="text-xs text-gray-600">
                        {overallProgress.correctAnswers} de {overallProgress.answeredQuestions} corretas
                        {isApproved && approvalRate === 100 ?
                            ' - Excelente! 🎉' :
                            isApproved ?
                                ' - Aprovado! ✅' :
                                ' - Mínimo: 70%'
                        }
                    </div>
                </Card>
            </div>

            {/* Questions Progress */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Questões Respondidas</span>
                    <span className="text-sm text-gray-600">
            {overallProgress.answeredQuestions}/{overallProgress.totalQuestions}
          </span>
                </div>
                <Progress
                    value={(overallProgress.answeredQuestions / overallProgress.totalQuestions) * 100}
                    className="h-2"
                />
            </div>

            {/* Category Progress */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-600"/>
                    <h3 className="font-semibold">Desempenho por Categoria</h3>
                </div>

                <div className="space-y-4">
                    {categories.map((category: { id: Key | null | undefined; icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
                        const progress = categoryProgress.find(p => p.categoryId === category.id) || {
                            total: 0,
                            correct: 0,
                            answered: 0
                        };

                        const percentage = progress.answered > 0
                            ? (progress.correct / progress.answered) * 100
                            : 0;

                        return (
                            <div key={category.id} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{category.icon}</span>
                                        <span className="text-sm font-medium">{category.name}</span>
                                    </div>
                                    <span className="text-xs text-gray-600">
                    {progress.answered}/{progress.total}
                  </span>
                                </div>

                                {progress.answered > 0 ? (
                                    <>
                                        <Progress value={percentage} className="h-1.5" />
                                        <div className="flex justify-between text-xs">
                      <span className="text-gray-600">
                        {progress.correct} corretas
                      </span>
                                            <span className={`font-medium ${
                                                percentage >= 70 ? 'text-green-600' : 'text-orange-600'
                                            }`}>
                        {percentage.toFixed(0)}%
                      </span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="h-1.5 bg-gray-100 rounded-full" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Tips */}
            <Card className="p-4 bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-sm mb-2 text-blue-900">💡 Dica</h4>
                <p className="text-xs text-blue-800">
                    Você precisa de pelo menos 70% de acertos para ser aprovado na prova do DETRAN.
                    Continue praticando!
                </p>
            </Card>
        </div>
    );
}
