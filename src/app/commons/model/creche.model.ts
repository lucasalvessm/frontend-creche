import { Address } from './address.model';

export class Creche {
    id: number;
    activities: string;
    teachingMethod: string;
    fantasyName: string;
    openingHours: string;
    price: Number;
    cnpj: String;

    images: Array<{
        imageBase64: string
    }> = [];

    addressInfo: Address;

    public static fromForm(formValues, crecheImages): Creche {
        const creche = new Creche();
        creche.activities = formValues.activities;
        creche.teachingMethod = formValues.teachingMethod;
        creche.fantasyName = formValues.fantasyName;
        creche.openingHours = formValues.openingHours;
        creche.price = new Number(formValues.price);
        creche.images = crecheImages;
        creche.cnpj = formValues.cnpj;

        const address = new Address;
        address.address = formValues.address;
        address.city = formValues.city;
        address.neighborhood = formValues.neighborhood;

        creche.addressInfo = address;
        return creche;
    }
}