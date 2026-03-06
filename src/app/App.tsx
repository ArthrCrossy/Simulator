import { useState } from "react";
import { Button } from "./components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import {
    RadioGroup,
    RadioGroupItem,
} from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./components/ui/alert-dialog";
import { Badge } from "./components/ui/badge";
import { questions, Question } from "./data/questions";
import {
    CheckCircle2,
    XCircle,
    RotateCcw,
    BookOpen,
    Award,
    AlertCircle,
} from "lucide-react";
import { LandingPage } from "./components/LandingPage";

interface Answer {
    questionId: number;
    selectedAnswer: number;
    isCorrect: boolean;
}

export default function App() {
    const [showLandingPage, setShowLandingPage] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] =
        useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedOption, setSelectedOption] = useState<
        number | null
    >(null);
    const [showResult, setShowResult] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const progress =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleStartQuiz = () => {
        setShowLandingPage(false);
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedOption(null);
        setShowResult(false);
        setShowExplanation(false);
    };

    const handleAnswer = () => {
        if (selectedOption === null) return;

        const isCorrect =
            selectedOption === currentQuestion.correctAnswer;

        setAnswers([
            ...answers,
            {
                questionId: currentQuestion.id,
                selectedAnswer: selectedOption,
                isCorrect,
            },
        ]);

        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setShowResult(true);
        }
    };

    const calculateScore = () => {
        const correctAnswers = answers.filter(
            (answer) => answer.isCorrect,
        ).length;
        const percentage =
            (correctAnswers / questions.length) * 100;
        const passed = percentage >= 70;

        return {
            correctAnswers,
            total: questions.length,
            percentage,
            passed,
        };
    };

    const resetQuiz = () => {
        setShowLandingPage(true);
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedOption(null);
        setShowResult(false);
        setShowExplanation(false);
    };

    // Show landing page first
    if (showLandingPage) {
        return <LandingPage onStartQuiz={handleStartQuiz} />;
    }

    if (!quizStarted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="bg-blue-600 p-4 rounded-full">
                                <BookOpen className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl">
                            Simulado DETRAN
                        </CardTitle>
                        <CardDescription className="text-base">
                            Prepare-se para a prova teórica de habilitação
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                            <h3 className="font-semibold text-lg">
                                Informações do Simulado:
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>
                    <strong>30 questões</strong> abrangendo
                    todas as categorias da prova
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>
                    Legislação de Trânsito, Direção Defensiva,
                    Sinalização, Primeiros Socorros e Meio
                    Ambiente
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>
                    Feedback imediato com explicações detalhadas
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>
                    <strong>Aprovação com 70%</strong> de
                    acertos (21 de 30 questões)
                  </span>
                                </li>
                            </ul>
                        </div>

                        <Button
                            onClick={handleStartQuiz}
                            className="w-full py-6 text-lg"
                            size="lg"
                        >
                            Iniciar Simulado
                        </Button>

                        <p className="text-center text-sm text-gray-600">
                            Boa sorte! Leia cada questão com atenção.
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (showResult) {
        const score = calculateScore();

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div
                                className={`p-4 rounded-full ${score.passed ? "bg-green-600" : "bg-red-600"}`}
                            >
                                {score.passed ? (
                                    <Award className="w-12 h-12 text-white" />
                                ) : (
                                    <AlertCircle className="w-12 h-12 text-white" />
                                )}
                            </div>
                        </div>
                        <CardTitle className="text-3xl">
                            {score.passed
                                ? "Parabéns! Você foi aprovado!"
                                : "Não foi dessa vez..."}
                        </CardTitle>
                        <CardDescription className="text-base">
                            {score.passed
                                ? "Você atingiu a pontuação mínima necessária!"
                                : "Continue estudando e tente novamente!"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                            <div className="text-center space-y-4">
                                <div>
                                    <p className="text-5xl font-bold text-blue-600">
                                        {score.percentage.toFixed(1)}%
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Porcentagem de acertos
                                    </p>
                                </div>

                                <div className="flex justify-center gap-8 pt-4">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-green-600">
                                            {score.correctAnswers}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Acertos
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-red-600">
                                            {score.total - score.correctAnswers}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Erros
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-blue-600">
                                            {score.total}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Total
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`p-4 rounded-lg ${score.passed ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                        >
                            <p className="text-center text-sm">
                                {score.passed
                                    ? "✓ Você está pronto para a prova! Continue praticando para manter o conhecimento."
                                    : "✗ Você precisa de pelo menos 21 acertos (70%) para ser aprovado. Estude mais e tente novamente!"}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Button
                                onClick={resetQuiz}
                                className="w-full"
                                size="lg"
                            >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Fazer Novo Simulado
                            </Button>
                        </div>

                        <div className="pt-4 border-t">
                            <h4 className="font-semibold mb-3">
                                Resumo por categoria:
                            </h4>
                            <div className="space-y-2">
                                {Array.from(
                                    new Set(questions.map((q) => q.category)),
                                ).map((category) => {
                                    const categoryQuestions = questions.filter(
                                        (q) => q.category === category,
                                    );
                                    const categoryAnswers = answers.filter((a) =>
                                        categoryQuestions.some(
                                            (q) => q.id === a.questionId,
                                        ),
                                    );
                                    const correct = categoryAnswers.filter(
                                        (a) => a.isCorrect,
                                    ).length;
                                    const total = categoryAnswers.length;
                                    const percentage = (correct / total) * 100;

                                    return (
                                        <div
                                            key={category}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded"
                                        >
                      <span className="text-sm">
                        {category}
                      </span>
                                            <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">
                          {correct}/{total}
                        </span>
                                                <span
                                                    className={`text-sm ${percentage >= 70 ? "text-green-600" : "text-red-600"}`}
                                                >
                          ({percentage.toFixed(0)}%)
                        </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header with progress */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-700">
                Questão {currentQuestionIndex + 1} de{" "}
                                {questions.length}
              </span>
                        </div>
                        <Badge variant="secondary">
                            {currentQuestion.category}
                        </Badge>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Question Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl leading-relaxed">
                            {currentQuestion.question}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <RadioGroup
                            value={selectedOption?.toString()}
                            onValueChange={(value) =>
                                setSelectedOption(parseInt(value))
                            }
                            disabled={showExplanation}
                            className="space-y-3"
                        >
                            {currentQuestion.options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                                        showExplanation
                                            ? index === currentQuestion.correctAnswer
                                                ? "bg-green-50 border-green-500"
                                                : index === selectedOption
                                                    ? "bg-red-50 border-red-500"
                                                    : "border-gray-200 opacity-60"
                                            : selectedOption === index
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                    }`}
                                >
                                    <RadioGroupItem
                                        value={index.toString()}
                                        id={`option-${index}`}
                                    />
                                    <Label
                                        htmlFor={`option-${index}`}
                                        className="flex-1 cursor-pointer text-base leading-relaxed"
                                    >
                                        {option}
                                    </Label>
                                    {showExplanation &&
                                        index === currentQuestion.correctAnswer && (
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        )}
                                    {showExplanation &&
                                        index === selectedOption &&
                                        index !== currentQuestion.correctAnswer && (
                                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        )}
                                </div>
                            ))}
                        </RadioGroup>

                        {showExplanation && (
                            <div
                                className={`p-4 rounded-lg ${
                                    selectedOption ===
                                    currentQuestion.correctAnswer
                                        ? "bg-green-50 border border-green-200"
                                        : "bg-red-50 border border-red-200"
                                }`}
                            >
                                <div className="flex items-start gap-2">
                                    {selectedOption ===
                                    currentQuestion.correctAnswer ? (
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div>
                                        <p className="font-semibold mb-1">
                                            {selectedOption ===
                                            currentQuestion.correctAnswer
                                                ? "Correto!"
                                                : "Incorreto"}
                                        </p>
                                        <p className="text-sm">
                                            {currentQuestion.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3 pt-4">
                            {!showExplanation ? (
                                <Button
                                    onClick={handleAnswer}
                                    disabled={selectedOption === null}
                                    className="flex-1"
                                    size="lg"
                                >
                                    Confirmar Resposta
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNextQuestion}
                                    className="flex-1"
                                    size="lg"
                                >
                                    {currentQuestionIndex < questions.length - 1
                                        ? "Próxima Questão"
                                        : "Ver Resultado"}
                                </Button>
                            )}
                        </div>

                        {/* Score tracker */}
                        <div className="flex items-center justify-center gap-6 pt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>
                  {answers.filter((a) => a.isCorrect).length}{" "}
                                    acertos
                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <XCircle className="w-4 h-4 text-red-600" />
                                <span>
                  {answers.filter((a) => !a.isCorrect).length}{" "}
                                    erros
                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex justify-center">
                    <Button
                        onClick={resetQuiz}
                        variant="outline"
                        size="sm"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Recomeçar Simulado
                    </Button>
                </div>
            </div>
        </div>
    );
}