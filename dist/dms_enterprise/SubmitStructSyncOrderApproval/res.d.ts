export interface SubmitStructSyncOrderApprovalResponse {
    /**
     * 请求ID。
     * @example `4E1D2B4D-3E53-4ABC-999D-1D2520B3471D`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 审批流程ID。
     * @example `432523`
     */
    WorkflowInstanceId: number;
}
