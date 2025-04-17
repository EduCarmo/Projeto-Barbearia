import NossosServicos from "@/components/servico/NossosServicos";
import ItemServico from "../components/servico/ItemServico";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";


export default function Landing() {
  return (
   <div className="flex flex-col gap-10 container">
      <h1 className="text-6xl">Landing Page</h1>
      <NossosServicos />
      <NossosProfissionais />
   </div>
  );
}
