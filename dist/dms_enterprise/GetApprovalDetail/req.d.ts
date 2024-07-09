export interface GetApprovalDetailRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 审批流ID，可通过调用接口[GetOrderBaseInfo](~~144642~~)获取该参数的值。
     * @example `184****`
     */
    "WorkflowInstanceId": number;
}
