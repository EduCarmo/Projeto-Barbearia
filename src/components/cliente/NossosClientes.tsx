import clientes from "@/data/contants/clientes";
import TituloSecao from "@/components/shared/TituloSecao";
import ItemCliente from "./ItemCliente";
import { LayoutGrid } from "../ui/layout-grid";

export default function NossosClientes() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2'];

  const cards = clientes.map((cliente, indice) => {
    return {
      id: cliente.id,
      content: <ItemCliente nome={cliente.nome} testemunho={cliente.testemunho} />,
      thumbnail: cliente.imagemURL,
      className: classes[indice]  
    }
  });

  return (
    <div className="flex flex-col gap-y-16">
      <TituloSecao
        tag="Clientes"
        principal="Quem manda Aqui"
        secundario="Nossos clientes são os chefes! eles mandam, desmandam e ainda saem com estilo de rockstar!"
      />
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}
