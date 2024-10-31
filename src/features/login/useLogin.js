import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "@/services/user-services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, senha }) => loginApi(email, senha),
    onSuccess: (user) => {
      navigate("/home", { replace: true });
      queryClient.invalidateQueries("userSession");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { login, isPending };
}
