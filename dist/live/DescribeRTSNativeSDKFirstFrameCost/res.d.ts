export interface DescribeRTSNativeSDKFirstFrameCostResponse {
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
     * 每个时间间隔的首帧组成平均延时，单位：毫秒
     */
    FirstFrameCostData: {
        /**
         * 初始化成功至建联成功耗时
         * @example `100`
         */
        Connected: string;
        /**
         * 建联成功至订阅成功耗时
         * @example `89`
         */
        FinishGetStreamInfo: string;
        /**
         * 首包成功至首帧成功耗时
         * @example `32`
         */
        FirstFrameComplete: string;
        /**
         * 订阅成功至首包成功耗时
         * @example `132`
         */
        FirstPacket: string;
        /**
         * 初始化耗时
         * @example `1100`
         */
        Initialized: string;
        /**
         * 时间片起始时刻
         * @example `2021-12-10T20:00:00Z`
         */
        TimeStamp: string;
    }[];
    /**
     * Id
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    /**
     * 起始时间
     * @example `2021-12-10T20:00:00Z`
     */
    StartTime: string;
}
