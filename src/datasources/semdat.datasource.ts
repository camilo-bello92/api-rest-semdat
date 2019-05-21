import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './semdat.datasource.json';

export class SemdatDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
