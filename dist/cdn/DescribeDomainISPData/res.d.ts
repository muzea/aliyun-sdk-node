export interface DescribeDomainISPDataResponse {
    /**
     * 获取数据结束时间点。
     * @example `2019-11-30T05:40:00Z`
     */
    EndTime: string;
    /**
     * 获取数据起始时间点。
     * @example `2019-11-29T05:33:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `DE81639B-DAC1-4C76-AB72-F34B836837D5`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 时间间隔，单位：秒。
     * @example `86400`
     */
    DataInterval: string;
    Value: {
        /**
         * 各运营商访问占比数据列表。
         */
        ISPProportionData: {
            /**
             * 总请求次数。
             * @example `1`
             */
            TotalQuery: string;
            /**
             * 总流量。
             * @example `7081884`
             */
            TotalBytes: string;
            /**
             * 平均响应速度，单位：byte/毫秒。
             * @example `88.92594866772144`
             */
            AvgResponseRate: string;
            /**
             * 平均响应时间，单位：毫秒。
             * @example `79638.0`
             */
            AvgResponseTime: string;
            /**
             * 请求错误率。
             * @example `0.0`
             */
            ReqErrRate: string;
            /**
             * 响应平均大小，单位：byte。
             * @example `7081884.7`
             */
            AvgObjectSize: string;
            /**
             * 带宽。
             * @example `1311.4601296296296`
             */
            Bps: string;
            /**
             * 每秒查询率。
             * @example `2.3148148148148147E-5`
             */
            Qps: string;
            /**
             * 占比使用数据。
             * @example `0.004509176173513099`
             */
            Proportion: string;
            /**
             * 运营商英文名称。
             * @example `alibaba`
             */
            IspEname: string;
            /**
             * 运营商信息。
             * @example `阿里巴巴`
             */
            ISP: string;
            /**
             * 总流量占比。
             * @example `0.012220518530445479`
             */
            BytesProportion: string;
        }[];
    };
}
