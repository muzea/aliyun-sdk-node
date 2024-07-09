export interface GetNatTopNResponse {
    /**
     * 请求ID。
     * @example `77C512B5-12f3-f892-BD94-88A98271C1A0`
     */
    RequestId: string;
    /**
     * NAT网关SNAT转发实时数据排名数组。
     */
    NatGatewayTopN: {
        /**
         * IP地址。
         * @example `192.168.156.101`
         */
        Ip: string;
        /**
         * 入方向流量。单位：bps。
         * @example `100`
         */
        InBps: number;
        /**
         * 出方向流量。单位：bps。
         * @example `200`
         */
        OutBps: number;
        /**
         * 入方向包速率。单位：个/秒。
         * @example `10`
         */
        InPps: number;
        /**
         * 出方向包速率。单位：个/秒。
         * @example `20`
         */
        OutPps: number;
        /**
         * 保留字段，暂未使用。
         * @example `10`
         */
        InFlowPerMinute: number;
        /**
         * 保留字段，暂未使用。
         * @example `10`
         */
        OutFlowPerMinute: number;
        /**
         * 新建连接数。单位：个/秒。
         * @example `2`
         */
        NewSessionPerSecond: number;
        /**
         * 并发连接数。单位：个。
         * @example `8`
         */
        ActiveSessionCount: number;
    }[];
    /**
     * 是否已开通网络智能服务(NIS)功能，未开通时NatGatewayTopN返回空。
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `true`
     */
    IsTopNOpen: boolean;
}
