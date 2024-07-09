export interface DescribeRTSNativeSDKPlayTimeResponse {
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
     * 每个时间间隔的的平均播放时长、平均卡顿时长，单位：毫秒
     */
    PlayTimeData: {
        /**
         * 该时间段的平均播放时长
         * @example `1000`
         */
        PlayTime: string;
        /**
         * 该时间段的平均卡顿时长
         * @example `100`
         */
        StallTime: string;
        /**
         * 时间片起始时刻
         * @example `2021-12-10T20:00:00Z`
         */
        TimeStamp: string;
    }[];
    /**
     * Id
     * @example `7BF95F2A-3B24-4CDE-9346-7F6FA86697A1`
     */
    RequestId: string;
    /**
     * 起始时间
     * @example `2021-12-10T20:00:00Z`
     */
    StartTime: string;
}
