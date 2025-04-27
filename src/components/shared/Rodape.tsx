import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="container flex flex-col bg-black py-10">
      <div className="">
        <Logo />
      </div>
      <div className="flex justify-between text-zinc-400">
        <div className="flex gap-2">
            <IconBrandYoutube size={28} stroke={1}/>
            <IconBrandInstagram size={28} stroke={1}/>
            <IconBrandFacebook size={28} stroke={1}/>
            <IconBrandLinkedin size={28} stroke={1}/>
        </div>
        <div className="flex gap-1.5">
            <span>Feito com</span>
            <span>🪓</span>
            <span>em {new Date().getFullYear()}</span>
            <span>- Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
