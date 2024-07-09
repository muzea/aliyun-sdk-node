export interface DescribeDcdnDomainHitRateDataResponse {
    /**
     * 结束时间。
     * @example `2018-03-02T15:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2018-03-02T12:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `4D07ABFE-4737-4834-B1B9-A661308C47B4`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，以秒为单位。
     * @example `3600`
     */
    DataInterval: string;
    HitRatePerInterval: {
        /**
         * 每个时间间隔的命中百分占比。
         */
        DataModule: {
            /**
             * 时间片起始时刻。
             * @example `2018-03-02T13:00:00Z`
             */
            TimeStamp: string;
            /**
             * 字节命中百分占比。
             * @example `0`
             */
            ByteHitRate: number;
            /**
             * 请求命中百分占比。
             * @example `0`
             */
            ReqHitRate: number;
        }[];
    };
}
