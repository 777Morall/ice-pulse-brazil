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
    question: "Você apoia a reforma tributária do governo Lula?",
    options: [
      { id: "a", text: "Não, vai prejudicar o povo" },
      { id: "b", text: "Tem pontos positivos e negativos" },
      { id: "c", text: "Sim, é necessária" },
      { id: "d", text: "Não entendo sobre o assunto" },
    ],
  },
  {
    id: 7,
    question: "O que você acha do atual governo Lula?",
    options: [
      { id: "a", text: "É o pior governo da história" },
      { id: "b", text: "Está sendo ruim" },
      { id: "c", text: "Está regular" },
      { id: "d", text: "Prefiro não responder" },
    ],
  },
  {
    id: 8,
    question: "Você acredita que houve fraude nas eleições de 2022?",
    options: [
      { id: "a", text: "Sim, com certeza" },
      { id: "b", text: "Tenho dúvidas" },
      { id: "c", text: "Não houve fraude" },
      { id: "d", text: "Prefiro não opinar" },
    ],
  },
  {
    id: 9,
    question: "Qual sua opinião sobre a família tradicional?",
    options: [
      { id: "a", text: "Deve ser protegida acima de tudo" },
      { id: "b", text: "É importante mas há outras formas" },
      { id: "c", text: "Todas as famílias são iguais" },
      { id: "d", text: "Sem opinião" },
    ],
  },
  {
    id: 10,
    question: "Você apoia a redução do tamanho do Estado?",
    options: [
      { id: "a", text: "Sim, Estado mínimo" },
      { id: "b", text: "Sim, mas com equilíbrio" },
      { id: "c", text: "Não, o Estado deve crescer" },
      { id: "d", text: "Depende da situação" },
    ],
  },
  {
    id: 11,
    question: "O que você pensa sobre educação domiciliar (homeschooling)?",
    options: [
      { id: "a", text: "Deveria ser permitida" },
      { id: "b", text: "Sim, com regulamentação" },
      { id: "c", text: "Não deveria ser permitida" },
      { id: "d", text: "Não tenho opinião" },
    ],
  },
  {
    id: 12,
    question: "Como você se identifica politicamente?",
    options: [
      { id: "a", text: "Direita" },
      { id: "b", text: "Centro-direita" },
      { id: "c", text: "Conservador" },
      { id: "d", text: "Liberal" },
    ],
  },
  {
    id: 13,
    question: "Em quem você pretende votar para presidente em 2026?",
    options: [
      { id: "a", text: "Flávio Bolsonaro" },
      { id: "b", text: "Outro candidato da direita" },
      { id: "c", text: "Ainda não decidi" },
      { id: "d", text: "Prefiro não responder" },
    ],
  },
];

type Screen = "intro" | "question";

const Quiz = () => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
        // Navigate to resultado with flavio param based on last answer
        const votedFlavio = optionId === "a";
        navigate(`/resultado?flavio=${votedFlavio ? "1" : "0"}`);
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
      className="flex-1 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 relative overflow-hidden"
    >
      {/* Background gradient overlay with Brazilian colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/10 pointer-events-none" />
      
      {/* Brazilian flag colors bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-full max-w-sm h-2 bg-brazil-bar rounded-full mb-6 sm:mb-8"
      />

      {/* Logo oficial */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-4 sm:mb-6"
      >
        <img src={direitaNoBrasilLogo} alt="Direita No Brasil" className="w-28 sm:w-36 h-auto" />
      </motion.div>

      {/* Official-looking header badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex items-center gap-2 mb-3 sm:mb-4"
      >
        <Shield className="w-4 h-4 text-secondary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Pesquisa de Opinião
        </span>
        <Shield className="w-4 h-4 text-secondary" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center leading-tight mb-2 sm:mb-3"
      >
        Direita No Brasil
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-muted-foreground text-center text-sm sm:text-base mb-4 sm:mb-6 max-w-sm px-2"
      >
        Pesquisa rápida e confidencial sobre política nacional. Sua opinião importa!
      </motion.p>

      {/* Info badges with icons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8"
      >
        <span className="inline-flex items-center gap-1.5 bg-secondary/10 px-3 sm:px-4 py-2 rounded-full border border-secondary/30">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          3-4 min
        </span>
        <span className="inline-flex items-center gap-1.5 bg-secondary/10 px-3 sm:px-4 py-2 rounded-full border border-secondary/30">
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          13 perguntas
        </span>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full max-w-sm bg-brazil-gradient text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 text-base sm:text-lg uppercase tracking-wide"
      >
        Iniciar Pesquisa
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Bottom disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[10px] sm:text-xs text-muted-foreground/60 mt-4 sm:mt-6 text-center uppercase tracking-wider"
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
      className="flex-1 flex flex-col px-3 sm:px-4 py-4 sm:py-6"
    >
      {/* Header with progress */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            Pergunta {questionNumber} de {totalQuestions}
          </span>
          <span className="text-xs sm:text-sm font-medium text-secondary">
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
          className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-5 sm:mb-8 text-center px-2"
        >
          {question.question}
        </motion.h2>

        {/* Options */}
        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(option.id)}
              className={`quiz-option ${
                selectedOption === option.id ? "quiz-option-selected" : ""
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-medium transition-colors flex-shrink-0 ${
                    selectedOption === option.id
                      ? "border-secondary bg-secondary text-white"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {option.id.toUpperCase()}
                </span>
                <span className="text-sm sm:text-base font-medium text-left">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
