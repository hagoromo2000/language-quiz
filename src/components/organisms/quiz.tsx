type PropsType = {
  chinese?: string;
};

export const Quiz = (props: PropsType) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-2xl">このポケモンは?</div>
      <div className="text-5xl sm:text-6xl">{props.chinese}</div>
    </div>
  );
};
