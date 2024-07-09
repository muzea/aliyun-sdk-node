export interface GetAutoIncrementUsageStatisticResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 任务是否结束：
         * - **true**：任务结束。
         * - **false**：任务未结束。
         * @example `false`
         */
        Finish: boolean;
        /**
         * 执行时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1697183353000`
         */
        Timestamp: number;
        /**
         * 任务状态：
         * - **INIT**：初始化。
         * - **RUNNING**：任务执行中。
         * - **SUCCESS**：任务成功。
         * - **FAIL**：任务失败。
         * @example `INIT`
         */
        TaskStatus: string;
        /**
         * 任务失败时的错误信息。
         * @example `the given database name list invalid, none of the database names in the list exist on the instance`
         */
        ErrorInfo: string;
        /**
         * 自增ID使用数据列表。
         */
        AutoIncrementUsageList: {
            /**
             * 数据库名。
             * @example `db01`
             */
            DbName: string;
            /**
             * 表名。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 列名。
             * @example `id`
             */
            ColumnName: string;
            /**
             * 自增ID当前值。
             * @example `2147483647`
             */
            AutoIncrementCurrentValue: number;
            /**
             * 该数据类型的自增ID支持的最大值。
             * @example `2147483647`
             */
            MaximumValue: number;
            /**
             * 自增ID使用比例。
             * @example `1`
             */
            AutoIncrementRatio: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `0A74B755-98B7-59DB-8724-1321B394****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
