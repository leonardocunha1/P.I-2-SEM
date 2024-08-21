import TextMd from "@/ui/TextMd";
import Burger from "/images/burgers/bg arrumado.png";
import BurgerText from "./BurgerText";

function BurgerInfo() {
  return (
    <section className="bg-primary-50 px-10 py-10">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <img src={Burger} alt="Burger" className="order-1 h-80 w-80" />
        <div className="space-y-3">
          <TextMd label="Diferencial Diiner's" />
          <BurgerText label="Seleção Impecável dos Ingredientes">
            Tudo começa com a escolha dos melhores ingredientes. Selecionamos
            carnes suculentas, vegetais frescos e molhos artesanais, garantindo
            que cada mordida seja uma explosão de sabor.
          </BurgerText>
          <BurgerText label="Carne Moída na Hora, Sabor Garantido">
            A nossa carne é moída diariamente e temperada com uma combinação
            exclusiva de especiarias secretas, que preservam sua suculência e
            realçam o sabor. Cada pedaço é uma homenagem ao prazer de comer bem.
          </BurgerText>
          <BurgerText label="Montagem Sob Medida, Feita para Você">
            Aqui, você é o chef! Monte o hambúrguer dos seus sonhos escolhendo o
            tipo de pão, acompanhamentos, queijos e molhos. Cada hambúrguer é
            único, assim como você.
          </BurgerText>
          <BurgerText label="Grelhado à Perfeição">
            Nossos mestres grelhadores garantem o ponto perfeito do seu
            hambúrguer. Crocante por fora, suculento por dentro – exatamente
            como um hambúrguer deve ser.
          </BurgerText>
          <BurgerText label="O Toque Final de Frescor">
            Antes de ser servido, o seu hambúrguer é finalizado com vegetais
            crocantes e uma camada generosa dos nossos molhos artesanais,
            elevando ainda mais o sabor.
          </BurgerText>
        </div>
      </div>
    </section>
  );
}

/*
Descubra o Segredo do Nosso Hambúrguer Perfeito
Seleção Impecável dos Ingredientes: Tudo começa com a escolha dos melhores ingredientes. Selecionamos carnes suculentas, vegetais frescos e molhos artesanais, garantindo que cada mordida seja uma explosão de sabor.

Carne Moída na Hora, Sabor Garantido: A nossa carne é moída diariamente e temperada com uma combinação exclusiva de especiarias secretas, que preservam sua suculência e realçam o sabor. Cada pedaço é uma homenagem ao prazer de comer bem.

Montagem Sob Medida, Feita para Você: Aqui, você é o chef! Monte o hambúrguer dos seus sonhos escolhendo o tipo de pão, acompanhamentos, queijos e molhos. Cada hambúrguer é único, assim como você.

Grelhado à Perfeição: Nossos mestres grelhadores garantem o ponto perfeito do seu hambúrguer. Crocante por fora, suculento por dentro – exatamente como um hambúrguer deve ser.

O Toque Final de Frescor: Antes de ser servido, o seu hambúrguer é finalizado com vegetais crocantes e uma camada generosa dos nossos molhos artesanais, elevando ainda mais o sabor.

Servido com Amor: Cada hambúrguer é cuidadosamente embalado e entregue com um sorriso. Nós colocamos carinho em cada detalhe, para que você possa saborear um momento de pura satisfação.


*/

export default BurgerInfo;
