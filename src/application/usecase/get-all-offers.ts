import { GetAllOffers } from "domain/features/get-all-offers";
import { prisma } from "infra/config/prisma";

export class GetAllOffersUsecase implements GetAllOffers {
  async execute(): Promise<GetAllOffers.Output> {
    const offers = await prisma.offers.findMany({});
    return {
      offers
    }
  }
}