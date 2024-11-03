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

const override = {
  display: "block",
  margin: "0 auto",
};

// Estilizando o cabeçalho da tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[200],
}));

// Estilizando as linhas da tabela
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

function Account() {
  const { data, isLoading } = useAccount();
  const { isLogged, user } = useUser();
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

  return (
    <div className="mx-auto mt-10 w-full max-w-5xl space-y-3 px-5 lg:px-0">
      <p className="text-center sm:text-left">
        Olá,{" "}
        <span className="text-xl font-bold">
          {user.nome.split(" ").slice(0, 2).join(" ")}
        </span>{" "}
      </p>
      <p className="text-center text-4xl font-bold">Seus Pedidos</p>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="styled table">
          <TableHead>
            <TableRow>
              <StyledTableCell>N° Pedido</StyledTableCell>
              <StyledTableCell align="right">Tipo de Pagamento</StyledTableCell>
              <StyledTableCell align="right">Método envio</StyledTableCell>
              <StyledTableCell align="right">Valor Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">
                  {{
                    "cartao-debito": "Cartão de Débito",
                    "cartao-credito": "Cartão de Crédito",
                    pix: "Pix",
                    dinheiro: "Dinheiro",
                  }[row.pagamento] || ""}
                </TableCell>
                <TableCell align="right">
                  {{
                    0: "Retirada",
                    1: "Delivery",
                  }[row.entrega] || ""}
                </TableCell>
                <TableCell align="right">{formatCurrency(row.total)}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Account;
