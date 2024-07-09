export interface DescribeClusterConnectionRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
}
