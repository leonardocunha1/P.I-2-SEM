import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "@/services/user-services";
import { toast } from "react-toastify";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: (userData) => updateUserApi(userData),
    onSuccess: () => {
      // Invalida o cache de dados do usuário para garantir atualização
      queryClient.invalidateQueries("userSession");

      // Exibe uma notificação de sucesso
      toast.success("Dados do usuário atualizados com sucesso", {
        autoClose: 1000,
        theme: "colored",
        pauseOnFocusLoss: false,
      });
    },
    onError: (error) => {
      // Exibe uma notificação de erro
      toast.error(`Erro ao atualizar usuário: ${error.message}`, {
        autoClose: 3000,
        theme: "colored",
        pauseOnFocusLoss: false,
      });
    },
  });

  return { updateUser, isPending };
}
