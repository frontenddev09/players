import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoFootball } from "react-icons/io5";
import player from "../assets/player.png";

const PlayersListItem = ({ continent, name, country, onDelete }) => {
  let bgClass;

  switch (continent) {
    case "Europe":
      bgClass = "bg-gradient-to-r from-blue-500 to-red-500";
      break;
    case "Asia":
      bgClass = "bg-gradient-to-r from-green-500 to-red-500";
      break;
    case "Africa":
      bgClass = "bg-gradient-to-r from-yellow-500 to-red-500";
      break;
    case "America":
      bgClass = "bg-gradient-to-r from-cyan-500 to-red-500";
      break;

    default:
      break;
  }

  return (
    <div
      className={`bg-white p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative ${bgClass}`}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1">
          <IoFootball className="w-6 h-6" />
          <p className="font-bold text-xl">{name}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaFontAwesomeFlag className="w-6 h-6" />
          <p className="font-bold text-xl">{country}</p>
        </div>
      </div>

      <img src={player} alt="player" className="h-24 ml-auto" />

      <span
        onClick={onDelete}
        className="absolute -right-4 -top-4 bg-slate-300 rounded-full p-2 hover:bg-slate-400 transition-all"
        role="button"
      >
        <IoMdClose className="h-4 w-4" />
      </span>
    </div>
  );
};

export default PlayersListItem;
