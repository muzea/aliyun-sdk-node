export interface DescribeDomainLogsResponse {
    /**
     * 日志列表中日志的数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次查询获取的日志数量。
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    DomainLogs: {
        /**
         * 域名操作日志列表。
         */
        DomainLog: {
            /**
             * 操作行为。
             * @example `添加`
             */
            Action: string;
            /**
             * 操作时间戳。
             * @example `143562300000`
             */
            ActionTimestamp: number;
            /**
             * Zone ID。
             * @example `cxfd345sd234`
             */
            ZoneId: string;
            /**
             * 操作者IP。
             * @example `182.92.XX.XX`
             */
            ClientIp: string;
            /**
             * 操作消息。
             * @example `添加到域名解析列表`
             */
            Message: string;
            /**
             * 操作时间。
             * @example `2015-12-12T09:23Z`
             */
            ActionTime: string;
            /**
             * 域名名称。
             * @example `dns-example.top`
             */
            DomainName: string;
        }[];
    };
}
