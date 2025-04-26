//questions/index.ts

import { solutionsArchitectSecureArchitecturesQuestions } from "./1-design-secure-architecture/1.1";
import { solutionsArchitectSecureWorkloads } from "./1-design-secure-architecture/1.2";
import { solutionsArtchitectcloudPractionerDataSecurity } from "./1-design-secure-architecture/1.3";
import { solutionsArchitectScalableArchitectures } from "./2-design-resillient-architecture/2.1";
import { solutionsArchitectAvailableArchitectures } from "./2-design-resillient-architecture/2.2";
import { solutionsArchitectScalableSolutions } from "./3-design-high-performing-architectures/3.1";
import { solutionsArchitectNetworkingSolutions } from "./3-design-high-performing-architectures/3.2";
import { solutionsArchitectComputeSolutions } from "./4-design-well-performing-architectures/4.1";
import { solutionsArchitectStorageSolutions } from "./4-design-well-performing-architectures/4.2";
import { solutionsArchitectDatabaseSolutions } from "./4-design-well-performing-architectures/4.3";

const solutionsArchitectAssociateQuestions = [
    ...solutionsArchitectSecureArchitecturesQuestions,
    ...solutionsArchitectSecureWorkloads,
    ...solutionsArtchitectcloudPractionerDataSecurity,
    ...solutionsArchitectScalableArchitectures,
    ...solutionsArchitectAvailableArchitectures,
    ...solutionsArchitectNetworkingSolutions,
    ...solutionsArchitectComputeSolutions,
    ...solutionsArchitectStorageSolutions,
    ...solutionsArchitectDatabaseSolutions,
    ...solutionsArchitectScalableSolutions
];

export default solutionsArchitectAssociateQuestions; 