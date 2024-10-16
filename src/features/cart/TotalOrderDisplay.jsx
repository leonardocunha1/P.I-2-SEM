import { formatCurrency } from "@/utils/helpers";

function TotalOrderDisplay({ totalOrder, isDelivery, valorEntrega }) {
  const totalWithDelivery = isDelivery ? totalOrder + valorEntrega : totalOrder;
  console.log(totalWithDelivery);

  return (
    <div className="mt-2 flex items-center justify-end gap-2">
      <p>Total:</p>
      <p className="text-base font-bold">{formatCurrency(totalWithDelivery)}</p>
    </div>
  );
}

export default TotalOrderDisplay;
