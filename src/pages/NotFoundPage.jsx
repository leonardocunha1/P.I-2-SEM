import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">Página não encontrada! 😥</h1>
      <Link className="italic underline" to="/home">
        Clique aqui para retornar a página principal
      </Link>
    </div>
  );
}

export default NotFoundPage;
