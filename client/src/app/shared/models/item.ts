export interface SearchResult {
    author?:     Author;
    categories?: string[];
    items?:      ItemElement[];
}

export interface Author {
    name?:     string;
    lastname?: string;
}

export interface ItemElement {    
    address?: string;
    id?:            string;
    title?:         string;
    price?:         Price;
    picture?:       string;
    condition?:     string;
    free_shipping?: boolean;
    sold_quantity?: number;
    description?:   string;
    categories?: string[]
}

export interface Price {
    currency?: string;
    amount?:   number;
    decimals?: number;
}