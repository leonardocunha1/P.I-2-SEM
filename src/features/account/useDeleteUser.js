import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "@/services/user-services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: (senha_atual) => deleteUserApi(senha_atual),
    onSuccess: () => {
      // Invalida o cache de dados do usuário após exclusão
      queryClient.invalidateQueries("userSession");
      navigate("/home");

      // Exibe uma notificação de sucesso
      toast.success("Conta excluída com sucesso", {
        autoClose: 1000,
        theme: "colored",
        pauseOnFocusLoss: false,
      });
    },
    onError: (error) => {
      // Exibe uma notificação de erro
      toast.error(`Erro ao excluir a conta: ${error.message}`, {
        autoClose: 3000,
        theme: "colored",
        pauseOnFocusLoss: false,
      });
    },
  });

  return { deleteUser, isDeleting };
}
