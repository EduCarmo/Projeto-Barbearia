import servicos from "@/data/contants/servicos";
import ItemServico from "./ItemServico";
import Servico from "@/core/servico/Servico";
import TituloSecao from "@/components/shared/TituloSecao";

export default function NossosServicos() {
  return (
    <div className="flex flex-col gap-y-16">
      <TituloSecao
        tag="Serviços"
        principal="Do Classico ao Rock"
        secundario="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao de rock pesado"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {servicos.map((servico: Servico) => (
          <ItemServico key={servico.id} servico={servico} />
        ))}
      </div>
    </div>
  );
}
