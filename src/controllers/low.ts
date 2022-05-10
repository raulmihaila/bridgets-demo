import { Controller, createMiddleware, createHttpError, apply } from 'bridgets';
import { z } from 'zod';
// export class User extends Controller {
//   hello = this.createEndpoint({
//     // method: 'GET',
//     files: ["cequejebhe"] as const,
//     handler: ({files}) => {
//       Object.entries(files).forEach(([fileName, formidableFile])=> {
//         console.log(fileName, formidableFile)
//       })

//       return 'Hello World';
//     },
//   });
// }

const authenticate = createMiddleware((req) => {
  if (req.query.name !== 'Dave') {
    // throw new Error("Test erreur serveur")
    return createHttpError('Unauthorized', 'You are not Dave !');
  } else if (req.query.test === '1') return { user: { firstName: '', lastName: '' } };
  else return { association: { admins: [''] } };
});

const mid2 = createMiddleware((req) => {
  return { Yo: 69 } as const;
});

export class User extends Controller {
  get = this.createEndpoint({
    files: apply('image1', 'image2'),
    middlewares: apply(authenticate, mid2),
    handler: (p) => {
      if (!p.mid.association) p.mid.user.firstName
      else p.mid.association.admins[0]
      return `Hello ${9}`;
    },
  });
}

// CHECKING methods, body, query, headers, middlewares, files, handler
