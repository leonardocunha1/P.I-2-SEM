import fakeDB from "../../../fakedb.json";
import Grid from "@mui/material/Unstable_Grid2";
import { MdAddShoppingCart } from "react-icons/md";
import OrderPagination from "./OrderPagination";
import { formatCurrency } from "@/utils/helpers";

// No componente OrdersMenu, poderia utilizar o useSearchParams para settar o valor da categoria e aqui no OrderList fazer um get, porém o intuito aqui é deixar o projeto mais simples e compreensível para todos.
const burgers = fakeDB.filter((item) => item.category === "Burger");
const sobremesas = fakeDB.filter((item) => item.category === "Sobremesa");
const bebidas = fakeDB.filter((item) => item.category === "Bebida");
const listOrdered = [...burgers, ...sobremesas, ...bebidas];

function OrderList({ activeTab, currentPage, setCurrentPage }) {
  let listActive;

  if (activeTab === 0) {
    listActive = listOrdered;
  } else if (activeTab === 1) {
    listActive = burgers;
  } else if (activeTab === 2) {
    listActive = sobremesas;
  } else if (activeTab === 3) {
    listActive = bebidas;
  }

  const itemsPerPage = 8;
  const totalPages = Math.ceil(listActive.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = listActive.slice(startIndex, endIndex);

  return (
    <div className="mx-auto mt-5 flex h-full w-full max-w-5xl flex-col">
      <ul>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        >
          {currentItems.map((item) => (
            <Grid
              key={item.id}
              xs={4}
              sm={4}
              md={4}
              lg={4}
              className="flex justify-center"
            >
              <li className="flex w-full flex-col items-center rounded-lg border-b border-gray-200 p-3 pt-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-full max-w-full rounded-xl object-contain"
                />
                <div className="mb-5 mt-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="mt-auto flex gap-2">
                  <p className="mt-2 font-semibold text-stone-900">
                    {formatCurrency(item.price[0])}
                  </p>
                  <button className="flex w-36 items-center justify-center gap-2 rounded-full border border-stone-400 px-3 py-1 duration-200 hover:bg-stone-400">
                    <MdAddShoppingCart className="h-4 w-4" />
                    <p>Add to cart</p>
                  </button>
                </div>
              </li>
            </Grid>
          ))}
        </Grid>
      </ul>
      <OrderPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default OrderList;
