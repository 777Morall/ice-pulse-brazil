import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
        <div className="h-2 w-full bg-gradient-to-r from-green-600 via-yellow-400 to-green-600" />

        <div className="px-8 py-12 flex flex-col items-center text-center">
          
          {/* Ícone de Sucesso */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Cadastro Concluído!
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[300px] mx-auto">
              Obrigado por se cadastrar. Seus dados foram registrados com sucesso.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Final;
