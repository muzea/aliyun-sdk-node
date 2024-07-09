export interface DescribeVodDomainQpsDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
     * @example `2024-05-02T15:59:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
     * @example `2024-05-02T15:50:00Z`
     */
    StartTime: string;
    /**
     * 请求id。
     * @example `25818875-5F78-4AF6-D7393642CA58*****`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。
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
             * 节点https的qps值。
             * @example `1`
             */
            HttpsValue: string;
            /**
             * 节点https海外qps值。
             * @example `1`
             */
            HttpsOverseasValue: string;
            /**
             * 中国内地qps。
             * @example `0`
             */
            DomesticValue: string;
            /**
             * 节点https请求数。
             * @example `1`
             */
            HttpsAccOverseasValue: string;
            /**
             * 节点https中国内地qps值。
             * @example `1`
             */
            HttpsDomesticValue: string;
            /**
             * 节点https请求数。
             * @example `1`
             */
            HttpsAccValue: string;
            /**
             * 总qps。
             * @example `0`
             */
            Value: string;
            /**
             * 海外qps。
             * @example `0`
             */
            OverseasValue: string;
            /**
             * 时间片起始时刻。使用utc时间，格式：yyyy-mm-ddthh:mm:ssz。
             * @example `2023-06-27 10:10:58`
             */
            TimeStamp: string;
            /**
             * 节点https中国内地qps值。
             * @example `1`
             */
            HttpsAccDomesticValue: string;
        }[];
    };
}
