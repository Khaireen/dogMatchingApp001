import { User } from "./User";

export class DetailedUser extends User {
    firstName: string;
    surname: string;
    phoneNumber?: string;
    streetName: string;
    houseNumber: string;
    flatNumber?: string;
    city: string;
    zipCode: string;
    country: string
}