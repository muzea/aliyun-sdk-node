export interface DescribeOnDemandDdosEventResponse {
    /**
     * 查询到的DDoS攻击事件的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `6A507DC8-F657-4C13-84E2-D1D1B9400753`
     */
    RequestId: string;
    /**
     * DDoS攻击事件详情列表。
     */
    Events: {
        /**
         * 攻击结束时间。使用时间戳表示，单位：秒。
         * @example `1557891306`
         */
        EndTime: number;
        /**
         * 事件的当前状态。取值：
         * - **hole_begin**：表示黑洞中。
         * - **hole_end**：表示黑洞结束。
         * - **defense_begin**：表示清洗中。
         * - **defense_end**：表示清洗结束。
         * @example `defense_end`
         */
        Status: string;
        /**
         * 攻击开始时间。使用时间戳表示，单位：秒。
         * @example `1557889506`
         */
        StartTime: number;
        /**
         * 攻击流量大小。单位：Mbps。
         * @example `110000`
         */
        Mbps: number;
        /**
         * 被攻击的IP。
         * @example `192.XX.XX.1`
         */
        Ip: string;
        /**
         * 攻击报文数量。单位：pps。
         * @example `0`
         */
        Pps: number;
    }[];
}
