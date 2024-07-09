export interface DescribeDomainQpsDataResponse {
    /**
     * 结束时间。
     * @example `2019-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-11-30T05:33:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `B8333EDB-4595-46E0-AFE9-29BAA290D0E0`
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
    QpsDataInterval: {
        /**
         * 每个时间间隔的QPS数据列表。
         */
        DataModule: {
            /**
             * 总访问次数。
             * @example `0`
             */
            AccValue: string;
            /**
             * 中国内地访问次数。
             * @example `0`
             */
            AccDomesticValue: string;
            /**
             * 全球（不包含中国内地）访问次数。
             * @example `0`
             */
            AccOverseasValue: string;
            /**
             * 节点HTTPS的QPS值。
             * @example `1`
             */
            HttpsValue: string;
            /**
             * 节点HTTPS全球（不包含中国内地）QPS值。
             * @example `1`
             */
            HttpsOverseasValue: string;
            /**
             * 中国内地QPS。
             * @example `0`
             */
            DomesticValue: string;
            /**
             * 节点全球（不包含中国内地）HTTPS请求数。
             * @example `1`
             */
            HttpsAccOverseasValue: string;
            /**
             * 节点HTTPS中国内地QPS值。
             * @example `1`
             */
            HttpsDomesticValue: string;
            /**
             * 节点HTTPS请求数。
             * @example `1`
             */
            HttpsAccValue: string;
            /**
             * 总QPS。
             * @example `0`
             */
            Value: string;
            /**
             * 全球（不包含中国内地）QPS。
             * @example `0`
             */
            OverseasValue: string;
            /**
             * 时间片起始时刻。
             * @example `2019-11-30T05:40:00Z`
             */
            TimeStamp: string;
            /**
             * 节点中国内地HTTPS请求数。
             * @example `1`
             */
            HttpsAccDomesticValue: string;
        }[];
    };
}
