import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight, Banknote, ShieldCheck } from "lucide-react";

const Final = () => {
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
      >
        {/* Barra Superior - Cores Nacionais */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-green-600" />

        <div className="px-8 py-8 flex flex-col items-center text-center">
          
          {/* Ícone de Sucesso */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2 border border-green-100">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            {/* Badge de "Pendente" */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-yellow-100 p-2 rounded-full shadow-md border border-white"
            >
              <Lock className="w-5 h-5 text-yellow-600" />
            </motion.div>
          </motion.div>

          {/* Título Principal */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Cadastro Aprovado!
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[300px] mx-auto">
              Sua conta foi criada com sucesso na <strong className="text-gray-800">ONG Mundial dos Eleitores de Direita</strong>.
            </p>
          </motion.div>

          {/* Card de Valor (Onde ocorre a persuasão) */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-8"
          >
            {/* Parte Superior: A Recompensa (R$ 1000) */}
            <div className="bg-green-600 p-4 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
               <div className="flex items-center justify-between relative z-10">
                 <div className="flex items-center gap-2">
                   <Banknote className="w-5 h-5 text-green-100" />
                   <span className="text-xs font-semibold uppercase tracking-wider text-green-100">Saldo Reservado</span>
                 </div>
                 <span className="text-2xl font-bold">R$ 1.000,00</span>
               </div>
            </div>

            {/* Parte Inferior: A Condição (R$ 30) */}
            <div className="p-5 text-left">
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-400" />
                Desbloqueio Obrigatório
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Para liberar o saque imediato da sua bonificação de <strong>R$ 1.000,00</strong>, o sistema exige um gesto simbólico de validação.
              </p>
              
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-xs text-gray-500 font-medium">Gesto Simbólico:</span>
                <span className="text-lg font-bold text-gray-800">R$ 30,00</span>
              </div>
            </div>
          </motion.div>

          {/* Botão de Ação */}
          <motion.div variants={itemVariants} className="w-full">
            <a 
              href="https://pixyes.com/doe/ongdedireita"
              className="group relative w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span>Fazer Doação e Receber Bônus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span className="uppercase tracking-widest">Garantia de Recebimento</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Final;
