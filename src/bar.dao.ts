import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Bar, BarKey } from './bar.interface';
import { InjectModel, Model } from 'nestjs-dynamoose';

@Injectable()
export class BarDAO {
  constructor(
    @InjectModel('Bar')
    private readonly barModel: Model<
      Bar,
      BarKey | string
      >,
  ) {}

  async create(bar: Bar): Promise<Bar> {
    const id = uuidv4();
    return this.barModel.create({ ...bar, id });
  }
}
