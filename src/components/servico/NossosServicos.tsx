import servicos from "@/data/contants/servicos";
import ItemServico from "./ItemServico";
import Servico from "@/core/servico/Servico";

export default function NossosServicos() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {servicos.map((servico: Servico) => (
        <ItemServico key={servico.id} servico={servico} />
      ))}
    </div>
  );
}
