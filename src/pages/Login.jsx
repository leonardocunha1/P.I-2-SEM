import { useUser } from "@/contexts/UserContext";
import LoginForm from "@/features/login/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLogged } = useUser();
  const navigate = useNavigate();
  if (isLogged) {
    navigate("/home");
  }

  return (
    <section className="flex flex-1 items-center justify-center bg-stone-900">
      <LoginForm />
    </section>
  );
}

export default Login;
