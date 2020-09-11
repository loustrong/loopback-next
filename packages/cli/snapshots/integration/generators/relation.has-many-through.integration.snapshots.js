// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`lb4 relation HasManyThrough checks generated source class repository answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment"} generates Doctor repository file with different inputs 1`] = `
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {Doctor, Patient, Appointment} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AppointmentRepository} from './appointment.repository';
import {PatientRepository} from './patient.repository';

export class DoctorRepository extends DefaultCrudRepository<
  Doctor,
  typeof Doctor.prototype.id
> {

  public readonly patients: HasManyThroughRepositoryFactory<Patient, typeof Patient.prototype.id,
          Appointment,
          typeof Doctor.prototype.id
        >;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('AppointmentRepository') protected appointmentRepositoryGetter: Getter<AppointmentRepository>, @repository.getter('PatientRepository') protected patientRepositoryGetter: Getter<PatientRepository>,) {
    super(Doctor, dataSource);
    this.patients = this.createHasManyThroughRepositoryFactoryFor('patients', patientRepositoryGetter, appointmentRepositoryGetter,);
    this.registerInclusionResolver('patients', this.patients.inclusionResolver);
  }
}

`;


exports[`lb4 relation HasManyThrough checks generated source class repository answers {"relationType":"hasManyThrough","sourceModel":"DoctorClass","destinationModel":"PatientClass","throughModel":"AppointmentClass","registerInclusionResolver":true} generates DoctorClass repository file with different inputs 1`] = `
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DoctorClass} from '../models/doctor-class.model';
import {PatientClass, AppointmentClass} from '../models';
import {AppointmentClassRepository} from './appointment-class.repository';
import {PatientClassRepository} from './patient-class.repository';

export class DoctorClassRepository extends DefaultCrudRepository<
  DoctorClass,
  typeof DoctorClass.prototype.id
> {

  public readonly patientClasses: HasManyThroughRepositoryFactory<PatientClass, typeof PatientClass.prototype.id,
          AppointmentClass,
          typeof DoctorClass.prototype.id
        >;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('AppointmentClassRepository') protected appointmentClassRepositoryGetter: Getter<AppointmentClassRepository>, @repository.getter('PatientClassRepository') protected patientClassRepositoryGetter: Getter<PatientClassRepository>,) {
    super(DoctorClass, dataSource);
    this.patientClasses = this.createHasManyThroughRepositoryFactoryFor('patientClasses', patientClassRepositoryGetter, appointmentClassRepositoryGetter,);
    this.registerInclusionResolver('patientClasses', this.patientClasses.inclusionResolver);
  }
}

`;


exports[`lb4 relation HasManyThrough checks generated source class repository answers {"relationType":"hasManyThrough","sourceModel":"DoctorClassType","destinationModel":"PatientClassType","throughModel":"AppointmentClassType","registerInclusionResolver":false} generates DoctorClassType repository file with different inputs 1`] = `
import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DoctorClassType} from '../models/doctor-class-type.model';
import {PatientClassType, AppointmentClassType} from '../models';
import {AppointmentClassTypeRepository} from './appointment-class-type.repository';
import {PatientClassTypeRepository} from './patient-class-type.repository';

export class DoctorClassTypeRepository extends DefaultCrudRepository<
  DoctorClassType,
  typeof DoctorClassType.prototype.id
> {

  public readonly patientClassTypes: HasManyThroughRepositoryFactory<PatientClassType, typeof PatientClassType.prototype.id,
          AppointmentClassType,
          typeof DoctorClassType.prototype.id
        >;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('AppointmentClassTypeRepository') protected appointmentClassTypeRepositoryGetter: Getter<AppointmentClassTypeRepository>, @repository.getter('PatientClassTypeRepository') protected patientClassTypeRepositoryGetter: Getter<PatientClassTypeRepository>,) {
    super(DoctorClassType, dataSource);
    this.patientClassTypes = this.createHasManyThroughRepositoryFactoryFor('patientClassTypes', patientClassTypeRepositoryGetter, appointmentClassTypeRepositoryGetter,);
  }
}

`;


exports[`lb4 relation HasManyThrough checks if the controller file is created  answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment","relationName":"myPatients"} controller file has been created with hasManyThrough relation 1`] = `
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Doctor,
Appointment,
Patient,
} from '../models';
import {DoctorRepository} from '../repositories';

export class DoctorPatientController {
  constructor(
    @repository(DoctorRepository) protected doctorRepository: DoctorRepository,
  ) { }

