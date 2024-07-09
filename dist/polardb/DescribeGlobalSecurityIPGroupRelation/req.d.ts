export interface DescribeGlobalSecurityIPGroupRelationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `pc-*****************`
     */
    "DBClusterId": string;
    /**
     * 资源组ID。
     * @example `rg-**********`
     */
    "ResourceGroupId"?: string;
}
