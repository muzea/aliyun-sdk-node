export interface DescribeDomainHitRateDataResponse {
    /**
     * 结束时间。
     * @example `2019-12-30T08:10:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-12-30T08:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    HitRateInterval: {
        /**
         * 每个时间间隔的字节命中百分占比数据列表。
         */
        DataModule: {
            /**
             * 命中率信息。
             * @example `100.0`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2019-12-30T08:00:00Z`
             */
            TimeStamp: string;
            /**
             * HTTPS字节命中率。
             * @example `50.0`
             */
            HttpsValue: string;
        }[];
    };
}
