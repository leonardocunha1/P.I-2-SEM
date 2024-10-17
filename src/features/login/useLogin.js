import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "@/services/user-services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, senha }) => loginApi(email, senha),
    onSuccess: (user) => {
      //   queryClient.setQueryData(["user"], user);

      //   console.log(user);

      navigate("/home", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { login, isPending };
}
