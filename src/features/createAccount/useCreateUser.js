import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUser as createUserAPI } from "@/services/user-services";

function useCreateUser() {
  const { mutate: createUser, isPending } = useMutation({
    mutationFn: ({ nome, email, senha, telefone }) =>
      createUserAPI(nome, email, senha, telefone),
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createUser, isPending };
}

export default useCreateUser;
