export interface DownloadDataTrackResultRequest {
    /**
     * 工单ID，您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `406****`
     */
    "OrderId": number;
    /**
     * 生成SQL类型：
     * - **REVERSE**：撤销（回滚）已执行的SQL，相当于UNDO SQL。
     * - **FORWARD**：重新执行（重做）之前未执行成功的SQL，相当于REDO SQL。
     * @example `REVERSE`
     */
    "RollbackSQLType": string;
    /**
     * 数据追踪的起始时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2023-04-23 00:00:00`
     */
    "FilterStartTime"?: string;
    /**
     * 数据追踪的结束时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2023-04-23 10:00:00`
     */
    "FilterEndTime"?: string;
    /**
     * 追踪的表列表。
     */
    "FilterTableList"?: string[];
    /**
     * 追踪类型列表。
     */
    "FilterTypeList"?: string[];
    /**
     * 字段筛选条件。
     */
    "ColumnFilter"?: {
        /**
         * 字段名。
         * @example `account_name`
         */
        ColumnName: string;
        /**
         * 操作类型，取值和说明如下：
         * - **EQUAL**：等于。
         * - **NOT_EQUAL**：不等于。
         * - **IN**：存在于IN列表中。
         * - **BETWEEN**：范围。
         * - **LESS**：小于。
         * - **MORE**：大于。
         * - **NOT_IN**：不存在于IN列表中。
         * @example `EQUAL`
         */
        Operator: string;
        /**
         * 常量值。
         * @example `1`
         */
        Value: string;
        /**
         * 操作类型为BETWEEN 时，需要指定追踪范围起始值。
         * @example `1`
         */
        BetweenStart: string;
        /**
         * 操作类型为BETWEEN 时，需要指定追踪范围的终止值。
         * @example `10`
         */
        BetweenEnd: string;
        /**
         * 追踪范围列表。
         */
        InList: string[];
    };
    /**
     * 指定事件ID列表。
     */
    "EventIdList"?: number[];
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
