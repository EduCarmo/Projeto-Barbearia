import NossosServicos from "@/components/servico/NossosServicos";
import ItemServico from "../components/servico/ItemServico";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import SecaoBackground from "@/components/shared/SecaoBackground";
import Rodape from "@/components/shared/Rodape";
import Cabecalho from "@/components/shared/Cabecalho";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Cabecalho />
      <div className="container py-10">
        <h1 className="text-6xl">Landing Page</h1>
      </div>
      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </SecaoBackground>
      <SecaoBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </SecaoBackground>
      <Rodape />
    </div>
  );
}
