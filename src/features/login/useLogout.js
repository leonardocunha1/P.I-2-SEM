import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "@/services/user-services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      navigate("/home", { replace: true });
      queryClient.invalidateQueries("userSession");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { logout, isPending };
}
