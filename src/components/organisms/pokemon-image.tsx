// import Image from "next/image";

// type PropsType = {
//   imageUrl: string;
//   japanese: string;
// };

// export const PokemonImage = (props: PropsType) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-xl mb-4">正解!</div>
//       <Image
//         src={props.imageUrl}
//         width={200}
//         height={200}
//         alt="正解のポケモン画像"
//         className="mb-4"
//       />
//       <div className="text-2xl">{props.japanese}</div>
//     </div>
//   );
// };

import Image from "next/image";

type PropsType = {
  imageUrl: string;
  japanese: string;
};

export const PokemonImage = (props: PropsType) => {
  return (
    <div className="flex flex-col items-center p-4 ">
      <div className="text-5xl mb-4 text-green-500 font-bold">正解!</div>
      <div className="mb-4 ">
        <Image
          src={props.imageUrl}
          width={200}
          height={200}
          alt="正解のポケモン画像"
        />
      </div>
      <div className="text-2xl text-gray-800 shadow-text">{props.japanese}</div>
    </div>
  );
};
