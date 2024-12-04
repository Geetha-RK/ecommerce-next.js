import { Product } from './product-data';
import Image from 'next/image';
export default function ProductsList({ products }:{ products: Product[] }){
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <Image src={'/' + product.imageURL} alt="Product-Image" width={150} height={150}></Image>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}