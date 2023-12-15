interface Rate {
    value: number,
    product: {
      _id: string
    }
}

interface UserInterface {
    _id: string;
    username: string;
    image: string;
}

interface BidInterface {
    _id: string;
    amount: number;
    bidder: UserInterface;
}

interface Location {
    lat: number;
    lon: number;
}

interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    initialPrice: number;
    initialDate: Date;
    closeDate: Date;
    weight: number;
    location: Location;
    owner: UserInterface;
    buyer: UserInterface;
    bids: BidInterface[];
}

interface ProductInterface {
    product: Product;
    activeOwner: string;
}

export type { ProductInterface, BidInterface, UserInterface, Product, Rate };
