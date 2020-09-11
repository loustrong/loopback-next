import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {PatientClassType} from '../models/patient-class-type.model';

export class PatientClassTypeRepository extends DefaultCrudRepository<
  PatientClassType,
  typeof PatientClassType.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(PatientClassType, dataSource);
  }
}
