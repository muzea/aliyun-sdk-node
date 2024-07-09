export interface DescribeRecordLogsResponse {
    /**
     * 日志列表总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次查询获取的日志数量。
     * @example `2`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    RecordLogs: {
        /**
         * 域名操作日志列表。
         */
        RecordLog: {
            /**
             * 操作行为
             * @example `暂停解析记录`
             */
            Action: string;
            /**
             * 操作时间戳
             * @example `134514540000`
             */
            ActionTimestamp: number;
            /**
             * 操作者IP
             * @example `192.0.2.0`
             */
            ClientIp: string;
            /**
             * 操作消息
             * @example `MX记录 mail 默认 xxxx.top. ( TTL: 600)`
             */
            Message: string;
            /**
             * 操作时间
             * @example `2015-12-12T09:23Z`
             */
            ActionTime: string;
        }[];
    };
}
