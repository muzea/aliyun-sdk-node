export interface ViewSmartAccessGatewayRoutesResponse {
    /**
     * 请求ID。
     * @example `F3D21D0B-5258-5412-AD1C-3929D297286B`
     */
    RequestId: string;
    /**
     * 路由信息列表。
     */
    Routes: {
        /**
         * 接口编号。当取值为**-1**时表示下一跳指向VPN隧道。
         * 取值范围：**-1**~**4294967295**。
         * @example `2`
         */
        Idx: number;
        /**
         * 路由类型。取值：
         * - **static**：静态路由。
         * - **bgp**：BGP动态路由。
         * - **ospf**：OSPF动态路由。
         * @example `static`
         */
        Type: string;
        /**
         * 端口角色。
         * @example `WAN`
         */
        Role: string;
        /**
         * 目标网段。
         * @example `172.1.1.0/24`
         */
        Dst: string;
        /**
         * 下一跳。
         * @example `1.XX.XX.1`
         */
        Nexthop: string;
        /**
         * 冲突网段列表。
         */
        ConflictCidrs: string[];
        /**
         * 路由开销值。
         * 第一个**0**表示：路由协议管理距离（AD）。
         * 第二个**0**表示：度量值（metric）。
         * @example `[0/0]`
         */
        Cost: string;
    }[];
}
