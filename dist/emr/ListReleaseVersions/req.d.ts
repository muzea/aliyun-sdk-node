export interface ListReleaseVersionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IaaS资源类型。
     * @example `ECS`
     */
    "IaasType"?: string;
    /**
     * 集群类型。
     * @example `DATALAKE`
     */
    "ClusterType": string;
}
