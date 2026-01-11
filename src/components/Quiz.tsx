import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, BarChart3 } from "lucide-react";
import iceBadge from "@/assets/ice-badge.png";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  showImage?: boolean;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Você sabe o que é a ICE (Immigration and Customs Enforcement)?",
    options: [
      { id: "a", text: "Sim, sei bem" },
      { id: "b", text: "Já ouvi falar" },
      { id: "c", text: "Sei pouco" },
      { id: "d", text: "Não sabia" },
    ],
  },
  {
    id: 2,
    question: "Durante o governo Trump, você acha que a ICE:",
    options: [
      { id: "a", text: "Cumpriu bem seu papel" },
      { id: "b", text: "Foi necessária, mas exagerou" },
      { id: "c", text: "Agiu de forma incorreta" },
      { id: "d", text: "Não tenho opinião formada" },
    ],
    showImage: true,
  },
  {
    id: 3,
    question: "No contexto dos EUA, você é a favor de políticas migratórias mais rígidas?",
    options: [
      { id: "a", text: "Totalmente a favor" },
      { id: "b", text: "Parcialmente a favor" },
      { id: "c", text: "Contra" },
      { id: "d", text: "Depende da situação" },
    ],
  },
  {
    id: 4,
    question: "Você acha que o Brasil deveria adotar algo parecido com a ICE?",
    options: [
      { id: "a", text: "Sim" },
      { id: "b", text: "Sim, com adaptações" },
      { id: "c", text: "Não" },
      { id: "d", text: "Não sei opinar" },
    ],
  },
  {
    id: 5,
    question: "Como você se identifica politicamente?",
    options: [
      { id: "a", text: "Direita" },
      { id: "b", text: "Centro-direita" },
      { id: "c", text: "Centro" },
      { id: "d", text: "Prefiro não responder" },
    ],
  },
];

type Screen = "intro" | "question" | "result";

const Quiz = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setScreen("question");
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionId }));

    // Auto-advance after selection
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setScreen("result");
      }
    }, 400);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <AnimatePresence mode="wait">
        {screen === "intro" && (
          <IntroScreen key="intro" onStart={handleStart} />
        )}

        {screen === "question" && (
          <QuestionScreen
            key={`question-${currentQuestion}`}
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            progress={progress}
            selectedOption={selectedOption}
            onSelect={handleOptionSelect}
          />
        )}

        {screen === "result" && (
          <ResultScreen
            key="result"
            showResults={showResults}
            onShowResults={() => setShowResults(true)}
            answers={answers}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col items-center justify-center px-6 py-12"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-32 h-32 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
      >
        <img
          src={iceBadge}
          alt="ICE Badge"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center leading-tight mb-4"
      >
        O que a direita brasileira pensa sobre a ICE dos EUA?
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-muted-foreground text-center text-lg mb-2"
      >
        Quiz rápido para entender sua opinião
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex items-center gap-2 text-muted-foreground text-sm mb-10"
      >
        <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
          ⏱️ 2-3 minutos
        </span>
        <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
          5 perguntas
        </span>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full max-w-sm bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 text-lg"
      >
        Começar Quiz
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

interface QuestionScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
}

const QuestionScreen = ({
  question,
  questionNumber,
  totalQuestions,
  progress,
  selectedOption,
  onSelect,
}: QuestionScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
      className="flex-1 flex flex-col px-4 py-6"
    >
      {/* Header with progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Pergunta {questionNumber} de {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="quiz-progress-bar">
          <motion.div
            className="quiz-progress-fill"
            initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 flex flex-col">
        {question.showImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/20"
          >
            <img
              src={iceBadge}
              alt="ICE Badge"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-xl md:text-2xl font-semibold text-foreground mb-8 text-center"
        >
          {question.question}
        </motion.h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(option.id)}
              className={`quiz-option ${
                selectedOption === option.id ? "quiz-option-selected" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                    selectedOption === option.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {option.id.toUpperCase()}
                </span>
                <span className="text-base font-medium">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ResultScreenProps {
  showResults: boolean;
  onShowResults: () => void;
  answers: Record<number, string>;
}

const ResultScreen = ({ showResults, onShowResults, answers }: ResultScreenProps) => {
  // Simple mock results for demonstration
  const mockResults = [
    { label: "Cumpriu bem seu papel", percentage: 45 },
    { label: "Foi necessária, mas exagerou", percentage: 28 },
    { label: "Agiu de forma incorreta", percentage: 15 },
    { label: "Não tenho opinião", percentage: 12 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col items-center justify-center px-6 py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="w-20 h-20 rounded-full bg-quiz-success/20 flex items-center justify-center mb-6"
      >
        <CheckCircle2 className="w-10 h-10 text-quiz-success" />
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-foreground mb-3"
      >
        Obrigado por participar!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground text-center mb-8 max-w-sm"
      >
        Sua resposta ajuda a entender como brasileiros veem políticas de imigração internacionais.
      </motion.p>

      {!showResults ? (
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onShowResults}
          className="w-full max-w-sm bg-secondary text-secondary-foreground font-semibold py-4 px-8 rounded-xl shadow-md flex items-center justify-center gap-2 text-base border border-border"
        >
          <BarChart3 className="w-5 h-5" />
          Ver resultados gerais
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
            Pergunta 2: O que acham da ICE no governo Trump?
          </h3>
          <div className="space-y-3">
            {mockResults.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{result.label}</span>
                  <span className="text-primary font-semibold">{result.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.percentage}%` }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xs text-muted-foreground mt-12 text-center"
      >
        Quiz informativo – não afiliado ao governo dos EUA
      </motion.p>
    </motion.div>
  );
};

export default Quiz;
