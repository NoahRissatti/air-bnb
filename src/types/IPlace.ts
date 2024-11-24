export type IPlace = {
  id?: number;
  typeId: number;
  address: IAddress;
  guests: number;
  rooms: number;
  beds: number;
  amenities: number[];
  title: string;
  description: string;
  price: string;
  image: string;
};

export type IAddress = {
  cep: string;
  country: string;
  address: string;
  complement?: string;
  neighborhood?: string;
  city: string;
};
