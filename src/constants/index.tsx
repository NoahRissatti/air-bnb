import { FaHome, FaBuilding, FaHotel, FaCaravan } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import { GiIsland, GiFarmTractor } from "react-icons/gi"; // ícones de ilhas, fazendas e microcasas

export const typeOfPlaceData = [
  {
    id: 1,
    title: "Casa",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Apartamento",
    icon: FaBuilding,
  },
  {
    id: 3,
    title: "Pousada",
    icon: FaHotel,
  },
  {
    id: 4,
    title: "Barco",
    icon: FaSailboat,
  },
  {
    id: 5,
    title: "Castelo",
    icon: SiFarcaster,
  },
  {
    id: 6,
    title: "Ilha",
    icon: GiIsland,
  },
  {
    id: 7,
    title: "Fazenda",
    icon: GiFarmTractor,
  },
  {
    id: 8,
    title: "Microcasa",
    icon: FaCaravan,
  },
];
