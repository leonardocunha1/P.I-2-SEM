import TabItem from "@/ui/TabItem";

function PlaceOrderTabCategory({ tabOptions, onTabChange, activeTab }) {
  return (
    <aside>
      <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-5">
        {tabOptions.map((item) => (
          <TabItem
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

export default PlaceOrderTabCategory;
