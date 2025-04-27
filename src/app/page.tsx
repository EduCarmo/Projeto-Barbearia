import NossosServicos from "@/components/servico/NossosServicos";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import SecaoBackground from "@/components/shared/SecaoBackground";
import Rodape from "@/components/shared/Rodape";
import Slogan from "@/components/leading/Slogan";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Slogan />
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
