import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useCreateUser from "./useCreateUser";

// Defina o esquema Zod para o formulário de registro
const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Nome deve ter no mínimo 2 caracteres" })
      .max(50, { message: "Nome muito longo" }),
    lastName: z
      .string()
      .min(2, { message: "Sobrenome deve ter no mínimo 2 caracteres" })
      .max(50, { message: "Sobrenome muito longo" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z
      .string()
      .min(10, { message: "Telefone deve ter no mínimo 10 dígitos" })
      .max(11, { message: "Telefone deve ter no máximo 11 dígitos" })
      .regex(/^[0-9]+$/, { message: "Telefone deve conter apenas números" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"], // Define onde a mensagem de erro será exibida
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

function RegisterForm() {
  const { createUser, isPending } = useCreateUser();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = ({ firstName, lastName, email, phone, password }) => {
    createUser(
      {
        nome: `${firstName} ${lastName}`,
        email,
        senha: password,
        telefone: phone,
      },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  return (
    <form
      className="mx-3 mt-4 flex w-full max-w-xl flex-col gap-4 rounded-lg bg-primary-50 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center text-2xl font-bold uppercase tracking-widest">
        Registrar
      </h3>

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome"
            variant="outlined"
            fullWidth
            error={!!errors.firstName} // Definir erro com base no estado do formulário
            helperText={
              errors.firstName ? errors.firstName.message : "Digite seu nome"
            }
            size="small"
            sx={styleTextField}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Sobrenome"
            variant="outlined"
            fullWidth
            error={!!errors.lastName} // Definir erro com base no estado do formulário
            helperText={
              errors.lastName ? errors.lastName.message : "Digite seu sobrenome"
            }
            size="small"
            sx={styleTextField}
          />
        )}
      />

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
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Telefone"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 11 }} // Limita a quantidade de caracteres no input
            error={!!errors.phone} // Definir erro com base no estado do formulário
            helperText={
              errors.phone
                ? errors.phone.message
                : "Digite seu telefone com DDD"
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

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirmar Senha"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.confirmPassword} // Definir erro com base no estado do formulário
            helperText={
              errors.confirmPassword
                ? errors.confirmPassword.message
                : "Confirme sua senha"
            }
            size="small"
            sx={styleTextField}
          />
        )}
      />

      <Link to="/login" className="text-center text-sm text-stone-800">
        Já tem uma conta? <span className="underline">Faça login</span>
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
          "Criar Conta"
        )}
      </Button>
    </form>
  );
}

export default RegisterForm;
