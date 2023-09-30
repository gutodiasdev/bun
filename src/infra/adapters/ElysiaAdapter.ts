import swagger from "@elysiajs/swagger";
import { Elysia, Handler, MergeSchema, UnwrapRoute } from "elysia";
import { HttpServer, Methods } from "infra/interfaces/http-server";

export class ElysiaAdapter implements HttpServer {
  app: Elysia

  constructor() {
    this.app = new Elysia();
    this.app.use(swagger());
  }
  on(method: Methods, url: string, callback: Handler<MergeSchema<UnwrapRoute<Record<string, unknown>, {}>, {}>, { request: {}; store: {}; }, string>, typing?: Record<string, unknown> | undefined): void {
    this.app[method](url, callback, typing);
  }

  listen(port: number): void {
    this.app.listen(port);
    console.log(
      `Elysia is running at https://${this.app.server?.hostname}:${this.app.server?.port}`
    );
  }
}