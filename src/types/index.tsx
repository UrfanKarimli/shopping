type ReviewType = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

type DimensionsType = {
    width: number;
    height: number;
    depth: number;
};

type MetaType = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};

type ProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: DimensionsType;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ReviewType[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaType;
    images: string[];
    thumbnail: string;
    quantity?: number;
};


type GetProductsType ={ 
    limit: number;
    products: ProductType[];
    skip: number;
    total: number

}

export type { ProductType, GetProductsType }