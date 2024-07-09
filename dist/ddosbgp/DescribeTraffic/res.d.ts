export interface DescribeTrafficResponse {
    /**
     * 本次请求的ID。
     * @example `6A507DC8-F657-4C13-84E2-D1D1B9400753`
     */
    RequestId: string;
    /**
     * 查询到的流量统计数据。
     */
    FlowList: {
        /**
         * 流量统计时间。使用时间戳表示，单位：秒。
         * @example `1620951900`
         */
        Time: number;
        /**
         * 流量统计数据的类型。取值：
         * - **max**：表示统计时间区间内的流量峰值。
         * - **avg**：表示统计时间区间内的流量均值。
         * @example `max`
         */
        FlowType: string;
        /**
         * 攻击流量的包转发率，单位：pps。
         * > 仅在有攻击流量时，返回该数据。
         * @example `0`
         */
        AttackPps: number;
        /**
         * 该次流量统计的ID。
         * @example `8e33f19e-5644-11eb-b5c1-d89d67182200`
         */
        Name: string;
        /**
         * 总流量的包转发率，单位：pps。
         * @example `274`
         */
        Pps: number;
        /**
         * 总流量的宽带速率，单位：Kbps。
         * @example `417`
         */
        Kbps: number;
        /**
         * 攻击流量的宽带速率，单位：bps。
         * > 仅在有攻击流量时，返回该数据。
         * @example `0`
         */
        AttackBps: number;
    }[];
}
