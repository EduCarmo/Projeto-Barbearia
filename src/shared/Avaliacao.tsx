import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface AvaliacaoProps {
  nota: number;
  quantidade: number;
}

export default function Avaliacao(props: AvaliacaoProps) {
  const { nota, quantidade } = props;

  const estrelas = Array.from({ length: 5 }, (_, index) => {
    const valor = index + 1;

    if (nota >= valor) {
      return <IconStarFilled key={index} stroke={18} />;
    } else if (nota > valor - 1) {
      return <IconStarHalfFilled key={index} stroke={18} />;
    } else {
      return <IconStarFilled key={index} stroke={18} />;
    }
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 text-yellow-400">{estrelas}</div>
      <span className="text-xs text-zinc-400">({quantidade})</span>
    </div>
  );
}
