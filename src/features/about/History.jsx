import TextMd from "@/ui/TextMd";
import img1 from "/images/img-about/image1-aboutus.png";

function History() {
  return (
    <section className="clip-your-needful-style relative z-0 -mt-20 bg-primary-50 px-5 pb-20 pt-10 md:pb-32">
      <div className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-4 px-5 md:flex-row">
        <img
          src={img1}
          alt="Imagem nossa história"
          className="order-2 h-80 rounded-xl md:order-1 md:h-96 lg:h-[420px]"
        />
        <div className="order-1 md:order-2">
          <TextMd label="História" />
          <ul className="space-y-3 text-justify leading-6">
            <li>
              A{" "}
              <span className="font-semibold text-primary-500">
                Diiner&apos;s Burgers
              </span>{" "}
              surgiu do sonho de cinco amigos: Leonardo, Vinícius, João, Luís e
              Maria Luiza. Unidos pela paixão pela gastronomia, eles decidiram
              criar algo especial em Franca-SP, uma cidade que já conheciam bem.
              Juntos, imaginaram um lugar onde o hambúrguer fosse tratado como
              uma obra de arte, e onde pudessem compartilhar com todos o que
              mais amavam: comida de qualidade.
            </li>
            <li>
              A ideia começou a tomar forma em encontros descontraídos e, aos
              poucos, se transformou em um projeto sério. Cada um dos cinco
              trouxe sua própria experiência e visão, desde a seleção dos
              ingredientes até o conceito do ambiente. O resultado foi uma
              hamburgueria que rapidamente se tornou referência na cidade.
            </li>
            <li>
              Desde o início, o objetivo era claro: criar um espaço onde as
              pessoas pudessem se reunir e desfrutar de hambúrgueres únicos,
              preparados com dedicação. A{" "}
              <span className="font-semibold text-primary-500">
                Diiner&apos;s Burgers
              </span>{" "}
              é mais do que apenas um restaurante; é o reflexo da amizade e do
              amor pela culinária que uniu esses cinco amigos. Venha conhecer
              essa história e fazer parte dela.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default History;
