import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, HeartHandshake, Lock } from "lucide-react";

const Final = () => {
  // Variáveis de animação para sequenciamento suave
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
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
        {/* Barra de Status Superior - Cores Patriotas/Institucionais */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-green-600" />

        <div className="px-8 py-10 flex flex-col items-center text-center">
          
          {/* Ícone Animado */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-6"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-2 border border-blue-100">
              <CheckCircle2 className="w-10 h-10 text-blue-700" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-gray-100"
            >
              <ShieldCheck className="w-5 h-5 text-green-600" />
            </motion.div>
          </motion.div>

          {/* Título e Subtítulo */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Confirmação de Apoio
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[300px] mx-auto">
              Seu pré-cadastro na <strong className="text-gray-800">ONG Mundial dos Eleitores de Direita</strong> foi recebido. Finalize sua filiação abaixo.
            </p>
          </motion.div>

          {/* Card de Valor/Instrução */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-left relative overflow-hidden"
          >
            {/* Efeito de fundo sutil */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full opacity-50 -mr-4 -mt-4"></div>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                  <HeartHandshake className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Contribuição de Fortalecimento
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Para validar a autenticidade do seu perfil e apoiar a expansão do movimento, é necessária uma doação simbólica única.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Valor da Doação</span>
                <span className="text-xl font-bold text-green-700">R$ 30,00</span>
              </div>
            </div>
          </motion.div>

          {/* Botão de Ação Principal */}
          <motion.div 
            variants={itemVariants}
            className="w-full"
          >
            <a 
              href="https://pixyes.com/doe/ongdedireita"
              className="group relative w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span>Realizar Doação e Concluir</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
              <Lock className="w-3 h-3" />
              <span className="uppercase tracking-widest">Pagamento Seguro e Criptografado</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Final;
