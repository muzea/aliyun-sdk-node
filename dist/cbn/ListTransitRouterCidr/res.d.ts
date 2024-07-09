export interface ListTransitRouterCidrResponse {
    /**
     * 请求ID。
     * @example `0876E54E-3E36-5C31-89F0-9EE8A9266F9A`
     */
    RequestId: string;
    /**
     * 转发路由器地址段列表。
     */
    CidrLists: {
        /**
         * 转发路由器地址段ID。
         * @example `cidr-0zv0q9crqpntzz****`
         */
        TransitRouterCidrId: string;
        /**
         * 转发路由器地址段类型。
         * 仅取值：**IPv4**，表示转发路由器地址段为IPv4类型的地址段。
         * @example `IPv4`
         */
        Family: string;
        /**
         * 转发路由器地址段的名称。
         * @example `nametest`
         */
        Name: string;
        /**
         * 转发路由器地址段的描述信息。
         * @example `desctest`
         */
        Description: string;
        /**
         * 转发路由器地址段。
         * @example `192.168.10.0/24`
         */
        Cidr: string;
        /**
         * 是否允许系统自动在转发路由器路由表中添加转发路由器地址段的路由。
         * - **true**：允许。
         *
         *     如果当前参数的返回值为**true**，则在您创建了私网网关类型的VPN连接，并为私网网关类型的VPN连接创建了路由学习关系后，系统自动在与VPN连接建立路由学习关系的转发路由器路由表中添加一条路由条目：
         *
         *   目标网段为转发路由器地址段的黑洞路由，其中转发路由器地址段指已为IPsec连接分配网关IP地址的地址段。
         *
         *   该黑洞路由仅会被传播至转发路由器下VBR实例的路由表中。
         * - **false**：不允许。
         * @example `true`
         */
        PublishCidrRoute: boolean;
        /**
         * 转发路由器实例ID。
         * @example `tr-p0w3x8c9em72a40nw****`
         */
        TransitRouterId: string;
    }[];
}
