import { ProductType } from "../type";

export interface IProduct {
    id?: string | undefined;
    title: string;
    descrption: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imgURL: string;
    }
};

export interface IFormLable {
    id: string;
    name: ProductType;
    lable: string;
    type: string;
}

export interface ICategory {
    id:string,
    name:string,
    imgURL:string
}