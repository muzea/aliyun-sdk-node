export interface DescribeDdosEventResponse {
    /**
     * 查询到的DDoS攻击事件的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `F3B6C3F9-6B21-519D-B976-A1E14166F909`
     */
    RequestId: string;
    /**
     * DDoS攻击事件详情列表。
     */
    Events: {
        /**
         * 攻击结束时间。使用时间戳表示，单位：秒。
         * @example `1637554335`
         */
        EndTime: number;
        /**
         * 攻击事件的当前状态。取值：
         * - **hole_begin**：表示被攻击IP正处于黑洞状态。
         * - **hole_end**：表示被攻击IP已从黑洞状态中解除。
         * - **defense_begin**：表示正在清洗攻击流量。
         * - **defense_end**：表示已结束攻击流量清洗。
         * @example `defense_end`
         */
        Status: string;
        /**
         * 攻击结束时间。使用时间戳表示，单位：秒。
         * @example `1637554034`
         */
        StartTime: number;
        /**
         * 攻击开始时刻的请求流量大小。单位：Mbps。
         * @example `0`
         */
        Mbps: number;
        /**
         * 被攻击的IP。
         * @example `47.89.XX.XX`
         */
        Ip: string;
        /**
         * 攻击开始时刻的报文数量大小。单位：pps
         * @example `456`
         */
        Pps: number;
    }[];
}
