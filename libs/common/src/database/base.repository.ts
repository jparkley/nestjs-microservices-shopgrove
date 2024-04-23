import { Logger, NotFoundException } from '@nestjs/common';
import {
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  SaveOptions,
  Connection,
} from 'mongoose';
import { BaseDocument } from './base.schema';

export abstract class BaseRepository<TDcoument extends BaseDocument> {
  protected abstract readonly logger: Logger;

  constructor(
    protected readonly model: Model<TDcoument>,
    private readonly connection: Connection,
  ) {}
}
