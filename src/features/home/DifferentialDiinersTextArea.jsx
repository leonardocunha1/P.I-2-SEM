import Burger from "/images/burgers/bg arrumado.png";
import TextMd from "@/ui/TextMd";
import DifferentialDiinersText from "./DifferentialDiinersText";

import { motion } from "framer-motion";

function DifferentialDiinersTextArea() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 md:order-1 md:flex-row"
    >
      <img
        src={Burger}
        alt="Burger"
        className="order-1 h-80 w-80 lg:h-[500px] lg:w-[500px]"
      />
      <div>
        <TextMd label="Diferencial Diiner's" />
        <ul className="space-y-4">
          <DifferentialDiinersText label="Seleção Impecável dos Ingredientes">
            Tudo começa com a escolha dos melhores ingredientes. Selecionamos
            carnes suculentas, vegetais frescos e molhos artesanais, garantindo
            que cada mordida seja uma explosão de sabor.
          </DifferentialDiinersText>
          <DifferentialDiinersText label="Carne Moída na Hora, Sabor Garantido">
            A nossa carne é moída diariamente e temperada com uma combinação
            exclusiva de especiarias secretas, que preservam sua suculência e
            realçam o sabor. Cada pedaço é uma homenagem ao prazer de comer bem.
          </DifferentialDiinersText>
          <DifferentialDiinersText label="Montagem Sob Medida, Feita para Você">
            Aqui, você é o chef! Monte o hambúrguer dos seus sonhos escolhendo o
            tipo de pão, acompanhamentos, queijos e molhos. Cada hambúrguer é
            único, assim como você.
          </DifferentialDiinersText>
          <DifferentialDiinersText label="Grelhado à Perfeição">
            Nossos mestres grelhadores garantem o ponto perfeito do seu
            hambúrguer. Crocante por fora, suculento por dentro – exatamente
            como um hambúrguer deve ser.
          </DifferentialDiinersText>
          <DifferentialDiinersText label="O Toque Final de Frescor">
            Antes de ser servido, o seu hambúrguer é finalizado com vegetais
            crocantes e uma camada generosa dos nossos molhos artesanais,
            elevando ainda mais o sabor.
          </DifferentialDiinersText>
        </ul>
      </div>
    </motion.div>
  );
}

export default DifferentialDiinersTextArea;
