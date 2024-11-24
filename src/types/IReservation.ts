import { IPlace } from "./IPlace";

export type IReservation = {
  place: IPlace;
  guests: number;
  startDate: string;
  endDate: string;
  price: number;
};
