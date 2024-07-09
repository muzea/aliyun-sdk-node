export interface DescribeDomainRegionDataResponse {
    /**
     * 获取数据结束时间。
     * @example `2015-12-07T12:00:00Z`
     */
    EndTime: string;
    /**
     * 获取数据起始时间。
     * @example `2015-12-05T12:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `2E5AD83F-BD7B-462E-8319-2E30E305519A`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `86400`
     */
    DataInterval: string;
    Value: {
        /**
         * 各地域访问占比数据列表。
         */
        RegionProportionData: {
            /**
             * 总请求次数。
             * @example `3`
             */
            TotalQuery: string;
            /**
             * 总流量，单位：Byte。
             * @example `2400057`
             */
            TotalBytes: string;
            /**
             * 平均响应速度，单位：Bps。
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
             * @example `0.0`
             */
            ReqErrRate: string;
            /**
             * 响应平均大小，单位：Byte。
             * @example `800019.0`
             */
            AvgObjectSize: string;
            /**
             * 带宽。
             * @example `380.9614285714286`
             */
            Bps: string;
            /**
             * 每秒查询率。
             * @example `5.9523809523809524E-5`
             */
            Qps: string;
            /**
             * 地区英文名称。
             * @example `japan`
             */
            RegionEname: string;
            /**
             * 地域信息。
             * @example `日本`
             */
            Region: string;
            /**
             * 访问占比数据，例如返回90即为90%。
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
