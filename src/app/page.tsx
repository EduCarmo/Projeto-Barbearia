import NossosServicos from "@/components/servico/NossosServicos";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import SecaoBackground from "@/components/shared/SecaoBackground";
import Rodape from "@/components/shared/Rodape";
import Slogan from "@/components/leading/Slogan";
import NossosClientes from "@/components/cliente/NossosClientes";

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
      <SecaoBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </SecaoBackground>
      <Rodape />
    </div>
  );
}
