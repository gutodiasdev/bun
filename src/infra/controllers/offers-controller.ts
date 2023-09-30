import { GetAllOffers } from "domain/features/get-all-offers";
import { t } from "elysia";
import { prisma } from "infra/config/prisma";
import { HttpServer } from "infra/interfaces/http-server";

export class OffersController {
  constructor(httpServer: HttpServer, getAllOffers: GetAllOffers) {
    httpServer.on("get", "/offers", async () => {
      const offers = await getAllOffers.execute();
      return {
        status: "success",
        data: offers
      };
    }, {
      status: t.Object({
        status: t.String(),
        data: t.Any()
      })
    });
    httpServer.on("get", "/offers/:id", async ({ params: { id } }: { params: { id: string; }; }) => {
      const offer = await prisma.offers.findFirst({
        where: {
          id: id
        }
      });
      return {
        status: "success",
        data: offer
      };
    }, {
      status: t.Object({
        status: t.String(),
        data: t.Any()
      })
    });
  };
};