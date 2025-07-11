import { ICategory, IFormLable, IProduct } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export const productList: IProduct[] = [
    {
        id: uuidv4(),
        title: 'Background wep',
        descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ullam commodi et voluptatem molestiae culpa eius magni molestias asperiores.',
        imageURL: "https://picsum.photos/id/15/200/300",
        price: '500000',
        colors: ['#ff7f50', '#a52a2a', '#ffe4c4'],
        category: {
            name: 'Background',
            imgURL: "https://picsum.photos/id/15/200/300",
        },
    },
    {
        id: uuidv4(),
        title: 'Car',
        descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt ullam commodi et voluptatem molestiae culpa eius magni molestias asperiores.',
        imageURL: "https://picsum.photos/id/10/200/300",
        price: '500000',
        colors: ['#ff7f50', '#A2D5C6', '#9929EA'],
        category: {
            name: 'cars',
            imgURL: "https://picsum.photos/id/10/200/300",
        },
    },
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
    '#EEEEEE',
    '#000000',
    '#CC66DA',
    '#9929EA',
    '#FAEB92',
    '#CFFFE2',
    '#A2D5C6',
    '#F6F6F6',
]

export const category: ICategory[] = [
    {
        id: uuidv4(),
        name: 'Wade Cooper',
        imgURL:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Arlene Mccoy',
        imgURL:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Devon Webb',
        imgURL:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Tom Cook',
        imgURL:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Tanya Fox',
        imgURL:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Hellen Schmidt',
        imgURL:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Caroline Schultz',
        imgURL:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Mason Heaney',
        imgURL:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Claudie Smitham',
        imgURL:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuidv4(),
        name: 'Emil Schaefer',
        imgURL:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]