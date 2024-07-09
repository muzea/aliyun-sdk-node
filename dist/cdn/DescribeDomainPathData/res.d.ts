export interface DescribeDomainPathDataResponse {
    /**
     * 结束时间。
     * @example `2017-09-30T17:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2017-09-30T16:00:00Z`
     */
    StartTime: string;
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页码，从**1**开始计数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 路径带宽数据条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    PathDataPerInterval: {
        /**
         * 路径带宽数据列表。
         */
        UsageData: {
            /**
             * 路径。
             * @example `/path/`
             */
            Path: string;
            /**
             * 时间点。
             * @example `2017-09-30T16:00:00Z`
             */
            Time: string;
            /**
             * 访问次数。
             * @example `10`
             */
            Acc: number;
            /**
             * 流量（B）。
             * @example `346`
             */
            Traffic: number;
        }[];
    };
}
