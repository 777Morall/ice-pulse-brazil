import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, Lock } from "lucide-react";

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
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50/50 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
      >
        {/* Barra de Status Superior */}
        <div className="h-2 w-full bg-gradient-to-r from-green-500 via-primary to-green-600" />

        <div className="px-8 py-10 flex flex-col items-center text-center">
          
          {/* Ícone Animado */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-sm border border-gray-100"
            >
              <ShieldCheck className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>

          {/* Título e Subtítulo */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              Pré-cadastro Concluído
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">
              Seus dados foram processados. Para garantir a segurança e exclusividade do benefício, uma última etapa é necessária.
            </p>
          </motion.div>

          {/* Card de Aviso/Instrução */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 text-left"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1.5 bg-blue-100 rounded-md">
                <Lock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Validação Obrigatória
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Para liberar a bonificação, o sistema exige uma confirmação de autenticidade através de uma contribuição simbólica à entidade parceira.
                </p>
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
              className="group relative w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span>Concluir Validação</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-4 text-[11px] text-gray-400 uppercase tracking-widest font-medium">
              Ambiente Seguro e Criptografado
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Final;
