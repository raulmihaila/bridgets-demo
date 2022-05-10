import { Controller, createMiddleware, createHttpError } from 'bridgets';
import { string, z } from 'zod';
import { Request } from 'express';

// Obligé de return Record<string, any>
const getIPFromHeader = createMiddleware((req) => {
  if (req.headers.token !== "password") return createHttpError('Unauthorized', "Wrong token");
  const ip = req.headers.ip as string;
  return { ip, salut: 'oui oui' } as const;
});

// (req: Request) => Record<string, any>
const auth = (type: 'user') => {
  return createMiddleware((req) => {
    return { ah: true } as const;
  });
};

export class Friend extends Controller {
  get = this.createEndpoint({
    query: z.object({ name: z.string() }),
    handler: ({ query }) => {
      return `Hello ${query.name}` as const;
    },
  });

  getIfChepa = this.createEndpoint({
    query: z.object({ name: z.string() }),
    handler: ({ query }) => {
      return this.get.handler({ query });
    },
  });
}

export class User extends Controller {
  // friend = new Friend();

  // localhost:8080/user/create
  create = this.createEndpoint({
    description: 'Create a user',
    middlewares: [getIPFromHeader, auth('user')],
    query: z.object({ name: z.string() }),
    // Record<string, string>
    // query: z.object({ token: z.string() }),
    // Record<string, string>
    // headers: z.object({ token: z.string() }),
    // Record<string, any>
    body: z.object({ name: z.string(), age: z.number() }),
    handler: (p) => {
      throw new Error("Test erreur serveur")
      // Error:  Record<"error", {status: number, name: string, data?: any}>
      if (p.body.name !== 'Nab') return { error: { status: 401, name: 'Wrong name', data: [] } } as const;
      // if (p.body.name !== "Nab") return createHttpError("Unprocessable entity", "bla bla")
      return { name: 'p.salut', age: 'ejjh' } as const;
    },
  });

  update = this.createEndpoint({
    query: z.object({ name: z.string(), age: z.string() }),
    handler: (p) => {
      return { success: true } as const
    },
  });
   
  // createAndUpdate = this.createEndpoint({
  //   body: z.object({ name: z.string(), age: z.number() }),
  //   handler: ({ body }) => {
  //     const data = this.create.handler({ body });
  //     if (data.error) return data;
  //     const data2 = this.update.handler({ query: data });
  //     return { data, data2 };
  //   },
  // });


  // localhost:8080/user/update
  // update = this.createEndpoint({
  //   files: ['image'] as const,
  //   middlewares: [auth2],
  //   handler: (p) => p.files.image.filepath,
  // });
}
