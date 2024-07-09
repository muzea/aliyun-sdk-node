export interface ApproveProvisionedProductPlanRequest {
    /**
     * 计划ID。
     * @example `plan-bp1jvmdk2k****`
     */
    "PlanId": string;
    /**
     * 审批动作。取值：
     * - Approve：同意。
     * - Reject：拒绝。
     * @example `Approve`
     */
    "ApprovalAction": string;
    /**
     * 审批意见。
     * @example `审批通过，允许创建资源`
     */
    "Comment"?: string;
}
