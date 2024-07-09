export interface ExecuteDataCorrectRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: string;
    /**
     * 工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `406****`
     */
    "OrderId": number;
    /**
     * 执行数据变更的参数设置：
     * ```
     * json
     * "actionDetail" : {
     *     "startTime" :"2021-07-01 00:00:00", // 设置定时执行的执行时间，若您选择立即执行不需要设置该参数。
     *     "endTime" : "2021-07-01 01:00:00", // 设置定时执行的结束时间，若您选择立即执行不需要设置该参数。
     *     "transaction" : false,  // 选择是否以事务方式运行。
     *     "backupData" : true // 选择是否备份数据。
     *   }
     * ```
     * @example `{ "startTime" : "2021-07-01 00:00:00", "endTime" : "2021-07-01 01:00:00", "transaction" : false, "backupData" : true }`
     */
    "ActionDetail"?: any;
}
