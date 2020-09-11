import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {AppointmentClassType} from '../models/appointment-class-type.model';

export class AppointmentClassTypeRepository extends DefaultCrudRepository<
  AppointmentClassType,
  typeof AppointmentClassType.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(AppointmentClassType, dataSource);
  }
}
