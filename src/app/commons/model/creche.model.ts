import { Address } from './address.model';

export class Creche {
    id: number;
    activities: string;
    teachingMethod: string;
    fantasyName: string;
    openingHours: string;
    price: number;

    address: Address;
    
    public static fromForm(formValues, crecheImages): Creche {
        const creche = new Creche();
        creche.address = formValues.address;

        return creche;
    }
}