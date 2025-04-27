import Image from "next/image";
import Cabecalho from "../shared/Cabecalho";

export default function Slogan() {
  return (
    <div className="relative sm:h-[700px] h-[450px]:">
      <Image
        src="/banners/principal.webp"
        alt="Barbearia"
        fill
        className="object-cover"
      />
      <div
        className="
        flex flex-col items-center
        absolute top-0 left-0 w-full h-full
        bg-black/65
    "
      >
        <Cabecalho />
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="flex flex-col items-center">
            <span className="font-thin lg:text-5xl md:text-4xl sm:text-3xl text-2xl">Transformações</span>
            <span className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-black text-gradient">Lendárias</span>
          </h1>
          <p className="text-base sm:text-lg font-extralight">🤘 Seu estilo é o nosso rock! 🤘</p>
        </div>
      </div>
    </div>
  );
}
