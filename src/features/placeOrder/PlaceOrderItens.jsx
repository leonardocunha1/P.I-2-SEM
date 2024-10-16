import fakeDB from "../../../fakedb.json";

import Grid from "@mui/material/Unstable_Grid2";
import OrderPagination from "./PlaceOrderPagination";
import PlaceOrderItem from "./PlaceOrderItem";

// No componente OrdersMenu, poderia utilizar o useSearchParams para settar o valor da categoria e aqui no OrderList fazer um get, porém o intuito aqui é deixar o projeto mais simples e compreensível para todos.
// const burgers = fakeDB.filter((item) => item.category === "Burger");
// const sobremesas = fakeDB.filter((item) => item.category === "Sobremesa");
// const bebidas = fakeDB.filter((item) => item.category === "Bebida");
// const listOrdered = [...burgers, ...sobremesas, ...bebidas];

function PlaceOrderItens({
  activeTab,
  currentPage,
  setCurrentPage,
  tabOptions,
}) {
  // Filtrando os itens de acordo com a categoria
  let listActive;

  if (activeTab === tabOptions[0].id) {
    const burgers = fakeDB.filter((item) => item.category === "Burger");
    const sobremesas = fakeDB.filter((item) => item.category === "Sobremesa");
    const bebidas = fakeDB.filter((item) => item.category === "Bebida");
    listActive = [...burgers, ...sobremesas, ...bebidas];
  } else if (activeTab === tabOptions[1].id) {
    listActive = fakeDB.filter((item) => item.category === "Burger");
  } else if (activeTab === tabOptions[2].id) {
    listActive = fakeDB.filter((item) => item.category === "Sobremesa");
  } else if (activeTab === tabOptions[3].id) {
    listActive = fakeDB.filter((item) => item.category === "Bebida");
  }

  // Paginação
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
            <PlaceOrderItem key={item.id} item={item} />
          ))}
        </Grid>
      </ul>
      {totalPages > 1 && (
        <OrderPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default PlaceOrderItens;
