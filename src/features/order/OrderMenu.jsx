import ListButton from "@/ui/ListButton";

function OrderMenu({ menu, onTabChange, activeTab }) {
  return (
    <aside>
      <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-5">
        {menu.map((item) => (
          <ListButton
            key={item.id}
            item={item}
            activeTab={activeTab}
            onClick={() => onTabChange(item.id)}
          />
        ))}
      </ul>
    </aside>
  );
}

export default OrderMenu;
