import Grid from "@mui/material/Unstable_Grid2";
import OrderPagination from "./PlaceOrderPagination";
import PlaceOrderItem from "./PlaceOrderItem";

function PlaceOrderItens({
  data,
  activeTab,
  currentPage,
  setCurrentPage,
  tabOptions,
}) {
  // Filtrando os itens de acordo com a categoria
  let listActive;

  if (activeTab === tabOptions[0].id) {
    const burgers = data.filter((item) => item.classe === "Burger");
    const sobremesas = data.filter((item) => item.classe === "Sobremesa");
    const bebidas = data.filter((item) => item.classe === "Bebida");
    listActive = [...burgers, ...sobremesas, ...bebidas];
  } else if (activeTab === tabOptions[1].id) {
    listActive = data.filter((item) => item.classe === "Burger");
  } else if (activeTab === tabOptions[2].id) {
    listActive = data.filter((item) => item.classe === "Sobremesa");
  } else if (activeTab === tabOptions[3].id) {
    listActive = data.filter((item) => item.classe === "Bebida");
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
