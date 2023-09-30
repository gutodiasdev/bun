import { GetAllOffersUsecase } from "application/usecase/get-all-offers";
import { ElysiaAdapter } from "infra/adapters/ElysiaAdapter";
import { OffersController } from "infra/controllers/offers-controller";

const httpServer = new ElysiaAdapter()
const getAllOffers = new GetAllOffersUsecase()
new OffersController(httpServer, getAllOffers);

httpServer.listen(8080);