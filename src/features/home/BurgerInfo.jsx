import TextMd from "@/ui/TextMd";
import Burger from "/images/burgers/bg arrumado.png";

function BurgerInfo() {
  return (
    <section className="mt-5 p-3">
      <TextMd label="Segredo do Nosso Burger Perfeito" />
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:order-2">
          <p>
            <span className="font-bold text-orange-600">
              Seleção Impecável dos Ingredientes:
            </span>{" "}
            Tudo começa com a escolha dos melhores ingredientes. Selecionamos
            carnes suculentas, vegetais frescos e molhos artesanais, garantindo
            que cada mordida seja uma explosão de sabor.
          </p>
        </div>
        <img src={Burger} alt="" className="order-1 h-80 w-80" />
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
