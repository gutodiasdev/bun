
export interface HttpServer {
  on(method: Methods, url: string, callback: Function, typing?: Record<string, unknown>): void;
  listen(port: number): void
}

export type Methods = "get" | "post" | "put" | "patch" | "delete" | "options" | "head" | "connect";
