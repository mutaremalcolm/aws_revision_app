//questions/index.ts

import { cloudPractitionerCloudConceptsDefinition } from "./cloud-practitioner/1-cloud-concepts/1.1";
import { cloudPractitionerCloudEconomics } from './cloud-practitioner/1-cloud-concepts/1.2';
import { cloudPractitionerCloudArchitecture } from './cloud-practitioner/1-cloud-concepts/1.3';
import {
    cloudPractitionerSharedResponsibilityModel
} from './cloud-practitioner/2-security-and-compliance/2.1';
import {
    cloudPractitionerSecurityComplianceConcepts
} from './cloud-practitioner/2-security-and-compliance/2.2';
import { cloudPractitionerAccessManagement } from './cloud-practitioner/2-security-and-compliance/2.3';
import {
    cloudPractitionerSecuritySupportResources
} from './cloud-practitioner/2-security-and-compliance/2.4';
import { cloudPractitionerDeployingOperating } from './cloud-practitioner/3-technology/3.1';
import { cloudPractitionerGlobalInfrastructure } from './cloud-practitioner/3-technology/3.2';
import { cloudPractitionerCoreServices } from './cloud-practitioner/3-technology/3.3';
import { cloudPractitionerTechnologySupportResources } from './cloud-practitioner/3-technology/3.4';
import { cloudPractitionerPricingModels } from './cloud-practitioner/4-billing-and-pricing/4.1';
import { cloudPractitionerAccountStructures } from './cloud-practitioner/4-billing-and-pricing/4.2';
import { cloudPractitionerBillingSupportResources } from './cloud-practitioner/4-billing-and-pricing/4.3';

//Combine all questins into one array
const cloudPractitionerQuestions = [
    ...cloudPractitionerCloudConceptsDefinition,
    ...cloudPractitionerCloudEconomics,
    ...cloudPractitionerCloudArchitecture,
    ...cloudPractitionerSharedResponsibilityModel,
    ...cloudPractitionerSecurityComplianceConcepts,
    ...cloudPractitionerAccessManagement,
    ...cloudPractitionerSecuritySupportResources,
    ...cloudPractitionerDeployingOperating,
    ...cloudPractitionerGlobalInfrastructure,
    ...cloudPractitionerCoreServices,
    ...cloudPractitionerBillingSupportResources,
    ...cloudPractitionerPricingModels,
    ...cloudPractitionerAccountStructures,
    ...cloudPractitionerBillingSupportResources,
];

export default cloudPractitionerQuestions;