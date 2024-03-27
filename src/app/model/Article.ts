export class Article {
    id: number;
    vendeur: string;
    nom: string;
    note: number;
    stock: number;
    description: string;
    prix: number;

    constructor(
        id: number,
        vendeur: string,
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
export const emptyArticle: Article = {
    id: -1,
    vendeur: "",
    nom: "",
    note: -1,
    stock: -1,
    description: "",
    prix: -1
} 