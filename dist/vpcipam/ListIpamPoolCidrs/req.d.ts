export interface ListIpamPoolCidrsRequest {
    /**
     * IPAM托管地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM地址池的实例ID。
     * @example `ipam-pool-6rcq3tobayc20t****`
     */
    "IpamPoolId": string;
    /**
     * 要查询的预置CIDR地址段。
     * > 目前，只支持IPv4类型的地址段。
     * @example `192.168.1.0/24`
     */
    "Cidr"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