  @get('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Array of Doctor has many Patient through Appointment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Patient)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Patient>,
  ): Promise<Patient[]> {
    return this.doctorRepository.myPatients(id).find(filter);
  }

  @post('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'create a Patient model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patient)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Doctor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {
            title: 'NewPatientInDoctor',
            exclude: ['id'],
          }),
        },
      },
    }) patient: Omit<Patient, 'id'>,
  ): Promise<Patient> {
    return this.doctorRepository.myPatients(id).create(patient);
  }

  @patch('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Doctor.Patient PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {partial: true}),
        },
      },
    })
    patient: Partial<Patient>,
    @param.query.object('where', getWhereSchemaFor(Patient)) where?: Where<Patient>,
  ): Promise<Count> {
    return this.doctorRepository.myPatients(id).patch(patient, where);
  }

  @del('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Doctor.Patient DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Patient)) where?: Where<Patient>,
  ): Promise<Count> {
    return this.doctorRepository.myPatients(id).delete(where);
  }
}

`;


exports[`lb4 relation HasManyThrough checks if the controller file is created  answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment"} controller file has been created with hasManyThrough relation 1`] = `
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Doctor,
Appointment,
Patient,
} from '../models';
import {DoctorRepository} from '../repositories';

export class DoctorPatientController {
  constructor(
    @repository(DoctorRepository) protected doctorRepository: DoctorRepository,
  ) { }

  @get('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Array of Doctor has many Patient through Appointment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Patient)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Patient>,
  ): Promise<Patient[]> {
    return this.doctorRepository.patients(id).find(filter);
  }

