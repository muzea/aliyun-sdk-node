export interface GetOnlineDDLProgressRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * OnlineDDL SQL任务详情ID。您可通过调用[ListDBTaskSQLJobDetail](~~207073~~)接口获取该参数的值。
     * @example `15***`
     */
    "JobDetailId": number;
}
