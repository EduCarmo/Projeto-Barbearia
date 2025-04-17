import profissionais from "@/data/contants/profissional";
import ItemProfissional from "./ItemProfissional";

export default function NossosProfissionais() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {profissionais.map((profissional) => (
        <ItemProfissional key={profissional.id} profissional={profissional} />
      ))}
    </div>
  );
}
