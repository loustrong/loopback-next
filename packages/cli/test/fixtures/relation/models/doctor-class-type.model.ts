import {Entity, model, property} from '@loopback/repository';

@model()
export class DoctorClassType extends Entity {
  @property({
    type: 'number',
    id: true,
    default: 0,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<DoctorClassType>) {
    super(data);
  }
}
