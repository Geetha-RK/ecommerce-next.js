import { Product } from './product-data';
import Image from 'next/image';
import Link from 'next/link';
export default function ProductsList({ products }:{ products: Product[] }){
    return (
        <div>
            {products.map(product => (
                <Link key={product.id} href={'/products/'+ product.id}>
                    <Image src={'/' + product.imageURL} alt="Product-Image" width={150} height={150}></Image>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                </Link>
            ))}
        </div>
    )
}