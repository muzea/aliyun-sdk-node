export interface InvokeFlowResponse {
    /**
     * 本次请求的ID
     * @example `5CE7EAE6-XXXX-XXXX-A1A3-D3C2AE624000`
     */
    RequestId: string;
    /**
     * 是否运行成功。
     * - **true**：工作流已经被触发
     * - **false**：触发失败
     * > 如果需要查询工作流运行结果，请使用**GetInvocationLog**查询运行结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次运行的唯一标识符
     * @example `6b387696-d160-4ed7-xxxx-070ac29dce4d`
     */
    InvocationId: string;
}
