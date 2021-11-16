export interface RecipientAge {
    id: any,
    customid: any,
    firstname: string,
    middlename: string,
    lastname: string,
    category: string,
    contactnum: string,
    email: string,
    address: string,
    age: string,
    gender: string
}
//All Vacinated with no age
export interface Recipient {
    id: any,
    customid:any,
    firstname: string,
    middlename: string,
    lastname: string,
    category: string,
    contactnum: string,
    email: string,
    address: string,
    birthday: string,
    gender: string
}
//Vaccine Brand
export interface Vaccine {
    id: any,
    vaccineName: string,
    stock: number,
    manufacturer: string,
    efficacyRate: number
}

//Vaccine Adminitrator
export interface VaccineAdmin {
    id: any,
    healthFacility: string,
    vaccinator: string,
    address: string
}

//Category
export interface Category {
    category: string
}
//Gender
export interface Gender {
    gender: string;
}
//Age
export interface Age {
    age: any;
}