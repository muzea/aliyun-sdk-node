export interface DiagnoseVpnConnectionsResponse {
    /**
     * 请求ID。
     * @example `B8094E1E-935B-1397-96A8-4F87A5D1BF29`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * IPsec-VPN连接的诊断信息列表。
     */
    VpnConnections: {
        /**
         * 在IPsec连接和对端网关设备配置的参数值不匹配的情况下，本参数表示对端网关设备配置的参数值。
         * @example `SHA`
         */
        MismatchRemoteParam: string;
        /**
         * 在IPsec连接和对端网关设备配置的参数值不匹配的情况下，本参数表示IPsec连接配置的参数值。
         * @example `SHA256`
         */
        MismatchLocalParam: string;
        /**
         * IPsec连接ID。
         * @example `vco-bp1spxu8hlcvpd7ry****`
         */
        VpnConnectionId: string;
        /**
         * 当前错误相关的日志信息。
         * @example `2023-01-13 11:39:21 vco-bp1spxu8hlcvpd7ry**** [PROTO_ERR]: ikev1.c:1433:isakmp_ph1resend(): phase1 negotiation failed due to time up. [{remote id:4}{ph1: 172.16.0.88[500] <=> 192.168.0.206[500], 172.16.0.88 <=> 192.168.0.206}]`
         */
        SourceLog: string;
        /**
         * 错误码。
         * @example `Phase1NegotiationTimeout`
         */
        FailedReasonCode: string;
        /**
         * IPsec-VPN连接发生当前错误的时间戳。单位：毫秒。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至IPsec-VPN连接发生当前错误时的总时长。
         * @example `1673581161000`
         */
        FailedTime: number;
        /**
         * 错误原因。
         * @example `Phase1 negotiation timeout`
         */
        FailedReason: string;
        /**
         * 当前错误等级。
         * - **Critical**：严重，请尽快排查处理。
         * - **Warn**：警告，建议尽快排查处理。
         * - **Normal**：正常。
         * @example `Warn`
         */
        Severity: string;
        /**
         * 隧道ID。
         * @example `tun-64n1sr9dig64k6****`
         */
        TunnelId: string;
    }[];
}
