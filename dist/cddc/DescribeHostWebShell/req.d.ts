export interface DescribeHostWebShellRequest {
    /**
     * 主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 主机所在可用区ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
}
