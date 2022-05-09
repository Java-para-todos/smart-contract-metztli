 import { Product, productsStorage } from './model';
 import { context, ContractPromiseBatch } from "near-sdk-as";



// @Param productID: Is the ID of product that you want to buy
export function buyProduct(productId: string): void {
    const product = getProduct(productId); //Get the product
    if (product == null) { //Verificate if the product exist
        throw new Error("Producto No Encontrado"); //Message Error
    }
    if (product.price.toString() != context.attachedDeposit.toString()) { //Verify if the Pay is correct
        throw new Error("Error al procesar el pago, intenta más tarde");
    }
    
    ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit); //Transfer the Coins-Nears
    productsStorage.set(product.id, product); 
}


// @Param ID: Is the ID of product to find
export function getProduct(id: string): Product | null {
    return productsStorage.get(id);
}