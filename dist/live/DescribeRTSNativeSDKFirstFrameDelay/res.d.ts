export interface DescribeRTSNativeSDKFirstFrameDelayResponse {
    /**
     * 时间粒度
     * @example `300`
     */
    DataInterval: string;
    /**
     * 结束时间
     * @example `2021-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 每个时间间隔的首帧平均延时，单位：毫秒
     */
    FrameDelayData: {
        /**
         * 该时间段的平均首帧延时
         * @example `400`
         */
        FrameDelay: string;
        /**
         * 时间片起始时刻
         * @example `2021-12-10T20:00:00Z`
         */
        TimeStamp: string;
    }[];
    /**
     * Id
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 起始时间
     * @example `2021-12-10T20:00:00Z`
     */
    StartTime: string;
}
