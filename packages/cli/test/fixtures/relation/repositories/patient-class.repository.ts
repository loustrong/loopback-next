import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {PatientClass} from '../models';

export class PatientClassRepository extends DefaultCrudRepository<
  PatientClass,
  typeof PatientClass.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(PatientClass, dataSource);
  }
}
