export interface DescribeIpSetRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 加速地域实例ID。
     * 您可以通过调用[ListIpSets](~~2253273~~)查询指定全球加速实例下包含的加速地域实例ID。
     * @example `ips-bp11ilwqjdkjeg9r7****`
     */
    "IpSetId": string;
}
