export interface DescribeScdnDomainLogResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `077D0284-F041-4A41-A932-B48377FDAA25`
     */
    RequestId: string;
    DomainLogDetails: {
        /**
         * DomainLogDetail组成的数据。
         */
        DomainLogDetail: {
            /**
             * 本页返回的总条数。
             * @example `20`
             */
            LogCount: number;
            LogInfos: {
                /**
                 * LogInfoDetail组成的数据。
                 */
                LogInfoDetail: {
                    /**
                     * 结束时间。
                     * @example `1521975600`
                     */
                    EndTime: string;
                    /**
                     * 日志大小。
                     * @example `2645401`
                     */
                    LogSize: number;
                    /**
                     * 开始时间。
                     * @example `1521972000`
                     */
                    StartTime: string;
                    /**
                     * 日志名称。
                     * @example `example.com_2018_03_25_180000_190000.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * @example `cdnlog2.aliyuncs.com/example.com/2018_03_25/example.com_2018_03_25_180000_190000.gz?`
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
                PageNumber: number;
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
