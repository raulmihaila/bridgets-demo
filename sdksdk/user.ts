import { CEQUETUVEUX } from 'dts/src/index';

type UserT = CEQUETUVEUX['user'];

export class User {
  constructor(private Fetch: any) {}

  public get = (p: {  }): Promise<UserT['get']['return']> => {
    return this.Fetch({ method: 'POST', ...p});
  };
}
