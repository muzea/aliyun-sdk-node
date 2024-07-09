export interface ApproveFabricChaincodeDefinitionRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
     */
    "OrganizationId": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
    /**
     * 链码ID
     * @example `code-sacc-jbkuldd3i7ad`
     */
    "ChaincodeId": string;
    /**
     * 链码包ID
     * @example `sacc_v1.0:698d4e73c5f1d0239fbf0313ac79ddfaf44d5a803ecb02a4d1983cca4a706860`
     */
    "ChaincodePackageId"?: string;
}
