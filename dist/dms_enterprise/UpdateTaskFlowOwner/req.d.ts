export interface UpdateTaskFlowOwnerRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，任务流的唯一标识。可通过调用[ListTaskFlowInstance](~~424689~~)接口获取该参数的值。
     * @example `15***`
     */
    "DagId": number;
    /**
     * 新Owner的用户ID。可通过调用接口[GetUser](~~147098~~)或[ListUsers](~~141938~~)获取UserId的值。
     * @example `51****`
     */
    "NewOwnerId": string;
}
