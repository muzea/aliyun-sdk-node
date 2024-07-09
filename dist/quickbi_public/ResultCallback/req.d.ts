export interface ResultCallbackRequest {
    /**
     * 审批流的ID。
     * @example `c5ea0db8-****-****-9081-04bc0df4c6a3`
     */
    "ApplicationId": string;
    /**
     * 审批理由。
     * @example `你不是A部门分析师。`
     */
    "HandleReason": string;
    /**
     * 审批结果：
     * - 1：通过
     * - 2：拒绝
     * @example `1`
     */
    "Status": number;
}
