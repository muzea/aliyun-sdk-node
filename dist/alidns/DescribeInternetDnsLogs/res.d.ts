export interface DescribeInternetDnsLogsResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 解析日志查询是否精确。
     * @example `true`
     */
    Complete: boolean;
    Logs: {
        /**
         * 日志列表。
         */
        Log: {
            /**
             * 解析日志ID（会重复）。
             * @example `3583`
             */
            DnsMsgId: string;
            /**
             * 解析时间戳。
             * @example `1709196249000`
             */
            LogTime: number;
            /**
             * 域名（Zone）名称
             * @example `example.com`
             */
            ZoneName: string;
            /**
             * 是指子域名，即查询的解析记录的域名。
             * @example `www.example.com`
             */
            QueryName: string;
            /**
             * 记录类型。
             * @example `A`
             */
            QueryType: string;
            /**
             * 解析响应时间。
             * @example `0`
             */
            Rt: number;
            /**
             * 解析服务器IP。
             * @example `140.205.XX.XX`
             */
            ServerIp: string;
            /**
             * 源IP地址。
             * @example `59.82.XX.XX`
             */
            SourceIp: string;
            /**
             * 响应状态。
             * @example `NOERROR`
             */
            Status: string;
            /**
             * edns-client-subnet 可选项设置的值。
             * @example `170.33.XX.XX`
             */
            SubnetIp: string;
            Value: {
                /**
                 * 解析结果数组。
                 */
                Value: string[];
            };
        }[];
    };
    /**
     * 分页查询大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    CurPage: number;
    /**
     * 总页数。
     * @example `5`
     */
    TotalPage: number;
    /**
     * 总数量。
     * @example `48`
     */
    TotalSize: number;
}
