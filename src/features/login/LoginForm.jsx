import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

// Defina o esquema Zod para o formulário de login
const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

// Configurações de estilo para o ClipLoader
const override = {
  display: "block",
  margin: "0 auto",
};

// Cor principal do tema
const color = "#e0782f";

// Estilos para o TextField
const styleTextField = {
  "& label.Mui-focused": {
    color: color, // Cor do label quando focado
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: color, // Cor da borda ao passar o mouse
    },
    "&.Mui-focused fieldset": {
      borderColor: color, // Cor da borda quando focado
    },
  },
};

function LoginForm() {
  const { login, isPending } = useLogin();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Função que é chamada quando o formulário de login é submetido
  const onSubmit = ({ email, password }) => {
    login({
      email,
      senha: password,
    });
  };

  return (
    <form
      className="mx-3 mt-4 flex w-full max-w-xl flex-col gap-4 rounded-lg bg-primary-50 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center text-2xl font-bold uppercase tracking-widest">
        Login
      </h3>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="E-mail"
            variant="outlined"
            fullWidth
            error={!!errors.email} // Definir erro com base no estado do formulário
            helperText={
              errors.email ? errors.email.message : "Digite seu e-mail"
            }
            size="small"
            sx={styleTextField}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password} // Definir erro com base no estado do formulário
            helperText={
              errors.password ? errors.password.message : "Digite sua senha"
            }
            size="small"
            sx={styleTextField}
          />
        )}
      />

      <Link to="/register" className="text-center text-sm text-stone-800">
        Não tem uma conta? <span className="underline">Registre-se</span>
      </Link>

      <Button
        variant="contained"
        size="small"
        type="submit"
        sx={{
          backgroundColor: "#e0782f",
          color: "#1a1a1a",
          fontWeight: "bold",
          width: "100%",
          fontFamily: "Calistoga",
          letterSpacing: "2px",
          "&:hover": {
            backgroundColor: "#d16025",
            color: "#fdf7ef",
          },
        }}
      >
        {isPending ? (
          <ClipLoader color="#fdf7ef" size={20} cssOverride={override} />
        ) : (
          "Entrar"
        )}
      </Button>
    </form>
  );
}

export default LoginForm;
