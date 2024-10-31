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
};

export type IPlaceBack = {
  id?: number;
  typeId: number;
  address: IAddress;
  guests: number;
  rooms: number;
  beds: number;
  amenities: string[];
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

export const placesMock: IPlace[] = [
  {
    typeId: 1,
    address: {
      cep: "12345-678",
      country: "Brasil",
      address: "Rua das Flores, 123",
      complement: "Apto 101",
      neighborhood: "Centro",
      city: "São Paulo",
    },
    guests: 4,
    rooms: 2,
    beds: 2,
    amenities: [1, 2, 3],
    title: "Apartamento Moderno",
    description: "Um lindo apartamento no centro da cidade.",
    price: "R$250",
  },
  {
    typeId: 2,
    address: {
      cep: "56789-123",
      country: "Brasil",
      address: "Avenida Atlântica, 987",
      complement: "Cobertura",
      neighborhood: "Copacabana",
      city: "Rio de Janeiro",
    },
    guests: 6,
    rooms: 3,
    beds: 3,
    amenities: [1, 4, 5],
    title: "Cobertura com Vista para o Mar",
    description: "Espaçosa cobertura com vista incrível da praia.",
    price: "R$500",
  },
  {
    typeId: 3,
    address: {
      cep: "23456-789",
      country: "Brasil",
      address: "Praça da Sé, 456",
      complement: "Casa Térrea",
      neighborhood: "Sé",
      city: "São Paulo",
    },
    guests: 8,
    rooms: 4,
    beds: 4,
    amenities: [2, 6, 7],
    title: "Casa no Centro Histórico",
    description: "Casa grande e confortável perto das principais atrações.",
    price: "R$400",
  },
  {
    typeId: 4,
    address: {
      cep: "98765-432",
      country: "Brasil",
      address: "Estrada das Cachoeiras, 1000",
      neighborhood: "Zona Rural",
      city: "Paraty",
    },
    guests: 10,
    rooms: 5,
    beds: 5,
    amenities: [3, 8, 9],
    title: "Chalé nas Montanhas",
    description:
      "Chalé rústico em meio à natureza, com vista para as montanhas.",
    price: "R$350",
  },
  {
    typeId: 5,
    address: {
      cep: "34567-890",
      country: "Brasil",
      address: "Rua do Comércio, 789",
      complement: "Casa 2",
      neighborhood: "Bairro Novo",
      city: "Curitiba",
    },
    guests: 3,
    rooms: 1,
    beds: 1,
    amenities: [1, 10],
    title: "Casa Pequena e Aconchegante",
    description: "Uma casa perfeita para casais ou pequenas famílias.",
    price: "R$180",
  },
  {
    typeId: 6,
    address: {
      cep: "12345-987",
      country: "Brasil",
      address: "Largo do Arouche, 222",
      complement: "Flat 301",
      neighborhood: "República",
      city: "São Paulo",
    },
    guests: 2,
    rooms: 1,
    beds: 1,
    amenities: [2, 4, 8],
    title: "Flat no Centro com Vista Panorâmica",
    description: "Flat confortável em região central, perto do metrô.",
    price: "R$220",
  },
  {
    typeId: 7,
    address: {
      cep: "65432-109",
      country: "Brasil",
      address: "Avenida Paulista, 3000",
      complement: "Sala Comercial",
      neighborhood: "Jardins",
      city: "São Paulo",
    },
    guests: 12,
    rooms: 6,
    beds: 6,
    amenities: [1, 9],
    title: "Salão de Festas Moderno",
    description: "Espaço perfeito para eventos e celebrações.",
    price: "R$600",
  },
  {
    typeId: 8,
    address: {
      cep: "32145-678",
      country: "Brasil",
      address: "Rua das Palmeiras, 55",
      complement: "Casa Térrea",
      neighborhood: "Palmeiras",
      city: "Salvador",
    },
    guests: 5,
    rooms: 2,
    beds: 3,
    amenities: [3, 5, 7],
    title: "Casa com Piscina",
    description: "Casa confortável com piscina e jardim.",
    price: "R$300",
  },
  {
    typeId: 9,
    address: {
      cep: "11223-445",
      country: "Brasil",
      address: "Travessa dos Pescadores, 10",
      neighborhood: "Centro",
      city: "Florianópolis",
    },
    guests: 4,
    rooms: 2,
    beds: 2,
    amenities: [2, 6, 8],
    title: "Casa na Ilha",
    description: "Casa charmosa com vista para o mar, ideal para relaxar.",
    price: "R$280",
  },
  {
    typeId: 10,
    address: {
      cep: "67890-123",
      country: "Brasil",
      address: "Rua das Laranjeiras, 123",
      complement: "Apto 302",
      neighborhood: "Laranjeiras",
      city: "Rio de Janeiro",
    },
    guests: 3,
    rooms: 1,
    beds: 1,
    amenities: [1, 2, 4],
    title: "Apartamento Aconchegante",
    description: "Apartamento em bairro tranquilo e bem localizado.",
    price: "R$200",
  },
  {
    typeId: 11,
    address: {
      cep: "54321-987",
      country: "Brasil",
      address: "Avenida Beira-Mar, 100",
      complement: "Casa 1",
      neighborhood: "Praia Grande",
      city: "Fortaleza",
    },
    guests: 8,
    rooms: 4,
    beds: 4,
    amenities: [3, 7, 9],
    title: "Casa de Praia",
    description: "Casa à beira-mar com ampla varanda e churrasqueira.",
    price: "R$450",
  },
  {
    typeId: 12,
    address: {
      cep: "09876-543",
      country: "Brasil",
      address: "Rua do Sol, 50",
      neighborhood: "Centro",
      city: "Natal",
    },
    guests: 6,
    rooms: 3,
    beds: 3,
    amenities: [1, 5, 10],
    title: "Casa com Vista para o Mar",
    description:
      "Casa espaçosa com vista privilegiada do mar e ótima localização.",
    price: "R$380",
  },
];
