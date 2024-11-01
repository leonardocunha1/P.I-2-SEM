import { useUser } from "@/contexts/UserContext";
import useAccount from "@/features/account/useAccount";
import { formatCurrency } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

function Account() {
  const { data, isLoading } = useAccount();
  const { isLogged } = useUser();
  const navigate = useNavigate();

  if (!isLogged) {
    navigate("/login");
  }

  if (isLoading) {
    return (
      <div className="relative flex h-dvh flex-col overflow-x-hidden bg-primary-50 font-poppins2 text-sm text-stone-800">
        <ClipLoader color="#fdf7ef" size={90} cssOverride={override} />
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      {data.map((pedido) => (
        <div key={pedido.id}>
          Pedido número: {pedido.id} - total: {formatCurrency(pedido.total)}
        </div>
      ))}
    </div>
  );
}

export default Account;
