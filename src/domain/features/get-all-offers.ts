export interface GetAllOffers {
  execute(): Promise<GetAllOffers.Output>
}

export namespace GetAllOffers {
  export type Output = Array<{
    id: string,
    image: string,
    title: string,
    oldPrice: string,
    price: string,
    destinationLink: string,
    storeImage: string,
    storeName: string,
    description: string,
    expirationDate: string,
    shortLink: string,
    createdLink: string,
    isOnShowcase: boolean,
    isFeatured: boolean,
    isFreeShipping: boolean,
    resourceId: string
  }>
}