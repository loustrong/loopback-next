import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DoctorClass} from '../models/doctor-class.model';

export class DoctorClassRepository extends DefaultCrudRepository<
  DoctorClass,
  typeof DoctorClass.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(DoctorClass, dataSource);
  }
}
