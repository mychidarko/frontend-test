export interface StoreData {
    hustle: {
        name: string;
        shop_logo: string;
        shop_banner: string;
    };
    sort_by: string[];
    categories: string[];
    products: Product[];
};

export interface Product {
    product_image: string;
    name: string;
    price: string;
}