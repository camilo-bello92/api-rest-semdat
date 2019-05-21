import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Schema} from '../models';
import {SchemaRepository} from '../repositories';

export class SchemaController {
  constructor(
    @repository(SchemaRepository)
    public schemaRepository : SchemaRepository,
  ) {}

  @post('/schemas', {
    responses: {
      '200': {
        description: 'Schema model instance',
        content: {'application/json': {schema: {'x-ts-type': Schema}}},
      },
    },
  })
  async create(@requestBody() schema: Schema): Promise<Schema> {
    return await this.schemaRepository.create(schema);
  }

  @get('/schemas/count', {
    responses: {
      '200': {
        description: 'Schema model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Schema)) where?: Where,
  ): Promise<Count> {
    return await this.schemaRepository.count(where);
  }

  @get('/schemas', {
    responses: {
      '200': {
        description: 'Array of Schema model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Schema}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Schema)) filter?: Filter,
  ): Promise<Schema[]> {
    return await this.schemaRepository.find(filter);
  }

  @patch('/schemas', {
    responses: {
      '200': {
        description: 'Schema PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() schema: Schema,
    @param.query.object('where', getWhereSchemaFor(Schema)) where?: Where,
  ): Promise<Count> {
    return await this.schemaRepository.updateAll(schema, where);
  }

  @get('/schemas/{id}', {
    responses: {
      '200': {
        description: 'Schema model instance',
        content: {'application/json': {schema: {'x-ts-type': Schema}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Schema> {
    return await this.schemaRepository.findById(id);
  }

  @patch('/schemas/{id}', {
    responses: {
      '204': {
        description: 'Schema PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() schema: Schema,
  ): Promise<void> {
    await this.schemaRepository.updateById(id, schema);
  }

  @put('/schemas/{id}', {
    responses: {
      '204': {
        description: 'Schema PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() schema: Schema,
  ): Promise<void> {
    await this.schemaRepository.replaceById(id, schema);
  }

  @del('/schemas/{id}', {
    responses: {
      '204': {
        description: 'Schema DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.schemaRepository.deleteById(id);
  }
}
