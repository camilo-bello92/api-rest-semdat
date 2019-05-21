import { Entity, model, property } from '@loopback/repository';

@model()
export class Schema extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  NAME: string;

  @property({
    type: 'string',
  })
  OBJECT: string;

  @property({
    type: 'string',
  })
  VALUE: string;

  @property({
    type: 'string',
  })
  SYSTEM?: string;

  @property({
    type: 'string',
  })
  BD: string;

  @property({
    type: 'string',
  })
  SCHEMA: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  RELATIONS: object[];


  constructor(data?: Partial<Schema>) {
    super(data);
  }
}
