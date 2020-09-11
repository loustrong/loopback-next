import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {AppointmentClass} from '../models/appointment-class.model';

export class AppointmentClassRepository extends DefaultCrudRepository<
  AppointmentClass,
  typeof AppointmentClass.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(AppointmentClass, dataSource);
  }
}
