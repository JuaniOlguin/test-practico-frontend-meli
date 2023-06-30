export interface SearchResult {
    author:     Author;
    categories: string[];
    items:      ItemElement[];
}

export interface Author {
    name:     string;
    lastname: string;
}

export interface ItemElement {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    address: string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}