import { t } from "elysia";
import { HttpServer } from "infra/interfaces/http-server";

export class MainController {
  constructor(httpServer: HttpServer) {
    httpServer.on("get", "/", () => {
      return {
        status: "success"
      }
    }, {
      status: t.Object({
        status: t.String()
      })
    });
  };
};