export interface DescribeRdsVSwitchsRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID和可用区ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * VPC ID。
     * >  - 您可以调用[DescribeRdsVpcs](~~208327~~)接口查看可用的VPC ID。
     * > - 该参数必须传入。
     * @example `vpc-bp*******************`
     */
    "VpcId"?: string;
    /**
     * 可用区ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID和可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
}
