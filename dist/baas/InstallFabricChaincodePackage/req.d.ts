export interface InstallFabricChaincodePackageRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
     */
    "OrganizationId": string;
    /**
     * 链码包ID
     * @example `chan-channelx-1l1hmckuuisxo`
     */
    "ChaincodePackageId": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}
