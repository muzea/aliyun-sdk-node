export interface DescribeDcdnDomainLogResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `95594003-CAC5-5636-AF72-2A094364****`
     */
    RequestId: string;
    DomainLogDetails: {
        /**
         * DomainLogDetail组成的数据。
         */
        DomainLogDetail: {
            /**
             * 本页返回的总条数。
             * @example `4`
             */
            LogCount: number;
            LogInfos: {
                /**
                 * LogInfoDetail组成的数据。
                 */
                LogInfoDetail: {
                    /**
                     * 结束时间。
                     * @example `2021-11-07T18:00:00Z`
                     */
                    EndTime: string;
                    /**
                     * 日志大小，单位：字节。
                     * @example `192`
                     */
                    LogSize: number;
                    /**
                     * 开始时间。
                     * @example `2021-11-07T17:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 日志名称。
                     * @example `example.com_2021_11_08_010000_020000.gz`
                     */
                    LogName: string;
                    /**
                     * 日志路径。
                     * 需要关注返回参数LogPath中的字段Expires（过期时间戳），过期后日志下载链接失效，需要重新获取。更多信息，请参见[LogPath字段信息](~~31952~~)
                     * @example `example.aliyundoc.com /v1.l1cache/105252530/example.com/2021_11_08/example.com_2021_11_08_010000_020000.gz?Expires=1636963354&OSSAccessKeyId=LTAIviCc6zy8****&Signature=u0V6foRfZniHE8i%2BHUdxGOhZsK****`
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
                 * @example `10`
                 */
                PageSize: number;
                /**
                 * 总条数。
                 * @example `4`
                 */
                Total: number;
            };
        }[];
    };
}
