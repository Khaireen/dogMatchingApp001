import { Url } from "url";

export class Dog {
    dogName: string;
    kennelName: string;
    breed: string;
    color: string;
    sex: string;
    birthDate: string;
    healthInfo?: string;
    showTitles?: string;
    training?: string;
    additionalInfo?: string;
    dogWebsite?: Url;
    dogImage: File;

    constructor(values: Object = {}) {
        Object.assign (this, values)
    }
}