export interface Product {
    id:string;
    imageURL:string;
    name:string;
    description:string;
    price:number;
}
//Array of four products
export const products: Product[] = [{
    id:'123',
    name:'Hat',
    imageURL:'hat.jpg',
    description : 'Summer hat',
    price:16,
},{
    id:'234',
    name:'Jacket',
    imageURL:'jacket.jpg',
    description:'Jacktet womens',
    price:35,
},{
    id:'345',
    name:'tshirt',
    imageURL:'tshirt.jpg',
    description:'tshirt description',
    price:20,
},{
    id:'456',
    name:'handbag',
    imageURL:'handbag.jpg',
    description:'handbag',
    price:40,
}]