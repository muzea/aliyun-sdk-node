export interface DescribeRTSNativeSDKVvDataResponse {
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
     * Id
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 起始时间
     * @example `2021-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 每个时间间隔的总播放次数和总成功播放次数，单位：次数。
     */
    VvData: {
        /**
         * 时间片起始时刻
         * @example `2021-12-10T20:00:00Z`
         */
        TimeStamp: string;
        /**
         * 指定时间内的成功播放的总次数
         * @example `99`
         */
        VvSuccess: string;
        /**
         * 指定时间内的总播放次数
         * @example `100`
         */
        VvTotal: string;
    }[];
}
