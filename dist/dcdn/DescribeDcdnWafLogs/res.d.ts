export interface DescribeDcdnWafLogsResponse {
    /**
     * DomainLogDetail组成的数据列表。
     */
    DomainLogDetails: {
        /**
         * WAF域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 本页返回的总条数。
         * @example `10`
         */
        LogCount: number;
        /**
         * LogInfoDetail组成的数据列表。
         */
        LogInfos: {
            /**
             * 结束时间。
             * @example `2015-05-23T14:00:00Z`
             */
            EndTime: string;
            /**
             * 日志名称。
             * @example `demo.aliyundoc.com_2015_05_23_2100_2200.xxxxxx.gz`
             */
            LogName: string;
            /**
             * 日志路径。
             * @example `guide.aliyundoc.com-hangzhou.xxx`
             */
            LogPath: string;
            /**
             * 日志大小，单位：字节。
             * @example `258`
             */
            LogSize: number;
            /**
             * 开始时间。
             * @example `2015-05-23T13:00:00Z`
             */
            StartTime: string;
        }[];
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
    /**
     * 请求ID。
     * @example `0985A362-C81E-5A56-891D-90226BEECA7C`
     */
    RequestId: string;
}
