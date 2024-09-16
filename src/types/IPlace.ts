export type IPlace = {
  typeId: number;
  address: IAddress;
  guests: number;
  rooms: number;
  beds: number;
  amenities: [number];
  title: string;
  description: string;
  price: string;
};

export type IAddress = {
  cep: string;
  country: string;
  address: string;
  complement?: string;
  neighborhood?: string;
  city: string;
};
