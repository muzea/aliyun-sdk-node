export interface ModifySagPortRouteProtocolRequest {
    /**
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 端口名称。
     * @example `2`
     */
    "PortName": string;
    /**
     * VLAN编码。
     * @example `2`
     */
    "Vlan"?: string;
    /**
     * 路由协议。取值：
     * - **STATIC**：静态路由协议。
     * - **OSPF**：OSPF动态路由协议。
     * - **BGP**：BGP动态路由协议。
     * @example `STATIC`
     */
    "RouteProtocol": string;
    /**
     * 对端IP地址。
     * >启用BGP路由协议时需输入。
     * @example `192.XX.XX.1`
     */
    "RemoteIp"?: string;
    /**
     * 对端BGP自治系统编号。
     * >启用BGP路由协议时需输入。
     * @example `65535`
     */
    "RemoteAs"?: string;
}
