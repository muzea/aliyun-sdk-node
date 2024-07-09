export interface DescribeClusterRequest {
    /**
     * 集群ID。
     * @example `cc-uf6a499c0m3w5****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
