import { fetchMenu } from "@/services/items-services";
import { useQuery } from "@tanstack/react-query";

function usePlaceOrderItems() {
  const { data, isLoading } = useQuery({
    queryKey: ["cardapio"],
    queryFn: fetchMenu,
  });

  return { data, isLoading };
}

export default usePlaceOrderItems;
