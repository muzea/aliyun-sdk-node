export interface DescribeClusterSecurityInfoRequest {
    /**
     * 集群ID。
     * @example `cc-bp1p816075e21****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
