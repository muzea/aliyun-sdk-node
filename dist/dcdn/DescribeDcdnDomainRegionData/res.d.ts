export interface DescribeDcdnDomainRegionDataResponse {
    /**
     * 结束时间。
     * @example `2015-12-07T12:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2015-12-05T12:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `2E5AD83F-BD7B-462E-8319-2E30E305519A`
     */
    RequestId: string;
    /**
     * 加速域名信息。
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
         * 各地区访问占比数据列表。
         */
        RegionProportionData: {
            /**
             * 每秒查询率。
             * @example `0`
             */
            Qps: string;
            /**
             * 总请求次数。
             * @example `0`
             */
            TotalQuery: string;
            /**
             * 总流量。
             * @example `0`
             */
            TotalBytes: string;
            /**
             * 地域英文名称。
             * @example `chongqing`
             */
            RegionEname: string;
            /**
             * 地域信息。
             * @example `重庆市`
             */
            Region: string;
            /**
             * 平均响应速度，单位：byte/秒。
             * @example `0`
             */
            AvgResponseRate: string;
            /**
             * 平均响应时间，单位：毫秒。
             * @example `0`
             */
            AvgResponseTime: string;
            /**
             * 访问占比数据。例如：返回90即为90% 。
             * @example `0`
             */
            Proportion: string;
            /**
             * 响应平均大小，单位：byte。
             * @example `0`
             */
            AvgObjectSize: string;
            /**
             * 带宽。
             * @example `0`
             */
            Bps: string;
            /**
             * 总流量占比。例如：返回90即为90%。
             * @example `0.003544181046236794`
             */
            BytesProportion: string;
        }[];
    };
}
