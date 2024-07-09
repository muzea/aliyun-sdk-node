export interface ModifySagGlobalRouteProtocolRequest {
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
     * 路由协议。取值：
     * - **STATIC**：静态路由协议。
     * - **OSPF**：OSPF动态路由协议。
     * - **BGP**：BGP动态路由协议。
     * @example `OSPF`
     */
    "RouteProtocol": string;
}
