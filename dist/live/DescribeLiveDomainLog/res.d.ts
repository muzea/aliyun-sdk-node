export interface DescribeLiveDomainLogResponse {
    /**
     * 播流域名或推流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    DomainLogDetails: {
        /**
         * DomainLogDetail组成的数据。
         */
        DomainLogDetail: {
            /**
             * 本页返回的总条数。
             * @example `10`
             */
            LogCount: number;
            LogInfos: {
                /**
                 * LogInfoDetail组成的数据。
                 */
                LogInfoDetail: {
                    /**
                     * 结束时间。
                     * @example `2016-10-20T05:00:00Z`
                     */
                    EndTime: string;
                    /**
                     * 日志大小。
                     * @example `10`
                     */
                    LogSize: number;
                    /**
                     * 起始时间。
                     * @example `2016-10-20T04:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 日志名称。
                     * @example `developer.aliyundoc.com_2016_10_20_040000_050000.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * @example `learn.aliyundoc.com/developer.aliyundoc.com/2016_10_20/example.aliyundoc.com_2016_10_20_040000_050000.gz?Expires=1522659931&amp;OSSAccessKeyId=LTAI******eo4ZEuA&amp;Signature=C01p%2BtA%******KP9Sru2Oxwy7Do0%3D`
                     */
                    LogPath: string;
                }[];
            };
            /**
             * 页面信息。
             */
            PageInfos: {
                /**
                 * 返回数据的页码。
                 * @example `1`
                 */
                PageIndex: number;
                /**
                 * 分页大小。
                 * @example `20`
                 */
                PageSize: number;
                /**
                 * 总日志条数。
                 * @example `20`
                 */
                Total: number;
            };
        }[];
    };
}
