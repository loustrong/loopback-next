import {Entity, model, property} from '@loopback/repository';

@model()
export class AppointmentClass extends Entity {
  @property({
    type: 'number',
    id: true,
    default: 0,
  })
  id?: number;

  @property({
    type: 'string',
  })
  des?: string;

  constructor(data?: Partial<AppointmentClass>) {
    super(data);
  }
}
