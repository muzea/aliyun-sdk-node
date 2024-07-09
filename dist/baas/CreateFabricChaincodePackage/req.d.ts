export interface CreateFabricChaincodePackageRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
     */
    "OrganizationId": string;
    /**
     * 链码包存放bucket内路径
     * @example `hi003/7efbe860-1a40-42c9-9e6b-0bc08d7ee3a4/cmcc.tar.gz`
     */
    "OssUrl": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}
