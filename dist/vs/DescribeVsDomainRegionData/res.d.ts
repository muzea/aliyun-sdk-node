export interface DescribeVsDomainRegionDataResponse {
    /**
     * 结束时间
     * @example `2021-10-31T15:59:59Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2021-10-30T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 时间间隔。
     * @example `3600`
     */
    DataInterval: string;
    Value: {
        /**
         * 数据。
         */
        RegionProportionData: {
            /**
             * 总请求次数
             * @example `3`
             */
            TotalQuery: string;
            /**
             * 总流量
             * @example `2400057`
             */
            TotalBytes: string;
            /**
             * 平均响应速度，单位：byte/秒
             * @example `154.3345765545624`
             */
            AvgResponseRate: string;
            /**
             * 平均响应时间，单位：毫秒。
             * @example `5183.666666666667`
             */
            AvgResponseTime: string;
            /**
             * 请求错误率，例如返回90即为90%。
             * @example `0`
             */
            ReqErrRate: string;
            /**
             * 响应平均大小。单位：byte。
             * @example `2888253.7875`
             */
            AvgObjectSize: string;
            /**
             * 带宽。
             * @example `380.9614285714286`
             */
            Bps: string;
            /**
             * 每秒查询率。
             * @example `0.001746031746031746`
             */
            Qps: string;
            /**
             * 地区英文名称。
             * @example `chongqing`
             */
            RegionEname: string;
            /**
             * 地区信息。
             * @example `重庆市`
             */
            Region: string;
            /**
             * 访问占比数据。例如：返回90即为90% 。
             * @example `0.01155980271270037`
             */
            Proportion: string;
            /**
             * 总流量占比，例如返回90即为90%。
             * @example `0.003544181046236794`
             */
            BytesProportion: string;
        }[];
    };
}
