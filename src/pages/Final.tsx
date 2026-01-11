import { motion } from "framer-motion";
import { CheckCircle2, Star, PartyPopper } from "lucide-react";

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
          className="relative mb-8"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
            <CheckCircle2 className="w-14 h-14 text-primary" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
          >
            <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-1 -left-3 w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center"
          >
            <PartyPopper className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Cadastro Realizado!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground text-center mb-6 max-w-sm"
        >
          Seus dados foram recebidos com sucesso. Entraremos em contato em breve!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 max-w-sm w-full text-center"
        >
          <p className="text-sm text-muted-foreground">
            Aguarde nossa equipe entrar em contato para confirmar sua bonificação de{" "}
            <span className="font-bold text-foreground">R$ 1.000</span>
          </p>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[10px] text-muted-foreground/60 mt-8 text-center uppercase tracking-wider"
        >
          Obrigado pela sua participação
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Final;
