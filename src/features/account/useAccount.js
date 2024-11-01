import { fetchPedidosCliente } from "@/services/user-services";
import { useQuery } from "@tanstack/react-query";

function useAccount() {
  const { data, isLoading } = useQuery({
    queryKey: ["dados-cliente"],
    queryFn: fetchPedidosCliente,
  });

  return { data, isLoading };
}

export default useAccount;
