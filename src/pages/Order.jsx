import { useState } from "react";

import OrderList from "@/features/order/OrderList";
import OrderMenu from "@/features/order/OrderMenu";

import TextMd from "@/ui/TextMd";

const menu = [
  {
    id: 0,
    name: "Todos",
  },
  {
    id: 1,
    name: "Lanches",
  },
  {
    id: 2,
    name: "Sobremesas",
  },
  {
    id: 3,
    name: "Bebidas",
  },
];

function Order() {
  const [activeTab, setActiveTab] = useState(menu[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  function handleTabChange(tabId) {
    setActiveTab(tabId);

    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }

  return (
    <section className="relative flex min-h-[calc(100dvh-112px)] bg-primary-50 px-5 py-10">
      <div className="flex w-full flex-col">
        <TextMd label="Cardápio" />
        <div className="flex flex-1 flex-col">
          <OrderMenu
            menu={menu}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <OrderList
            menu={menu}
            activeTab={activeTab}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}

export default Order;
