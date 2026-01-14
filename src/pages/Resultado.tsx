import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle2, Award, Star, Heart, ArrowRight, BookOpen, Flag } from "lucide-react";
import direitaNoBrasilLogo from "@/assets/direita-no-brasil-logo.png";
import bibliaEdicaoDireita from "@/assets/biblia-edicao-direita.png";

const Resultado = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const votedForFlavio = searchParams.get("flavio") === "1";

  const handleReceiveBonus = () => {
    navigate(`/informa?flavio=${votedForFlavio ? "1" : "0"}`);
  };

  return (
    <div className="quiz-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 relative"
      >
        {/* Background gradient with Brazilian colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/10 pointer-events-none" />
        
        {/* Success icon with stars */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative mb-4 sm:mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center border-2 border-secondary/30">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center"
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground fill-foreground" />
          </motion.div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-2 sm:mb-3"
        >
          <Flag className="w-4 h-4 text-secondary" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center">
            Obrigado por participar!
          </h2>
          <Flag className="w-4 h-4 text-accent" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base text-muted-foreground text-center mb-3 sm:mb-4 max-w-sm"
        >
          <span className="font-semibold text-secondary">Brasil acima de tudo!</span> Gostamos muito das suas respostas!
        </motion.p>

        {/* Citizen recognition badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 max-w-sm w-full"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
            <span className="font-semibold text-sm sm:text-base text-foreground">Cidadão de Direita Autêntico</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Você demonstrou ser um verdadeiro patriota e merece ser recompensado pela sua opinião!
          </p>
        </motion.div>

        {/* Oferta da Bíblia - Apenas para quem votou Flávio */}
        {votedForFlavio && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full bg-gradient-to-br from-secondary/15 via-accent/10 to-secondary/15 border-2 border-secondary/40 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 max-w-sm"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary">
                Oferta Exclusiva para Patriotas
              </span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
            </div>

            {/* Imagem da Bíblia */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative mb-4"
            >
              <img 
                src={bibliaEdicaoDireita} 
                alt="Bíblia Edição de Direita - Brasil Acima de Tudo, Deus Acima de Todos" 
                className="w-full max-w-[280px] mx-auto rounded-xl shadow-lg border border-secondary/20"
              />
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-accent text-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
                EDIÇÃO LIMITADA
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-secondary" />
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Bíblia Edição de Direita
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 text-center">
              <span className="font-bold text-foreground">"Brasil Acima de Tudo, Deus Acima de Todos"</span>
            </p>
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 text-center">
              A Palavra de Deus nas mãos de verdadeiros patriotas! 
              <span className="block mt-1 text-secondary font-semibold">
                100% do valor será reinvestido na causa conservadora.
              </span>
            </p>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-muted-foreground line-through text-sm">R$ 50,00</span>
              <span className="text-2xl sm:text-3xl font-bold text-secondary">R$ 29,97</span>
            </div>

            <motion.a
              href="https://direitanobrasil.site/bone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brazil-gradient text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-wide"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              Ajudar Agora
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        )}

        {/* Bonus card - para quem não votou Flávio */}
        {!votedForFlavio && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-background to-muted/50 border-2 border-secondary/30 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 max-w-sm w-full shadow-xl"
          >
            <div className="text-center mb-3 sm:mb-4">
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Bonificação Especial</span>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                R$ 1.000
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Você poderá receber uma bonificação exclusiva por sua participação
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleReceiveBonus}
              className="w-full bg-brazil-gradient text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-wide"
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              Receber Bonificação
            </motion.button>
          </motion.div>
        )}

        {/* Footer with logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-auto pt-4 sm:pt-6 flex flex-col items-center gap-2 sm:gap-3"
        >
          <img src={direitaNoBrasilLogo} alt="Direita No Brasil" className="w-14 sm:w-16 h-auto" />
          <p className="text-[9px] sm:text-[10px] text-muted-foreground/60 text-center uppercase tracking-wider">
            Deus, Pátria, Família • Juntos somos mais fortes
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resultado;
