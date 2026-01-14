import { motion } from "framer-motion";
import { CheckCircle2, Heart, Star, ArrowRight, BookOpen, Flag } from "lucide-react";

import direitaNoBrasilLogo from "@/assets/direita-no-brasil-logo.png";
import bibliaEdicaoDireita from "@/assets/biblia-edicao-direita.png";

const Final = () => {
  // Promoção da Bíblia aparece para todos

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, opacity: 1,
      transition: { type: "spring" as const, stiffness: 50 }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-card rounded-3xl shadow-2xl overflow-hidden border border-border relative"
      >
        {/* Barra Superior - Cores Nacionais */}
        <div className="h-2 w-full bg-brazil-bar" />

        <div className="px-6 sm:px-8 py-8 sm:py-12 flex flex-col items-center text-center">
          
          {/* Ícone de Sucesso com Bandeira */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
            </div>
          </motion.div>

          {/* Título Principal - Mais Patriótico */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Flag className="w-4 h-4 text-secondary" />
              <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Cadastro Concluído!
              </h1>
              <Flag className="w-4 h-4 text-accent" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[300px] mx-auto">
              <span className="font-semibold text-secondary">Brasil acima de tudo!</span> Seus dados foram registrados com sucesso.
            </p>
          </motion.div>

          {/* Oferta Especial da Bíblia - Para todos */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-gradient-to-br from-secondary/15 via-accent/10 to-secondary/15 border-2 border-secondary/40 rounded-2xl p-4 sm:p-6 mb-6"
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
              transition={{ delay: 0.4, type: "spring" }}
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
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              <span className="font-bold text-foreground">"Brasil Acima de Tudo, Deus Acima de Todos"</span>
            </p>
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
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

          {/* Logo e Footer */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mt-auto">
            <img src={direitaNoBrasilLogo} alt="Direita No Brasil" className="w-14 sm:w-16 h-auto" />
            <p className="text-[9px] sm:text-[10px] text-muted-foreground/60 uppercase tracking-wider">
              Direita No Brasil • Deus, Pátria, Família
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Final;
