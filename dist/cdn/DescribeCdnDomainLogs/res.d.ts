export interface DescribeCdnDomainLogsResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    DomainLogDetails: {
        /**
         * DomainLogDetail组成的数据列表。
         */
        DomainLogDetail: {
            /**
             * 本页返回的总条数。
             * @example `10`
             */
            LogCount: number;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
            LogInfos: {
                /**
                 * LogInfoDetail组成的数据列表。
                 */
                LogInfoDetail: {
                    /**
                     * 结束时间。
                     * @example `2015-05-23T14:00:00Z`
                     */
                    EndTime: string;
                    /**
                     * 日志大小。
                     * @example `258`
                     */
                    LogSize: number;
                    /**
                     * 开始时间。
                     * @example `2015-05-23T13:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 日志名称。
                     * @example `demo.aliyundoc.com_2015_05_23_2100_2200.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * @example `guide.aliyundoc.com-hangzhou.xxx`
                     */
                    LogPath: string;
                }[];
            };
            /**
             * PageInfoDetail组成的数据。
             */
            PageInfos: {
                /**
                 * 返回数据的页码。
                 * @example `1`
                 */
                PageIndex: number;
                /**
                 * 整页大小。
                 * @example `20`
                 */
                PageSize: number;
                /**
                 * 总条数。
                 * @example `20`
                 */
                Total: number;
            };
        }[];
    };
}
