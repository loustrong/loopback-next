import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DoctorClassType} from '../models/doctor-class-type.model';

export class DoctorClassTypeRepository extends DefaultCrudRepository<
  DoctorClassType,
  typeof DoctorClassType.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(DoctorClassType, dataSource);
  }
}
