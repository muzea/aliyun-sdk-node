export interface MoveVpnResourceGroupRequest {
    /**
     * 资源实例ID。
     * @example `vpn-8vb3lzn7biepthri8****`
     */
    "InstanceId": string;
    /**
     * 资源类型。
     * - **VpnGateway**：VPN网关实例。
     *   改变VPN网关实例所属的资源组后，将一并修改该VPN网关实例下IPsec服务端、SSL服务端、SSL客户端证书、IPsec连接（指绑定VPN网关实例的IPsec连接）所属的资源组。
     * - **CustomerGateway**：用户网关实例。
     * - **VpnAttachment**：IPsec连接实例。
     *
     *   指绑定转发路由器实例的IPsec连接或未绑定任何资源的IPsec连接。
     * @example `VpnGateway`
     */
    "ResourceType": string;
    /**
     * 资源所属的新资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
}
