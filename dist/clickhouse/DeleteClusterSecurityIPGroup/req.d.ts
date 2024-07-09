export interface DeleteClusterSecurityIPGroupRequest {
    /**
     * 白名单分组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