  @post('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'create a Patient model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patient)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Doctor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {
            title: 'NewPatientInDoctor',
            exclude: ['id'],
          }),
        },
      },
    }) patient: Omit<Patient, 'id'>,
  ): Promise<Patient> {
    return this.doctorRepository.patients(id).create(patient);
  }

  @patch('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Doctor.Patient PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patient, {partial: true}),
        },
      },
    })
    patient: Partial<Patient>,
    @param.query.object('where', getWhereSchemaFor(Patient)) where?: Where<Patient>,
  ): Promise<Count> {
    return this.doctorRepository.patients(id).patch(patient, where);
  }

  @del('/doctors/{id}/patients', {
    responses: {
      '200': {
        description: 'Doctor.Patient DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Patient)) where?: Where<Patient>,
  ): Promise<Count> {
    return this.doctorRepository.patients(id).delete(where);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment","sourceKeyOnThrough":"customKeyFrom"} add custom keyTo and/or keyFrom to the through model 1`] = `
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Patient} from './patient.model';
import {Appointment} from './appointment.model';

@model()
export class Doctor extends Entity {
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

  @hasMany(() => Patient, {through: {model: () => Appointment, keyFrom: 'customKeyFrom'}})
  patients: Patient[];

  constructor(data?: Partial<Doctor>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment","sourceKeyOnThrough":"customKeyFrom"} add custom keyTo and/or keyFrom to the through model 2`] = `
import {Entity, model, property} from '@loopback/repository';

@model()
export class Appointment extends Entity {
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

  @property({
    type: 'number',
  })
  customKeyFrom?: number;

  @property({
    type: 'number',
  })
  patientId?: number;

  constructor(data?: Partial<Appointment>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"DoctorClass","destinationModel":"PatientClass","throughModel":"AppointmentClass","targetKeyOnThrough":"customKeyTo"} add custom keyTo and/or keyFrom to the through model 1`] = `
import {Entity, model, property, hasMany} from '@loopback/repository';
import {PatientClass} from './patient-class.model';
import {AppointmentClass} from './appointment-class.model';

@model()
export class DoctorClass extends Entity {
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

  @hasMany(() => PatientClass, {through: {model: () => AppointmentClass, keyTo: 'customKeyTo'}})
  patientClasses: PatientClass[];

  constructor(data?: Partial<DoctorClass>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"DoctorClass","destinationModel":"PatientClass","throughModel":"AppointmentClass","targetKeyOnThrough":"customKeyTo"} add custom keyTo and/or keyFrom to the through model 2`] = `
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

  @property({
    type: 'number',
  })
  doctorClassId?: number;

  @property({
    type: 'number',
  })
  customKeyTo?: number;

  constructor(data?: Partial<AppointmentClass>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"DoctorClassType","destinationModel":"PatientClassType","throughModel":"AppointmentClassType","sourceKeyOnThrough":"customKeyFrom","targetKeyOnThrough":"customKeyTo"} add custom keyTo and/or keyFrom to the through model 1`] = `
import {Entity, model, property, hasMany} from '@loopback/repository';
import {PatientClassType} from './patient-class-type.model';
import {AppointmentClassType} from './appointment-class-type.model';

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

  @hasMany(() => PatientClassType, {through: {model: () => AppointmentClassType, keyFrom: 'customKeyFrom', keyTo: 'customKeyTo'}})
  patientClassTypes: PatientClassType[];

  constructor(data?: Partial<DoctorClassType>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom keyFrom and/or keyTo answers {"relationType":"hasManyThrough","sourceModel":"DoctorClassType","destinationModel":"PatientClassType","throughModel":"AppointmentClassType","sourceKeyOnThrough":"customKeyFrom","targetKeyOnThrough":"customKeyTo"} add custom keyTo and/or keyFrom to the through model 2`] = `
import {Entity, model, property} from '@loopback/repository';

@model()
export class AppointmentClassType extends Entity {
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

  @property({
    type: 'number',
  })
  customKeyFrom?: number;

  @property({
    type: 'number',
  })
  customKeyTo?: number;

  constructor(data?: Partial<AppointmentClassType>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom relation name answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment","relationName":"myPatients"} relation name should be myPatients 1`] = `
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Patient} from './patient.model';
import {Appointment} from './appointment.model';

@model()
export class Doctor extends Entity {
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

  @hasMany(() => Patient, {through: {model: () => Appointment}})
  myPatients: Patient[];

  constructor(data?: Partial<Doctor>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with custom relation name answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment","relationName":"myPatients"} relation name should be myPatients 2`] = `
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {Doctor, Patient, Appointment} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AppointmentRepository} from './appointment.repository';
import {PatientRepository} from './patient.repository';

export class DoctorRepository extends DefaultCrudRepository<
  Doctor,
  typeof Doctor.prototype.id
> {

  public readonly myPatients: HasManyThroughRepositoryFactory<Patient, typeof Patient.prototype.id,
          Appointment,
          typeof Doctor.prototype.id
        >;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('AppointmentRepository') protected appointmentRepositoryGetter: Getter<AppointmentRepository>, @repository.getter('PatientRepository') protected patientRepositoryGetter: Getter<PatientRepository>,) {
    super(Doctor, dataSource);
    this.myPatients = this.createHasManyThroughRepositoryFactoryFor('myPatients', patientRepositoryGetter, appointmentRepositoryGetter,);
    this.registerInclusionResolver('myPatients', this.myPatients.inclusionResolver);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with default values answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment"} has correct default foreign keys 1`] = `
import {Entity, model, property} from '@loopback/repository';

@model()
export class Appointment extends Entity {
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

  @property({
    type: 'number',
  })
  doctorId?: number;

  @property({
    type: 'number',
  })
  patientId?: number;

  constructor(data?: Partial<Appointment>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with default values answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment"} has correct imports and relation name patients 1`] = `
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Patient} from './patient.model';
import {Appointment} from './appointment.model';

@model()
export class Doctor extends Entity {
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

  @hasMany(() => Patient, {through: {model: () => Appointment}})
  patients: Patient[];

  constructor(data?: Partial<Doctor>) {
    super(data);
  }
}

`;


exports[`lb4 relation HasManyThrough generates model relation with default values answers {"relationType":"hasManyThrough","sourceModel":"Doctor","destinationModel":"Patient","throughModel":"Appointment"} has correct imports and relation name patients 2`] = `
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {Doctor, Patient, Appointment} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AppointmentRepository} from './appointment.repository';
import {PatientRepository} from './patient.repository';

export class DoctorRepository extends DefaultCrudRepository<
  Doctor,
  typeof Doctor.prototype.id
> {

  public readonly patients: HasManyThroughRepositoryFactory<Patient, typeof Patient.prototype.id,
          Appointment,
          typeof Doctor.prototype.id
        >;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('AppointmentRepository') protected appointmentRepositoryGetter: Getter<AppointmentRepository>, @repository.getter('PatientRepository') protected patientRepositoryGetter: Getter<PatientRepository>,) {
    super(Doctor, dataSource);
    this.patients = this.createHasManyThroughRepositoryFactoryFor('patients', patientRepositoryGetter, appointmentRepositoryGetter,);
    this.registerInclusionResolver('patients', this.patients.inclusionResolver);
  }
}

`;
