import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const paymentMethodsOptions = [
  {
    id: 1,
    label: "Cartão de crédito",
    value: "cartao-credito",
  },
  {
    id: 2,
    label: "Cartão de débito",
    value: "cartao-debito",
  },
  {
    id: 3,
    label: "Pix",
    value: "pix",
  },
  {
    id: 4,
    label: "Dinheiro",
    value: "dinheiro",
  },
];

const menuStyle = {
  "&.Mui-selected": {
    backgroundColor: "#ff9800",
    color: "#f8f8f8",
  },
};

const color = "#ff9800";

function PaymentMethod({ setPaymentMethod, paymentMethod }) {
  return (
    <FormControl className="w-full" size="small">
      <InputLabel
        id="paymentMethod-label"
        sx={{
          "&.Mui-focused": {
            color: color,
          },
        }}
      >
        Método de pagamento
      </InputLabel>
      <Select
        labelId="paymentMethod-label"
        id="paymentMethod"
        value={paymentMethod}
        label="Método de pagamento"
        onChange={(e) => setPaymentMethod(e.target.value)}
        sx={{
          color: "#555555",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: color,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9800", // cor da borda ao passar o mouse
          },
        }}
      >
        {paymentMethodsOptions.map((method) => (
          <MenuItem key={method.id} value={method.value} sx={menuStyle}>
            {method.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PaymentMethod;
