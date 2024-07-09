export interface DescribeVodDomainLogResponse {
    /**
     * 请求ID。
     * @example `077D0284-F041-4A41-4D3C-B48377FD****`
     */
    RequestId: string;
    DomainLogDetails: {
        /**
         * CDN日志详细数据。
         */
        DomainLogDetail: {
            /**
             * 本页返回的总条数。
             * @example `2`
             */
            LogCount: number;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            LogInfos: {
                /**
                 * CDN日志详细信息。
                 */
                LogInfoDetail: {
                    /**
                     * 结束时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
                     * @example `2018-05-31T05:00:00Z`
                     */
                    EndTime: string;
                    /**
                     * 日志大小。
                     * @example `2645401`
                     */
                    LogSize: number;
                    /**
                     * 开始时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
                     * @example `2018-05-31T04:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 日志名称。
                     * @example `example.com_2018_03_25_180000_19****.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * @example `example.com/2018_03_25/example.com_2018_03_25_180000_19****.gz?Expires=1522659931&OSSAccessKeyId=****&Signature=****`
                     */
                    LogPath: string;
                }[];
            };
            /**
             * CDN日志翻页信息。
             */
            PageInfos: {
                /**
                 * 返回数据的页码。
                 * @example `1`
                 */
                PageNumber: number;
                /**
                 * 整页大小。
                 * @example `300`
                 */
                PageSize: number;
                /**
                 * 总条数。
                 * @example `2`
                 */
                Total: number;
            };
        }[];
    };
}
