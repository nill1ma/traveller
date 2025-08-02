import type { Status } from "./status";

export interface Travel {
    id: string;
    name: string;
    status: Status;
    start_date: Date;
    end_date: Date;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    location: string;
    category: Category;
}

export type TableTravel = Pick<Travel, 'id' | 'location' | 'status' | 'start_date' | 'category'> & {
  end_date?: Date;
}
export type FilterTravel = Pick<Travel, 'location'> & {status: string, category: string}
export type Category = "vacation" | "business" | "adventure" | "culture" | "long_stay" | "short_stay";
export enum CategoryEnum {
    vacation = "Vacation",
    business = "Business",
    adventure = "Adventure",
    culture = "Culture",
    long_stay = "Long Stay",
    short_stay = "Short Stay",
}