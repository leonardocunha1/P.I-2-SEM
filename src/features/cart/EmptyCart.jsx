import TextMd from "@/ui/TextMd";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <TextMd label="Carrinho vazio" />

      <p className="text-center">
        Começe seu pedido{" "}
        <span
          className="cursor-pointer font-bold text-primary-500 underline"
          onClick={() => navigate("/order")}
        >
          clicando aqui
        </span>
      </p>
    </div>
  );
}

export default EmptyCart;
