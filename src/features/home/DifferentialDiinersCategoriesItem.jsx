function DifferentialDiinersCategoriesItem({ image, label }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-full">
      <img src={image} alt={label} className="h-20 lg:h-24" />
      <p className="text-base font-bold tracking-wider">{label}</p>
    </div>
  );
}

export default DifferentialDiinersCategoriesItem;
