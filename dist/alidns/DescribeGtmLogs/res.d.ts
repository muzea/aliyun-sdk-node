export interface DescribeGtmLogsResponse {
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `50C60A29-2E93-425A-ABA8-068686E28873`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `224`
     */
    TotalPages: number;
    Logs: {
        /**
         * 日志列表。
         */
        Log: {
            /**
             * 操作时间（时间戳）
             * @example `1516779348000`
             */
            OperTimestamp: number;
            /**
             * 操作对象ID
             * @example `121212`
             */
            EntityId: string;
            /**
             * 操作的对象类型
             * @example `POOL`
             */
            EntityType: string;
            /**
             * 操作时间
             * @example `2018-01-24T07:35Z`
             */
            OperTime: string;
            /**
             * 操作ip
             * @example `106.11.34.X`
             */
            OperIp: string;
            /**
             * 操作的动作
             * @example `add`
             */
            OperAction: string;
            /**
             * 格式化的消息内容
             * @example `addtest-pool-1`
             */
            Content: string;
            /**
             * 操作对象名称
             * @example `test-pool-1`
             */
            EntityName: string;
            /**
             * 记录ID
             * @example `6726`
             */
            Id: number;
        }[];
    };
    /**
     * 总个数。
     * @example `224`
     */
    TotalItems: number;
}
