export interface DescribeSagRouteListResponse {
    /**
     * 请求ID。
     * @example `CE6642D4-21EB-4168-9BF9-F217953F9892`
     */
    RequestId: string;
    /**
     * 路由列表。
     */
    Routes: {
        /**
         * 下一跳。
         * @example `192.XX.XX.1`
         */
        NextHop: string;
        /**
         * 目标网段。
         * @example `6.XX.XX.6/32`
         */
        DestinationCidr: string;
        /**
         * 路由开销值。
         * 第一个0表示：路由协议管理距离（AD）。
         * 第二个0表示：度量值（metric）。
         * @example `[110/11]`
         */
        Cost: string;
        /**
         * 端口名称。端口名称为-1时表示数据流量通过VPN连接进入阿里云。
         * @example `2`
         */
        PortName: string;
        ConflictCidrs: string[];
        /**
         * 路由协议类型：
         * - **STATIC**：静态路由协议。
         * - **OSPF**：OSPF动态路由协议。
         * - **BGP**：BGP动态路由协议。
         * @example `STATIC`
         */
        RouteProtocol: string;
    }[];
}
