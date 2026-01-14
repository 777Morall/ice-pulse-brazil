import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, Clock, FileText, Shield, Award, Star } from "lucide-react";
import direitaNoBrasilLogo from "@/assets/direita-no-brasil-logo.png";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você avalia o governo Bolsonaro?",
    options: [
      { id: "a", text: "Foi excelente" },
      { id: "b", text: "Foi bom, com alguns erros" },
      { id: "c", text: "Foi regular" },
      { id: "d", text: "Prefiro não responder" },
    ],
  },
  {
    id: 2,
    question: "Você é a favor do porte de armas para cidadãos de bem?",
    options: [
      { id: "a", text: "Sim, totalmente" },
      { id: "b", text: "Sim, com restrições" },
      { id: "c", text: "Não" },
      { id: "d", text: "Não tenho opinião formada" },
    ],
  },
  {
    id: 3,
    question: "O que você acha sobre a privatização de estatais?",
    options: [
      { id: "a", text: "Deveria privatizar todas" },
      { id: "b", text: "Algumas devem ser privatizadas" },
      { id: "c", text: "Não deveria privatizar" },
      { id: "d", text: "Depende da estatal" },
    ],
  },
  {
    id: 4,
    question: "Você acredita que a mídia tradicional é imparcial?",
    options: [
      { id: "a", text: "Não, é totalmente tendenciosa" },
      { id: "b", text: "É parcialmente tendenciosa" },
      { id: "c", text: "Sim, é imparcial" },
      { id: "d", text: "Não acompanho" },
    ],
  },
  {
    id: 5,
    question: "Qual sua opinião sobre o STF atualmente?",
    options: [
      { id: "a", text: "Age de forma abusiva" },
      { id: "b", text: "Precisa de reformas" },
      { id: "c", text: "Está cumprindo seu papel" },
      { id: "d", text: "Prefiro não opinar" },
    ],
  },
  {
    id: 6,
    question: "Você apoia a reforma tributária proposta?",
    options: [
      { id: "a", text: "Não, vai prejudicar o povo" },
      { id: "b", text: "Tem pontos positivos e negativos" },
      { id: "c", text: "Sim, é necessária" },
      { id: "d", text: "Não entendo sobre o assunto" },
    ],
  },
  {
    id: 7,
    question: "Como você se identifica politicamente?",
    options: [
      { id: "a", text: "Direita" },
      { id: "b", text: "Centro-direita" },
      { id: "c", text: "Conservador" },
      { id: "d", text: "Liberal" },
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
      className="flex-1 flex flex-col items-center px-6 py-8 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      {/* Brazilian flag colors bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-full max-w-sm h-2 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 rounded-full mb-8"
      />

      {/* Logo oficial */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <img src={direitaNoBrasilLogo} alt="Direita No Brasil" className="w-32 h-auto" />
      </motion.div>

      {/* Official-looking header badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Pesquisa de Opinião
        </span>
        <Shield className="w-4 h-4 text-primary" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-foreground text-center leading-tight mb-3"
      >
        Direita No Brasil
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-muted-foreground text-center text-base mb-6 max-w-sm"
      >
        Pesquisa rápida e confidencial para entender sua opinião sobre política nacional
      </motion.p>

      {/* Info badges with icons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-3 text-muted-foreground text-sm mb-8"
      >
        <span className="inline-flex items-center gap-1.5 bg-muted/80 px-4 py-2 rounded-full border border-border/50">
          <Clock className="w-4 h-4 text-primary" />
          2-3 min
        </span>
        <span className="inline-flex items-center gap-1.5 bg-muted/80 px-4 py-2 rounded-full border border-border/50">
          <FileText className="w-4 h-4 text-primary" />
          7 perguntas
        </span>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.4)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full max-w-sm bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
      >
        Iniciar Pesquisa
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Bottom disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[10px] text-muted-foreground/60 mt-6 text-center uppercase tracking-wider"
      >
        Pesquisa independente • Dados anônimos
      </motion.p>
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
  const navigate = useNavigate();
  
  const handleReceiveBonus = () => {
    navigate("/informa");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col items-center px-6 py-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      {/* Success icon with stars */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
        >
          <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
        </motion.div>
      </motion.div>

      {/* Main message */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center"
      >
        Obrigado por participar!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground text-center mb-4 max-w-sm"
      >
        Gostamos muito das suas respostas!
      </motion.p>

      {/* Citizen recognition badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 mb-6 max-w-sm w-full"
      >
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-6 h-6 text-primary" />
          <span className="font-semibold text-foreground">Cidadão de Direita Autêntico</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Você demonstrou ser um verdadeiro cidadão de direita e merece ser recompensado pela sua opinião!
        </p>
      </motion.div>

      {/* Bonus card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-background to-muted/50 border-2 border-primary/30 rounded-2xl p-6 mb-6 max-w-sm w-full shadow-xl"
      >
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Bonificação Especial</span>
          <div className="text-4xl font-bold text-foreground mt-2">
            R$ 1.000
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Você poderá receber uma bonificação exclusiva por sua participação
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReceiveBonus}
          className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-base uppercase tracking-wide"
        >
          <Award className="w-5 h-5" />
          Receber Bonificação
        </motion.button>
      </motion.div>

      {/* Footer with ICE logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-auto pt-6 flex flex-col items-center gap-3"
      >
        <img src={direitaNoBrasilLogo} alt="Direita No Brasil" className="w-16 h-auto" />
        <p className="text-[10px] text-muted-foreground/60 text-center uppercase tracking-wider">
          Pesquisa independente • Dados anônimos
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Quiz;
