import { offers } from "@prisma/client";

export interface GetAllOffers {
  execute(): Promise<GetAllOffers.Output>
}

export namespace GetAllOffers {
  export type Output = {
    // offers: Array<{
    //   id: string,
    //   image: string,
    //   title: string,
    //   old_price: string | null,
    //   price: string,
    //   destination_link: string,
    //   store_image: string | null,
    //   store_name: string,
    //   description: string | null,
    //   expiration_date: string | null,
    //   short_link: string,
    //   created_link: string,
    //   is_on_showcase: boolean,
    //   is_featured: boolean,
    //   is_free_shipping: boolean,
    //   resource_id: string
    // }>
    offers: Array<offers>
  }
}