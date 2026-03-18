import { useState } from 'react';
import { Question } from '../components/data/questions';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface QuestionCardProps {
    question: Question;
    questionNumber: number;
    totalQuestions: number;
    onAnswer: (isCorrect: boolean) => void;
    onNext: () => void;
    onPrevious: () => void;
    hasAnswered: boolean;
    savedAnswer: number | null;
}

export default function QuestionCard({
                                         question,
                                         questionNumber,
                                         totalQuestions,
                                         onAnswer,
                                         onNext,
                                         onPrevious,
                                         hasAnswered,
                                         savedAnswer,
                                     }: QuestionCardProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(savedAnswer);
    const [showFeedback, setShowFeedback] = useState(hasAnswered);

    const handleSelectOption = (index: number) => {
        if (showFeedback) return; // Don't allow changing after answering
        setSelectedOption(index);
    };

    const handleConfirm = () => {
        if (selectedOption === null) return;

        const isCorrect = selectedOption === question.correctAnswer;
        setShowFeedback(true);
        onAnswer(isCorrect);
    };

    const handleNext = () => {
        onNext();
        setSelectedOption(null);
        setShowFeedback(false);
    };

    const handlePrevious = () => {
        onPrevious();
        setSelectedOption(null);
        setShowFeedback(false);
    };

    const getOptionClassName = (index: number) => {
        const baseClass = "p-4 rounded-lg border-2 text-left transition-all cursor-pointer";

        if (!showFeedback) {
            return `${baseClass} ${
                selectedOption === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`;
        }

        if (index === question.correctAnswer) {
            return `${baseClass} border-green-500 bg-green-50`;
        }

        if (selectedOption === index && index !== question.correctAnswer) {
            return `${baseClass} border-red-500 bg-red-50`;
        }

        return `${baseClass} border-gray-200 bg-gray-50 cursor-not-allowed`;
    };

    const getOptionIcon = (index: number) => {
        if (!showFeedback) return null;

        if (index === question.correctAnswer) {
            return <CheckCircle className="w-5 h-5 text-green-600" />;
        }

        if (selectedOption === index && index !== question.correctAnswer) {
            return <XCircle className="w-5 h-5 text-red-600" />;
        }

        return null;
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            {/* Question Header */}
            <div className="mb-6">
    <div className="flex items-center justify-between mb-4">
    <span className="text-sm font-medium text-gray-500">
        Questão {questionNumber} de {totalQuestions}
    </span>
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
        {question.category}
        </span>
        </div>

        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
    <div
        className="h-full bg-blue-600 transition-all duration-300"
    style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
    />
    </div>
    </div>

    {/* Question */}
    <Card className="p-8 mb-6">
    <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>

    {/* Options */}
    <div className="space-y-3">
        {question.options.map((option, index) => (
                <div
                    key={index}
            className={getOptionClassName(index)}
            onClick={() => handleSelectOption(index)}
>
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
        selectedOption === index && !showFeedback
            ? 'border-blue-500 bg-blue-500'
            : 'border-gray-300'
    }`}>
    {selectedOption === index && !showFeedback && (
        <div className="w-2 h-2 bg-white rounded-full" />
    )}
    </div>
    <span className="font-medium">{option}</span>
        </div>
    {getOptionIcon(index)}
    </div>
    </div>
))}
    </div>

    {/* Feedback */}
    {showFeedback && (
        <div className={`mt-6 p-4 rounded-lg ${
            selectedOption === question.correctAnswer
                ? 'bg-green-50 border border-green-200'
                : 'bg-orange-50 border border-orange-200'
        }`}>
        <div className="flex items-start gap-3">
        <AlertCircle className={`w-5 h-5 mt-0.5 ${
            selectedOption === question.correctAnswer ? 'text-green-600' : 'text-orange-600'
        }`} />
    <div>
    <h4 className={`font-semibold mb-1 ${
        selectedOption === question.correctAnswer ? 'text-green-900' : 'text-orange-900'
    }`}>
        {selectedOption === question.correctAnswer ? 'Correto! 🎉' : 'Incorreto'}
        </h4>
        <p className={
        selectedOption === question.correctAnswer ? 'text-green-800' : 'text-orange-800'
    }>
        {question.explanation}
        </p>
        </div>
        </div>
        </div>
    )}
    </Card>

    {/* Navigation */}
    <div className="flex items-center justify-between">
    <Button
        variant="outline"
    onClick={handlePrevious}
    disabled={questionNumber === 1}
>
    Anterior
    </Button>

    {!showFeedback ? (
            <Button
                onClick={handleConfirm}
        disabled={selectedOption === null}
        className="bg-blue-600 hover:bg-blue-700"
            >
            Confirmar Resposta
    </Button>
    ) : (
        <Button
            onClick={handleNext}
        className="bg-blue-600 hover:bg-blue-700"
        >
        {questionNumber === totalQuestions ? 'Ver Resultado' : 'Próxima Questão'}
        </Button>
    )}
    </div>
    </div>
);
}
