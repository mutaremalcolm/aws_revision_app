//questions/index.ts

import { cloudPractitionerCloudConceptsDefinition } from "./1-cloud-concepts/1.1";
import { cloudPractitionerCloudEconomics } from './1-cloud-concepts/1.2';
import { cloudPractitionerCloudArchitecture } from './1-cloud-concepts/1.3';
import {
    cloudPractitionerSharedResponsibilityModel
} from './2-security-and-compliance/2.1';
import {
    cloudPractitionerSecurityComplianceConcepts
} from './2-security-and-compliance/2.2';
import { cloudPractitionerAccessManagement } from './2-security-and-compliance/2.3';
import {
    cloudPractitionerSecuritySupportResources
} from './2-security-and-compliance/2.4';
import { cloudPractitionerDeployingOperating } from './3-technology/3.1';
import { cloudPractitionerGlobalInfrastructure } from './3-technology/3.2';
import { cloudPractitionerCoreServices } from './3-technology/3.3';
import { cloudPractitionerTechnologySupportResources } from './3-technology/3.4';
import { cloudPractitionerPricingModels } from './4-billing-and-pricing/4.1';
import { cloudPractitionerAccountStructures } from './4-billing-and-pricing/4.2';
import { cloudPractitionerBillingSupportResources } from './4-billing-and-pricing/4.3';

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