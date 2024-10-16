import { motion } from "framer-motion";

function TabItem({ onClick, activeTab, item }) {
  return (
    <li
      key={item.id}
      onClick={onClick}
      className={`${activeTab === item.id ? "text-stone-900" : "text-primary-500"} relative flex px-5 py-2 text-center font-bold sm:text-start`}
    >
      {item.id === activeTab ? (
        <motion.div
          className="absolute inset-0 z-0 flex rounded-lg bg-primary-600"
          layoutId="activeTab"
        />
      ) : null}

      <p
        className={`relative z-10 flex-1 rounded-full duration-300 hover:cursor-pointer sm:border-orange-500`}
      >
        {item.name}
      </p>
    </li>
  );
}

export default TabItem;
