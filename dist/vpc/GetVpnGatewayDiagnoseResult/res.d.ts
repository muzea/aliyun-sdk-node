export interface GetVpnGatewayDiagnoseResultResponse {
    /**
     * 诊断开始的时间。
     * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-12-15T05:28:57Z`
     */
    BeginTime: string;
    /**
     * 诊断ID。
     * @example `vpndgn-uf6sgneym02lxyuv4****`
     */
    DiagnoseId: string;
    /**
     * 诊断项信息列表。
     */
    DiagnoseResult: {
        /**
         * 诊断项。
         * - **RouteEntryConflict**：路由冲突。
         * - **VpnRouteQuota**：VPN网关目的路由配额。
         * - **VpnIPsecQuota**：VPN网关IPsec连接配额。
         * - **VpnPbrRouteQuota**：VPN网关策略路由配额。
         * - **VcoConfigConsistency**：IPsec配置一致性。
         * - **VcoUserInternetIpConnectivity**：用户网关公网连通性。
         * - **VcoPrivateConnectivity**：私网连通性。
         * 关于每个诊断项的说明信息，请参见[一键诊断背景信息](~~190330~~)。
         * @example `RouteEntryConflict`
         */
        DiagnoseName: string;
        /**
         * 诊断项的诊断结果。
         * 针对每个诊断项，接口会返回不同的信息，说明如下：
         * - **RouteEntryConflict**：系统会返回对应路由冲突的信息。
         * - **VpnRouteQuota**：
         *     - **quotaName**：目的路由配额ID。
         *     - **quantity**：当前VPN网关实例支持创建的目的路由条目数量。
         *     - **used**：当前VPN网关实例已创建的目的路由条目数量。
         * - **VpnIPsecQuota**：
         *     - **quotaName**：IPsec连接配额ID。
         *     - **quantity**：当前VPN网关实例支持创建的IPsec连接数量。
         *     - **used**：当前VPN网关实例已创建的IPsec连接数量。
         * - **VpnPbrRouteQuota**：
         *     - **quotaName**：策略路由配额ID。
         *     - **quantity**：当前VPN网关实例支持创建的策略路由条目数量。
         *     - **used**：当前VPN网关实例已创建的策略路由条目数量。
         * - **VcoConfigConsistency**：
         *     - **vcoLackConf**：系统无法获取IPsec连接对端的配置。
         *     - **vcoRunningConf**：IPsec连接对端已添加的配置信息。
         *     - **vcoDiffConf**：IPsec连接侧（本端）和对端不一致的配置列表。
         *     - **vcoConf**：IPsec连接侧（本端）已添加的配置信息。
         * - **VcoUserInternetIpConnectivity**：
         *     - **targetIp**：用户网关的公网IP地址。
         *     - **rtt**：系统访问用户网关公网IP地址时的时延。单位：ms。
         *     - **lossRate**：系统访问用户网关公网IP地址时的丢包率。
         * - **VcoPrivateConnectivity**：
         *     - **targetIp**：源IP地址。
         *     - **srcIp**：目的IP地址。
         *     - **rtt**：源IP地址访问目的IP地址时的时延。单位：ms。
         *     - **lossRate**：源IP地址访问目的IP地址时的丢包率。
         * @example `{\"targetIp\":\"192.168.0.1\",\"srcIp\":\"192.168.1.1\",\"rtt\":-1.0,\"lossRate\":100.0}`
         */
        DiagnoseResultDescription: string;
        /**
         * 诊断项的诊断结果级别。
         * - **normal**：正常。
         * - **warning**：警告。
         * - **error**：异常。
         * 关于每个诊断项对应的每个诊断结果级别的说明，请参见[一键诊断背景信息](~~190330~~)。
         * @example `normal`
         */
        DiagnoseResultLevel: string;
    }[];
    /**
     * 诊断结束的时间。
     * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-12-15T05:29:08Z`
     */
    FinishTime: string;
    /**
     * 已完成诊断的诊断项数量。
     * @example `7`
     */
    FinishedCount: number;
    /**
     * 请求ID。
     * @example `312C4D5A-6563-5FC6-8C6E-A43A5A316FEB`
     */
    RequestId: string;
    /**
     * 诊断的资源ID。
     * @example `vco-uf6huqsu63azl7mdp****`
     */
    ResourceInstanceId: string;
    /**
     * 诊断的资源类型。
     * 取值：**IPsec**，表示IPsec连接。
     * @example `IPsec`
     */
    ResourceType: string;
    /**
     * 诊断项总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * VPN网关实例ID。
     * @example `vpn-uf6fzwp0ck3frwtbk****`
     */
    VpnGatewayId: string;
}
