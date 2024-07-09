export interface DescribeEipGatewayInfoRequest {
    /**
     * 要查询的EIP绑定的辅助弹性网卡的ID。
     * @example `eni-bp1d66qjxb3qoin3****`
     */
    "InstanceId": string;
    /**
     * 要查询的EIP所属的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
}
