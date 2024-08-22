import TextMd from "@/ui/TextMd";
import Imagem from "/Img-about.jpg";

function NossaHistoria() {
  return (
    <section className="bg-primary-100 px-5 py-10">
      <TextMd label="Nossa História" />
      <div className="mx-auto flex max-w-5xl items-center gap-4">
        <img
          src={Imagem}
          alt="Imagem nossa história"
          className="h-80 rounded-xl"
        />
        <ul className="space-y-3 text-justify">
          <li className="">
            {" "}
            Bem-vindo à{" "}
            <span className="font-semibold text-primary-500">
              Diiner's Burgers
            </span>
            , o ponto de encontro gastronômico onde a paixão pela comida se une
            à tradição de sabores autênticos. Localizada no coração de
            Franca-SP, nossa hamburgueria é o resultado da visão compartilhada
            de cinco amigos: Leonardo, Vinícius, João, Luís e Maria Luiza.
            Juntos, eles trouxeram para a cidade uma experiência culinária
            única, onde cada hambúrguer é uma obra-prima de sabor e qualidade.
          </li>
          <li>
            Na Diiner's Burgers, não nos contentamos com o básico. Nossa missão
            é reinventar o conceito de hambúrguer, elevando-o a novos patamares
            de excelência. Utilizamos apenas os ingredientes mais frescos e
            selecionados, combinados de forma criativa para criar uma explosão
            de sabores em cada mordida. Cada hambúrguer é cuidadosamente
            preparado para garantir uma experiência gastronômica inesquecível.
          </li>
          <li>
            Nossa equipe é apaixonada por proporcionar momentos memoráveis aos
            nossos clientes. Do atendimento caloroso à atmosfera acolhedora,
            queremos que todos se sintam em casa na Diiner's Burgers. Estamos
            aqui para oferecer não apenas comida, mas uma experiência completa,
            onde cada detalhe é cuidadosamente pensado para encantar os
            sentidos.
          </li>
          <li>
            Seja para uma refeição rápida com os amigos ou para um jantar
            especial em família, a Diiner's Burgers é o destino perfeito para os
            amantes de hambúrgueres em Franca-SP. Venha nos visitar e descubra
            por que somos a escolha preferida dos que buscam qualidade, sabor e
            hospitalidade genuína em cada pedaço.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NossaHistoria;

/*
Bem-vindo à Diiner's Burgers, o ponto de encontro gastronômico onde a paixão pela comida se une à tradição de sabores autênticos. Localizada no coração de Franca-SP, nossa hamburgueria é o resultado da visão compartilhada de cinco amigos: Leonardo, Vinícius, João, Luís e Maria Luiza. Juntos, eles trouxeram para a cidade uma experiência culinária única, onde cada hambúrguer é uma obra-prima de sabor e qualidade.

Na Diiner's Burgers, não nos contentamos com o básico. Nossa missão é reinventar o conceito de hambúrguer, elevando-o a novos patamares de excelência. Utilizamos apenas os ingredientes mais frescos e selecionados, combinados de forma criativa para criar uma explosão de sabores em cada mordida. Cada hambúrguer é cuidadosamente preparado para garantir uma experiência gastronômica inesquecível.

Nossa equipe é apaixonada por proporcionar momentos memoráveis aos nossos clientes. Do atendimento caloroso à atmosfera acolhedora, queremos que todos se sintam em casa na Diiner's Burgers. Estamos aqui para oferecer não apenas comida, mas uma experiência completa, onde cada detalhe é cuidadosamente pensado para encantar os sentidos.

Seja para uma refeição rápida com os amigos ou para um jantar especial em família, a Diiner's Burgers é o destino perfeito para os amantes de hambúrgueres em Franca-SP. Venha nos visitar e descubra por que somos a escolha preferida dos que buscam qualidade, sabor e hospitalidade genuína em cada pedaço.
*/
