export interface DescribeLivePushProxyLogResponse {
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
                     * 格式时间戳
                     * @example `1695189600`
                     */
                    EndTime: string;
                    /**
                     * 日志名称。
                     * @example `example.com
                    _2023_09_20_160000_170000.****.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * @example `****.aliyuncs.com/push_proxy/****​/example.com/2023_09_20/1600/example.com
                    _2023_09_20_160000_170000.****.gz`
                     */
                    LogPath: string;
                    /**
                     * 日志大小。
                     * @example `512`
                     */
                    LogSize: number;
                    /**
                     * 起始时间。
                     * 格式时间戳
                     * @example `1695193200`
                     */
                    StartTime: string;
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
                 * 分页大小。
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
    /**
     * 推流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `CF60DB6A-7FD6-426E-9288-122CC1A52FA7`
     */
    RequestId: string;
}
