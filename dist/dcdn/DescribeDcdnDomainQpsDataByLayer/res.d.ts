export interface DescribeDcdnDomainQpsDataByLayerResponse {
    /**
     * 结束时间。
     * @example `2015-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 返回的Layer。
     * @example `all`
     */
    Layer: string;
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
    QpsDataInterval: {
        /**
         * 每个时间间隔的每秒访问次数QPS。
         */
        DataModule: {
            /**
             * QPS总数。
             * @example `0.56`
             */
            Value: string;
            /**
             * 总请求次数。
             * @example `56`
             */
            AccValue: string;
            /**
             * 中国内地请求数。
             * @example `12`
             */
            AccDomesticValue: string;
            /**
             * 全球（不包含中国内地）QPS。
             * @example `0.44`
             */
            OverseasValue: string;
            /**
             * 全球（不包含中国内地）请求数。
             * @example `44`
             */
            AccOverseasValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T21:00:00Z`
             */
            TimeStamp: string;
            /**
             * 中国内地QPS。
             * @example `0.12`
             */
            DomesticValue: string;
        }[];
    };
}
