export interface DescribeDnsGtmLogsResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `50C60A29-2E93-425A-ABA8-068686E28873`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    Logs: {
        /**
         * 日志列表。
         */
        Log: {
            /**
             * 操作时间（时间戳）。
             * @example `1516779348000`
             */
            OperTimestamp: number;
            /**
             * 操作对象Id。
             * @example `121212`
             */
            EntityId: string;
            /**
             * 操作的对象类型。
             * @example `地址池`
             */
            EntityType: string;
            /**
             * 操作时间。
             * @example `2018-01-24T07:35Z`
             */
            OperTime: string;
            /**
             * 操作的动作。
             * @example `增加`
             */
            OperAction: string;
            /**
             * 格式化的消息内容。
             * @example `addtest-pool-1`
             */
            Content: string;
            /**
             * 操作对象名称。
             * @example `test-pool-1`
             */
            EntityName: string;
            /**
             * 记录Id。
             * @example `6726`
             */
            Id: number;
        }[];
    };
    /**
     * 总个数。
     * @example `1`
     */
    TotalItems: number;
}
