import { ICategory, IFormLable, IProduct } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';
import adidasIMG from '../assets/adidas.png'
import carsIMG from '../assets/cars.jpg'
import PCIMG from '../assets/pc desktop.jpg'
import nikeIMG from '../assets/images.png'
import phoneIMG from '../assets/phone.webp'
import shoesIMG from '../assets/shoes.jpg'

export const productList: IProduct[] = [
    // {
    //     id: uuidv4(),
    //     title: 'Background wep',
    //     descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ullam commodi et voluptatem molestiae culpa eius magni molestias asperiores.',
    //     imageURL: "https://picsum.photos/id/15/200/300",
    //     price: '500000',
    //     colors: ['#ff7f50', '#a52a2a', '#ffe4c4'],
    //     category: {
    //         name: 'Background',
    //         imgURL: "https://unsplash.com/photos/orange-lamborghini-car-oUBjd22gF6w",
    //     },
    // },
    // {
    //     id: uuidv4(),
    //     title: 'Car',
    //     descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ullam commodi et voluptatem molestiae culpa eius magni molestias asperiores.',
    //     imageURL: "https://picsum.photos/id/10/200/300",
    //     price: '500000',
    //     colors: ['#ff7f50', '#A2D5C6', '#9929EA'],
    //     category: {
    //         name: 'Cars',
    //         imgURL: carsIMG,
    //     },
    // },
]

export const formInputList: IFormLable[] = [
    {
        id: 'title',
        name: 'title',
        lable: 'Product Name',
        type: 'text',
    },
    {
        id: 'descrption',
        name: 'descrption',
        lable: 'Product Descrption',
        type: 'text',
    },
    {
        id: 'img',
        name: 'imageURL',
        lable: 'Product Image URL',
        type: 'text',
    },
    {
        id: 'price',
        name: 'price',
        lable: 'Product Price',
        type: 'number',
    },
]

export const colors: string[] = [
    '#201E43',
    '#134B70',
    '#508C9B',
    '#000000',
    '#CC66DA',
    '#9929EA',
    '#FAEB92',
    '#CFFFE2',
    '#A2D5C6',
    '#898AC4',
    '#A2AADB',
    '#3674B5',
    '#578FCA',
    '#FF4F0F',
    '#FFA673',
]

export const category: ICategory[] = [
    {
        id: uuidv4(),
        name: 'Adidas',
        imgURL: adidasIMG,
    },
    {
        id: uuidv4(),
        name: 'Cars',
        imgURL: carsIMG,
    },
    {
        id: uuidv4(),
        name: 'PC',
        imgURL: PCIMG,
    },
    {
        id: uuidv4(),
        name: 'Nike',
        imgURL: nikeIMG,
    },
    {
        id: uuidv4(),
        name: 'Phones',
        imgURL: phoneIMG,
    },
    {
        id: uuidv4(),
        name: 'Shoes',
        imgURL: shoesIMG,
    },

]