export interface IShoppingCart {
    userId: number;
    itemId: number;
    productName: string;
    description: string;
    price: number;
    quantity: string;
    edit: boolean;
    deleted: boolean;
}