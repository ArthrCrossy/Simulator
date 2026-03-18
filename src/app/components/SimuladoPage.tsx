import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState} from 'react';
import { questions, categories } from "../components/data/questions";
import SimuladoSidebar from '../components/SimuladoSidebar';
import QuestionCard from '../components/QuestionCard';
import {Button} from '../components/ui/button';
import {Card} from '../components/ui/card';
import {Trophy, RotateCcw} from 'lucide-react';

interface Answer {
    questionId: number;
    selectedAnswer: number;
    isCorrect: boolean;
}

export default function SimuladoPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const hasAnsweredCurrent = answers.some(a => a.questionId === currentQuestion.id);
    const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

    // Calculate category progress
    const categoryProgress = categories.map((category: { id: string; }) => {
        const categoryQuestions = questions.filter(q => q.category === category.id);
        const categoryAnswers = answers.filter(a =>
            categoryQuestions.some(q => q.id === a.questionId)
        );

        return {
            categoryId: category.id,
            total: categoryQuestions.length,
            correct: categoryAnswers.filter(a => a.isCorrect).length,
            answered: categoryAnswers.length,
        };
    });

    // Calculate overall progress
    const overallProgress = {
        totalQuestions: questions.length,
        answeredQuestions: answers.length,
        correctAnswers: answers.filter(a => a.isCorrect).length,
    };

    const handleAnswer = (isCorrect: boolean) => {
        const newAnswer: Answer = {
            questionId: currentQuestion.id,
            selectedAnswer: -1,
            isCorrect,
        };

        setAnswers(prev => {
            const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
            return [...filtered, newAnswer];
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleRestart = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setShowResults(false);
    };

    const approvalRate = overallProgress.answeredQuestions > 0
        ? (overallProgress.correctAnswers / overallProgress.answeredQuestions) * 100
        : 0;

    const isApproved = approvalRate >= 70;

    if (showResults) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <SimuladoSidebar
                    categoryProgress={categoryProgress}
                    overallProgress={overallProgress}
                />

                <div className="flex-1 flex items-center justify-center p-8">
                    <Card className="max-w-2xl w-full p-12 text-center">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                            isApproved ? 'bg-green-100' : 'bg-orange-100'
                        }`}>
                            <Trophy className={`w-12 h-12 ${
                                isApproved ? 'text-green-600' : 'text-orange-600'
                            }`}/>
                        </div>

                        <h1 className="text-4xl font-bold mb-4">
                            {isApproved ? 'Parabéns! Você foi aprovado! 🎉' : 'Continue praticando!'}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">
                            {isApproved
                                ? 'Você atingiu a pontuação necessária para aprovação!'
                                : 'Você precisa de pelo menos 70% de acertos para ser aprovado.'}
                        </p>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    {overallProgress.answeredQuestions}
                                </div>
                                <div className="text-sm text-gray-600">Questões Respondidas</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-green-600 mb-2">
                                    {overallProgress.correctAnswers}
                                </div>
                                <div className="text-sm text-gray-600">Acertos</div>
                            </div>
                            <div>
                                <div className={`text-4xl font-bold mb-2 ${
                                    isApproved ? 'text-green-600' : 'text-orange-600'
                                }`}>
                                    {approvalRate.toFixed(0)}%
                                </div>
                                <div className="text-sm text-gray-600">Aproveitamento</div>
                            </div>
                        </div>

                        <Button
                            onClick={handleRestart}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            <RotateCcw className="w-5 h-5 mr-2"/>
                            Refazer Simulado
                        </Button>

                        {/* Category Results */}
                        <div className="mt-12 pt-8 border-t">
                            <h3 className="font-semibold text-lg mb-6">Desempenho por Categoria</h3>
                            <div className="space-y-4">
                                {categories.map((category: { id: Key | null | undefined; icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
                                    const progress = categoryProgress.find((p: { categoryId: Key | null | undefined; }) => p.categoryId === category.id);
                                    if (!progress || progress.answered === 0) return null;

                                    const percentage = (progress.correct / progress.answered) * 100;

                                    return (
                                        <div key={category.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{category.icon}</span>
                                                <div>
                                                    <div className="font-medium">{category.name}</div>
                                                    <div className="text-sm text-gray-600">
                                                        {progress.correct}/{progress.answered} corretas
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`text-xl font-bold ${
                                                percentage >= 70 ? 'text-green-600' : 'text-orange-600'
                                            }`}>
                                                {percentage.toFixed(0)}%
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <SimuladoSidebar
                categoryProgress={categoryProgress}
                overallProgress={overallProgress}
            />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-white border-b px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="font-semibold">
                Simulado <span className="text-blue-600">DETRAN</span>
              </span>
                        </div>

                        <Button
                            onClick={handleRestart}
                            variant="outline"
                            size="sm"
                        >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reiniciar
                        </Button>
                    </div>
                </header>

                {/* Question */}
                <div className="py-8">
                    <QuestionCard
                        question={currentQuestion}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                        onAnswer={handleAnswer}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        hasAnswered={hasAnsweredCurrent}
                        savedAnswer={currentAnswer?.selectedAnswer || null}
                    />
                </div>
            </div>
        </div>
    );
}
