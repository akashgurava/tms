declare module 'node-tvdb' {
  class Client {
    constructor(apikey: string, language?: string);

    getSeriesByName(name: string, opts?: Object): Promise<Array<Object>>;
  }
  export = Client;
}
