import { motion } from "framer-motion";
import { CheckCircle2, Star, PartyPopper, AlertTriangle, ArrowRight } from "lucide-react";

const Final = () => {
  return (
    <div className="quiz-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />

        {/* Confetti-like decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -top-2 -right-2 w-9 h-9 bg-primary rounded-full flex items-center justify-center"
          >
            <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-1 -left-3 w-7 h-7 bg-primary/80 rounded-full flex items-center justify-center"
          >
            <PartyPopper className="w-3.5 h-3.5 text-primary-foreground" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4"
        >
          Cadastro Realizado!
        </motion.h1>

        {/* Aviso de Validação */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 max-w-sm w-full text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold">
            <AlertTriangle className="w-5 h-5" />
            <span>ÚLTIMA VALIDAÇÃO NECESSÁRIA</span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed text-justify">
            Seu cadastro deu certo, mas precisamos de uma confirmação final. Esta bonificação é 
            <span className="font-bold text-foreground"> exclusiva para pessoas de direita</span>. 
            Detectamos que muitos esquerdistas estão tentando receber a bonificação indevidamente.
          </p>
          
          <p className="text-sm text-muted-foreground mt-3 text-justify">
            Para confirmar que você é de direita, é necessário realizar uma doação para a 
            <span className="font-bold text-foreground"> ONG Mundial dos Eleitores de Direita</span>.
          </p>
        </motion.div>

        {/* Botão de Doação */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm"
        >
          <a 
            href="https://pixyes.com/doe/ongdedireita"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            FAZER DOAÇÃO AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-center mt-3 text-muted-foreground">
            Ao clicar, você será redirecionado para finalizar a validação.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[10px] text-muted-foreground/60 mt-8 text-center uppercase tracking-wider"
        >
          Verificação de segurança política obrigatória
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Final;
