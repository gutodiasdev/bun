import { ElysiaAdapter } from "infra/adapters/ElysiaAdapter";
import { MainController } from "infra/controllers/main-controller";

const httpServer = new ElysiaAdapter()
new MainController(httpServer)

httpServer.listen(8080);

// const app = new Elysia()
//   .use(swagger())
//   .use(html())
//   .post("/", ({ body }) => {
//     return body;
//   }, {
//     body: t.Object({
//       something: t.String()
//     })
//   })
  // .get("/", ({ html }) => html(
  //   <BaseHtml>
  //     <body
  //       class="flex w-full h-screen justify-center items-center"
  //       hx-get="/todos"
  //       hx-trigger="load"
  //       hx-swap="innerHTML"
  //     />
  //   </BaseHtml>
  // ))
  // .post("/clicked", () => <div class="text-blue-600" >I'm from the server!</div>)
  // .get("/todos", () => <TodoList todos={db} />)
  // .post("/todos/toggle/:id", ({ params }) => {
  //   const todo = db.find((todo) => todo.id === params.id);
  //   if (todo) {
  //     todo.completed = !todo.completed;
  //     return <TodoItem {...todo} />;
  //   }
  // },
  //   {
  //     params: t.Object({
  //       id: t.Numeric()
  //     })
  //   }
  // )
  // .listen(8080);

// console.log(
//   `Elysia is running at https://${app.server?.hostname}:${app.server?.port}`
// );

// const BaseHtml = ({ children }: elment.Children) => `
// <!DOCTYPE html>
// <html lang="pt-br">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>I'm a test for BETH Stack</title>
//   <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>
// ${children}
// </html>
// `;

// type Todo = {
//   id: number;
//   content: string;
//   completed: boolean;
// };

// const db: Todo[] = [
//   { id: 1, content: "learn the beth stack", completed: true },
//   { id: 2, content: "learn vim", completed: false },
// ];

// function TodoItem({ content, completed, id }: Todo) {
//   return (
//     <div class="flex flex-row space-x-3">
//       <p>{content}</p>
//       <input type="checkbox" checked={completed} hx-post={`/todos/toggle/${id}`} hx-target="closest div" hx-swap="outerHTML"/>
//       <button class="text-red-500" >X</button>
//     </div>
//   );
// }

// function TodoList({ todos }: { todos: Todo[]; }) {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <TodoItem {...todo} />
//       ))}
//     </div>
//   );
// }