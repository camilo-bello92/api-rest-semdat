import { DefaultCrudRepository } from '@loopback/repository';
import { Schema } from '../models';
import { SemdatDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class SchemaRepository extends DefaultCrudRepository<
  Schema,
  typeof Schema.prototype.id
  > {
  constructor(
    @inject('datasources.db') dataSource: SemdatDataSource,
  ) {
    super(Schema, dataSource);
  }
}
