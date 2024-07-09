export interface DescribeScdnDomainBpsDataResponse {
    /**
     * 结束时间
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2017-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 安全加速域名
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位
     * @example `300`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据
         */
        DataModule: {
            /**
             * bps数据值，单位：bit/second
             * @example `11288111`
             */
            BpsValue: string;
            /**
             * 时间片起始时刻
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * https bps数据值，单位：bit/second
             * @example `2000`
             */
            HttpsBpsValue: string;
            /**
             * http bps数据值，单位：bit/second
             * @example `11286111`
             */
            HttpBpsValue: string;
        }[];
    };
}
