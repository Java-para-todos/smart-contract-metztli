//  import { PersistentUnorderedMap, context, PersistentMap, u128 } from "near-sdk-as";
// @nearBindgen
export class Product{
    // Atributtes
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;

    public static fromPayload(payload: Product): Product {
        const product = new Product(); //New Product
        //Load the values to the product
        product.id=payload.id;
        product.name=payload.name;
        product.description=payload.description;
        product.image=payload.image;
        product.price=payload.price;

        //return the product
        return product;
    }
}
// @nearBindgen
export class Client { //Class Client
    //Attributtes
    user: string;
    address: string;

    // Method to load the values
    public  static loadClient(loadClient: Client): Client{
        let client=new Client();
        client.user=loadClient.user;
        client.address=loadClient.address;
        //Return a Object Client
        return client;
    }
}


// export const productsStorage = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");