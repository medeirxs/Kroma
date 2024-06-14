type DataProps = {
  name: string
  description: string
  creator: string
  bg: string
  icon: string
};

export const PackContainer: React.FC<DataProps> = ({ name, description, creator, bg, icon }) => {
  return (
    <div className="w-56 h-72 bg-black rounded-xl drop-shadow-xl hover:scale-105 transition-all cursor-pointer">
      <img src={bg} className="w-full h-full opacity-40 rounded-xl"/>

      <div className="absolute -mt-72 z-10 w-56 h-72 p-3 flex flex-col justify-between">
        <div>
          <p className="text-2xl tracking-tight font-semibold">{name}</p>
          <p className="text-sm -mt-2">{description}</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src={icon} width="20px" className=" rounded-full"/>
          <p className="flex justify-end text-sm">{creator}</p>
        </div>
      </div>
    </div>
  );
};