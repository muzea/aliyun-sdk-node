export interface ManuallyStartDBClusterRequest {
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * >  您可以通过[DescribeRegions](~~98041~~)接口查看可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
