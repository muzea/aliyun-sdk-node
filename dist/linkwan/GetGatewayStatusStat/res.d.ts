export interface GetGatewayStatusStatResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 网关状态统计列表。
     */
    Data: {
        /**
         * 网关内存占用百分比，如42.0表示内存占用42%。
         * @example `42.0`
         */
        MemoryRadio: number;
        /**
         * 累计在线小时数。
         * @example `42`
         */
        OnlineHour: number;
        /**
         * 网关的启停用状态。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 累计TX。
         * @example `10`
         */
        TxCount: number;
        /**
         * 累计RX。
         * @example `10`
         */
        RxCount: number;
        /**
         * 网关的GwEUI。
         * @example `0000000000000000`
         */
        GwEui: string;
        /**
         * 网关在线状态。
         * @example `ONLINE`
         */
        OnlineState: string;
        /**
         * 网关CPU占用百分比，如10.5表示CPU占用10.5%。
         * @example `42.0`
         */
        CpuRadio: number;
    };
}
