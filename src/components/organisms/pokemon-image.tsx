import Image from "next/image";

type PropsType = {
  imageUrl: string;
  japanese: string;
};

export const PokemonImage = (props: PropsType) => {
  return (
    <div>
      <div className="text-xl">正解!</div>
      <Image
        src={props.imageUrl}
        width={200}
        height={200}
        alt="正解のポケモン画像"
      />
      <div className="text-2xl">{props.japanese}</div>
    </div>
  );
};
