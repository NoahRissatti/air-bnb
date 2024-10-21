import { IPlace } from "../../types/IPlace";

export function createInitialPlace(): IPlace {
  return {
    typeId: 0,
    address: {
      cep: "",
      country: "",
      address: "",
      complement: "",
      neighborhood: "",
      city: "",
    },
    guests: 0,
    rooms: 0,
    beds: 0,
    amenities: [0],
    title: "",
    description: "",
    price: "",
  };
}
