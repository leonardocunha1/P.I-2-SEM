import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const menuStyle = {
  "&.Mui-selected": {
    backgroundColor: "#ec6c10",
    color: "#f8f8f8",
  },
};

const color = "#F97316";

function PaymentMethod({ setPaymentMethod, paymentMethod }) {
  return (
    <>
      <FormControl className="w-full" size="small">
        <InputLabel
          id="paymentMethod-label"
          sx={{
            "&.Mui-focused": {
              color, // Altera a cor do label ao focar
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
            color: "#555555", // Altera a cor do texto do select
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: color, // Altera a cor da borda ao focar
            },
          }}
        >
          <MenuItem value="cartao-credito" sx={menuStyle}>
            Cartão de crédito
          </MenuItem>
          <MenuItem value="cartao-debito" sx={menuStyle}>
            Cartão de débito
          </MenuItem>
          <MenuItem value="pix" sx={menuStyle}>
            PIX
          </MenuItem>
          <MenuItem value="dinheiro" sx={menuStyle}>
            Dinheiro
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default PaymentMethod;
