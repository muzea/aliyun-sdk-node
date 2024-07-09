export interface DescribeDcdnDomainBpsDataResponse {
    /**
     * 结束时间。
     * @example `2017-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-12-10T10:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 数据的时间粒度。
     * @example `300`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 静态https bps数据值，单位：bit/s。
             * @example `123`
             */
            StaticHttpsBps: number;
            /**
             * bps数据值，单位：bit/s。
             * @example `11286`
             */
            Bps: number;
            /**
             * 动态https bps数据值，单位：bit/s。
             * @example `12312`
             */
            DynamicHttpsBps: number;
            /**
             * 动态http bps数据值，单位：bit/s。
             * @example `11286111`
             */
            DynamicHttpBps: number;
            /**
             * 静态http bps数据值，单位：bit/s。
             * @example `123`
             */
            StaticHttpBps: number;
        }[];
    };
}
