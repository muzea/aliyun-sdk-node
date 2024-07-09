export interface GetDBTaskSQLJobLogRequest {
    /**
     * SQL任务ID，可通过调用接口[ListDBTaskSQLJob](~~207049~~)获取该参数的值。
     * @example `1276****`
     */
    "JobId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
