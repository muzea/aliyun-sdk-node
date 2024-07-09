export interface CheckCanAllocateVpcPrivateIpAddressRequest {
    /**
     * 要查询的私网IP地址所属交换机的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 要查询的私网IP地址所属的交换机ID。
     * @example `vsw-m5ew3t46z2drmifnt****`
     */
    "VSwitchId": string;
    /**
     * 要查询是否可用的私网IP地址，该私网IP地址必须属于**VSwitchId**参数中输入的交换机。
     * @example `10.0.0.7`
     */
    "PrivateIpAddress": string;
    /**
     * 要查询的私网IP地址的类型。取值：
     * - **ipv4**：IPv4类型。当查询的私网IP地址为IPv4类型时，该参数为选填。
     * - **ipv6**：IPv6类型。当查询的私网IP地址为IPv6类型时，该参数为必填。
     * @example `ipv4`
     */
    "IpVersion"?: string;
}
