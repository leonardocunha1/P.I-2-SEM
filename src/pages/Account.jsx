import { useUser } from "@/contexts/UserContext";
import useAccount from "@/features/account/useAccount";
import { formatCurrency } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUser } from "@/features/account/useUpdateUser";
import { useDeleteUser } from "@/features/account/useDeleteUser"; // Importe o hook de exclusão de usuário

const override = {
  display: "block",
  margin: "0 auto",
};

// Estilizando o cabeçalho e as linhas da tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[200],
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

// Schema para validação de formulário com Zod
const userSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  nome: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
  telefone: z.string().min(10, "O telefone deve ter no mínimo 10 dígitos"),
  senha_atual: z.string(),
  senha_nova: z.string(),
});

function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { data, isLoading } = useAccount();
  console.log(data);
  const { isLogged, user } = useUser();
  const { updateUser, isPending: isPendingUpdate } = useUpdateUser();
  const { deleteUser, isDeleting } = useDeleteUser(); // useDeleteUser para exclusão de conta
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: user,
  });

  const deleteForm = useForm({
    defaultValues: { senha_atual: "" },
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  const onSubmit = (formData) => {
    updateUser(formData);
  };

  const handleDeleteAccount = (data) => {
    deleteUser(data.senha_atual);
  };

  const handleChangeIsOpen = () => setIsOpen(!isOpen);

  const handleChangeIsOpenDelete = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

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

  return (
    <div className="mx-auto mt-10 w-full max-w-5xl space-y-3 px-5 lg:px-0">
      <p className="text-center sm:text-left">
        Olá,{" "}
        <span className="text-xl font-bold">
          {user.nome.split(" ").slice(0, 2).join(" ")}
        </span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleChangeIsOpen}
          className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Editar Dados
        </button>
        <button
          onClick={handleChangeIsOpenDelete}
          className="mb-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Excluir Conta
        </button>
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-md bg-gray-100 p-6 shadow-md"
        >
          {/* Campos do formulário para atualização de dados */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              {...register("nome")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.nome && (
              <span className="text-sm text-red-500">
                {errors.nome.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              {...register("telefone")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.telefone && (
              <span className="text-sm text-red-500">
                {errors.telefone.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha atual
            </label>
            <input
              type="password"
              {...register("senha_atual")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.senha_atual && (
              <span className="text-sm text-red-500">
                {errors.senha_atual.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nova senha
            </label>
            <input
              type="password"
              {...register("senha_nova")}
              className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.senha_nova && (
              <span className="text-sm text-red-500">
                {errors.senha_nova.message}
              </span>
            )}
          </div>

          <button
            disabled={isPendingUpdate}
            type="submit"
            className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Salvar Alterações
          </button>
        </form>
      )}

      {/* Seção para deletar conta */}
      {isDeleteOpen && (
        <div className="mt-10 space-y-4 rounded-md bg-red-100 p-6 shadow-md">
          <h2 className="text-xl font-bold text-red-600">Excluir Conta</h2>
          <form
            onSubmit={deleteForm.handleSubmit(handleDeleteAccount)}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha Atual
              </label>
              <input
                type="password"
                {...deleteForm.register("senha_atual")}
                className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isDeleting}
              className="w-full rounded bg-red-500 py-2 text-white hover:bg-red-600"
            >
              {isDeleting ? "Excluindo..." : "Excluir Conta"}
            </button>
          </form>
        </div>
      )}

      {data.length === 0 ? (
        <p className="text-center font-bold">Você ainda não realizou pedidos</p>
      ) : (
        <>
          <p className="text-center text-4xl font-bold">Seus Pedidos</p>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: 3, borderRadius: 2 }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="styled table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>N° Pedido</StyledTableCell>
                  <StyledTableCell align="right">
                    Tipo de Pagamento
                  </StyledTableCell>
                  <StyledTableCell align="right">Método envio</StyledTableCell>
                  <StyledTableCell align="right">Valor Total</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">
                      {row.pagamento === "cartao-debito" ||
                      row.pagamento === "cartao-credito"
                        ? "Cartão"
                        : row.pagamento === "pix"
                          ? "Pix"
                          : "Dinheiro"}
                    </TableCell>
                    <TableCell align="right">
                      {row.entrega === 0 ? "Retirada" : "Delivery"}
                    </TableCell>
                    <TableCell align="right">
                      {formatCurrency(row.total)}
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default Account;
