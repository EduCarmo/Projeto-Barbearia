import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="container flex flex-col bg-black py-10 text-zinc-400 gap-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center gap-5 md:gap-0  md:text-left">
        <Logo />
        <div className="flex flex-col gap-1">
            <span className="font-bold text-2xl text-zinc-200 pb-2">Sobre</span>
            <span className="text-sm">Nossa história</span>
            <span className="text-sm">Política de Privacidade</span>
            <span className="text-sm">Termos de uso</span>
        </div>
        <div className="flex flex-col gap-1 ">
            <span className="font-bold text-2xl text-zinc-200 pb-2">Contato</span>
            <span className="text-sm">suporte@barbabrutal.app</span>
            <div className="text-sm flex items-center gap-2 justify-center md:justify-start">
                <IconBrandWhatsapp size={20} className="text-green-500"/>
                <span>WhatsApp</span>
            </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between ">
        <div className="flex gap-2">
          <IconBrandYoutube size={28} stroke={1} />
          <IconBrandInstagram size={28} stroke={1} />
          <IconBrandFacebook size={28} stroke={1} />
          <IconBrandLinkedin size={28} stroke={1} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1.5">
          <div className="flex gap-1.5">
            <span>Feito com</span>
            <span>🪓</span>
            <span>em {new Date().getFullYear() }</span>
          </div>
          <span className="hidden md:inline-block"> - </span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
