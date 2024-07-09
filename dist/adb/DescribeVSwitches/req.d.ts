export interface DescribeVSwitchesRequest {
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 专有网络ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看专有网络ID。
     * @example `vpc-bp13h7uzhulpuxvnp****`
     */
    "VpcId"?: string;
    /**
     * 可用区ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-8vbpu1teend1qcosfojlz`
     */
    "VswId"?: string;
}
