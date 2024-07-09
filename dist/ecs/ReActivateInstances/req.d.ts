export interface ReActivateInstancesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要重开机的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
}
