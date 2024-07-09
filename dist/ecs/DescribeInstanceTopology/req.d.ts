export interface DescribeInstanceTopologyRequest {
    /**
     * ECS实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 一台或多台ECS实例的ID。支持最多100台ECS实例。
     * @example `["i-bp67acfmxazb4p****"]`
     */
    "InstanceIds"?: string;
}
