export interface CreateVcoRouteEntryResponse {
    /**
     * IPsec连接的ID。
     * @example `vco-p0w2jpkhi2eeop6q6****`
     */
    VpnConnectionId: string;
    /**
     * 目的路由条目的目标网段。
     * @example `192.168.10.0/24`
     */
    RouteDest: string;
    /**
     * 目的路由条目的下一跳。
     * @example `vco-p0w2jpkhi2eeop6q6****`
     */
    NextHop: string;
    /**
     * 目的路由条目的权重值。
     * - **0**：表示低优先级。
     * - **100**：表示高优先级。
     * @example `100`
     */
    Weight: number;
    /**
     * 隧道协议。
     * 仅取值：**Ipsec**，表示IPsec隧道协议。
     * @example `Ipsec`
     */
    OverlayMode: string;
    /**
     * 目的路由条目的发布状态。
     * 仅取值：**published**，表示当前路由条目已发布至转发路由器实例中。
     * @example `published`
     */
    State: string;
    /**
     * 创建目的路由条目的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建目的路由条目时的总时长。
     * @example `1658387202664`
     */
    CreateTime: number;
    /**
     * 请求ID。
     * @example `CFC4D13B-E680-3985-95B1-87AA155481DF`
     */
    RequestId: string;
    /**
     * 目的路由条目的描述信息。
     * @example `desctest`
     */
    Description: string;
}
