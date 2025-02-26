// Cloud Practitioner Questions

import { sysOpsMonitoringLogging } from './1-monitoring-logging/1.1';
import { sysOpsRemediation } from './1-monitoring-logging/1.2';
import {
    sysOpsScalabilityElasticity
} from './2-reliability-and-business-continuity/2.1'
import {
    sysOpsHighAvailability
} from './2-reliability-and-business-continuity/2.2';
import {
    sysOpsBackupRestore
} from './2-reliability-and-business-continuity/2.3';
import {
    sysOpsProvisioning
} from './3-deployment-provisioning-automation/3.1';
import { sysOpsAutomation } from './3-deployment-provisioning-automation/3.2';
import { sysOpsSecurityCompliance } from './4-security-compliance/4.1';
import { sysOpsDataProtection } from './4-security-compliance/4.2';
import {
    sysOpsNetworkingConnectivity
} from './5-networking-content-delivery/5.1';
import { sysOpsDNSContentDelivery } from './5-networking-content-delivery/5.2';
import {
    sysOpsNetworkTroubleshooting
} from './5-networking-content-delivery/5.3';
import { sysOpsCostOptimization } from './6-cost-performance-optimization/6.1';
import {
    sysOpsPerformanceOptimization
} from './6-cost-performance-optimization/6.2';

const sysOpsAdministratorQuestions = [
    ...sysOpsMonitoringLogging,
    ...sysOpsRemediation,
    ...sysOpsScalabilityElasticity,
    ...sysOpsHighAvailability,
    ...sysOpsBackupRestore,
    ...sysOpsProvisioning,
    ...sysOpsAutomation,
    ...sysOpsSecurityCompliance,
    ...sysOpsDataProtection,
    ...sysOpsNetworkingConnectivity,
    ...sysOpsDNSContentDelivery,
    ...sysOpsNetworkTroubleshooting,
    ...sysOpsCostOptimization,
    ...sysOpsPerformanceOptimization
];

export default sysOpsAdministratorQuestions;
