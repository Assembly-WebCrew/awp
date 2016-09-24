const pg = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'awp',
  user: 'awp',
  password: 'awp'
};

export const db = pg(config);

export interface Repository<TKey, TModel> {
  list(): Promise<TModel[]>;
  find(predicate): Promise<TModel>;
  add(instance: TModel): Promise<TModel>;
  update(id: TKey, instance: TModel): Promise<boolean>;
  delete(id: TKey): Promise<TModel>;
}