export interface DescribeRTSNativeSDKPlayFailStatusResponse {
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
     * 每个时间间隔的错误状态码总数，单位：次数
     */
    PlayFailStatus: {
        /**
         * 时间片起始时刻
         * @example `2021-12-10T20:00:00Z`
         */
        TimeStamp: string;
        /**
         * DNS解析失败
         * @example `1`
         */
        V20001: string;
        /**
         * 鉴权失败
         * @example `2`
         */
        V20002: string;
        /**
         * 建联信令超时
         * @example `3`
         */
        V20011: string;
        /**
         * 订阅信令返回错误
         * @example `4`
         */
        V20012: string;
        /**
         * 订阅流不存在
         * @example `5`
         */
        V20013: string;
        /**
         * 媒体收包超时
         * @example `6`
         */
        V20052: string;
    }[];
    /**
     * Id
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 起始时间
     * @example `2021-12-10T20:00:00Z
    `
     */
    StartTime: string;
}
