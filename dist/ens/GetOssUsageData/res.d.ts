export interface GetOssUsageDataResponse {
    /**
     * 请求ID。
     * @example `2A8CCD48-14F9-0309-B957-7B1D74A8119D`
     */
    RequestId: string;
    /**
     * 用量数组。
     */
    UsageList: {
        /**
         * 内网入向带宽，单位：Bps。
         * @example `37865147`
         */
        LanRxBw: number;
        /**
         * 内网出向带宽，单位：Bps。
         * @example `22012187890`
         */
        LanTxBw: number;
        /**
         * 一天内的时间点编号。
         * @example `144`
         */
        Point: number;
        /**
         * 时间点，UTC时间，格式：2010-01-21T09:50:23Z。
         * @example `2022-01-12T00:00:00Z`
         */
        PointTs: string;
        /**
         * 存储用量，单位：byte。
         * @example `85462146217`
         */
        StorageUsageByte: number;
        /**
         * 外网入向带宽，单位：Bps。
         * @example `542155715`
         */
        WanRxBw: number;
        /**
         * 外网出向带宽，单位：Bps。
         * @example `547126175217`
         */
        WanTxBw: number;
    }[];
}
