import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { finalizarCompra as finalizarCompraAPI } from "@/services/pedidos-services";
import { useMutation } from "@tanstack/react-query";
import { useCart } from "@/contexts/CartContext";

function useFinalizarCompra() {
  const navigate = useNavigate();
  const { dispatch } = useCart(0);

  const { mutate: finalizarCompra, isPending } = useMutation({
    mutationFn: (order) => finalizarCompraAPI(order),
    onSuccess: () => {
      toast.success("Compra finalizada com sucesso!");
      navigate("/home");
      dispatch({ type: "cart/clear" });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { finalizarCompra, isPending };
}

export default useFinalizarCompra;
