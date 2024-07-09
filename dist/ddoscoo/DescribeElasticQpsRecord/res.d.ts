export interface DescribeElasticQpsRecordResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F68B34E2-570C-508D-95FD-DFB6611D518F`
     */
    RequestId: string;
    /**
     * 实例QPS信息。
     */
    ElasticQpsList: {
        /**
         * 弹性QPS值，0表示未开启。
         * @example `300000`
         */
        OpsElasticQps: number;
        /**
         * DDoS高防实例的IP。
         * @example `203.***.***.199`
         */
        Ip: string;
        /**
         * 业务QPS（购买）。
         * @example `1345`
         */
        OriginQps: number;
        /**
         * 时间。单位：毫秒。
         * @example `1688140799999
        `
         */
        Date: number;
        /**
         * DDoS高防实例的ID。
         * @example `ddoscoo-cn-7e225i41****
        `
         */
        InstanceId: string;
        /**
         * 日95峰值。
         * @example `4367`
         */
        Qps: number;
        /**
         * 日峰值流量。
         * @example `122`
         */
        QpsPeak: number;
        /**
         * 实例售卖状态，取值：
         * - **1**：正常
         * - **2**：过期
         * - **4**：释放
         * @example `1`
         */
        Status: number;
        /**
         * 业务QPS（实际运行）。
         * @example `1345`
         */
        OpsQps: number;
    }[];
}
