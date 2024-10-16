import DifferentialDiinersCategories from "./DifferentialDiinersCategories";
import ShapeBG from "/shape-home.svg";
import DifferentialDiinersTextArea from "./DifferentialDiinersTextArea";

function DifferentialDiiners() {
  return (
    <section className="relative bg-primary-50 pb-12 pt-10 md:pb-20 lg:pb-28 xl:pb-32">
      <div className="flex flex-col px-5">
        <DifferentialDiinersCategories />
        <DifferentialDiinersTextArea />
      </div>
      <img src={ShapeBG} alt="Shape" className="absolute bottom-0" />
    </section>
  );
}

export default DifferentialDiiners;
