import { User } from "./User";

export class Article {
    id: number;
    vendeur: User;
    nom: string;
    note: number;
    stock: number;
    description: string;
    prix: number;

    constructor(
        id: number,
        vendeur: User,
        nom: string,
        note: number,
        stock: number,
        description: string,
        prix: number
    ) {
        this.id = id
        this.vendeur = vendeur
        this.nom = nom
        this.note = note
        this.stock = stock
        this.description = description
        this.prix = prix
    }
}