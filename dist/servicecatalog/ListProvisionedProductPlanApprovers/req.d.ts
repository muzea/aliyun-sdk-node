export interface ListProvisionedProductPlanApproversRequest {
    /**
     * 访问过滤器。取值：
     * - User（默认值）：用户。
     * - Account：账号。
     * - ResourceDirectory：资源目录。
     * > 必须指定`ApprovalFilter`和`AccessLevelFilter`两个参数中的一个参数，但不能同时指定。
     * @example `User`
     */
    "AccessLevelFilter"?: string;
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 过滤条件的名称。取值：
         * - ProvisionedProductPlanApproverName：按审批人名称模糊匹配
         * @example `ProvisionedProductPlanApproverName`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * @example `approver`
         */
        Value: string;
    }[];
    /**
     * 审批维度访问过滤器。取值：
     * - AccountRequests：账号级别全部审批。
     * - ResourceDirectoryRequests：资源目录级别全部审批。
     * > 必须指定`ApprovalFilter`和`AccessLevelFilter`两个参数中的一个参数，但不能同时指定。
     * @example `AccountRequests`
     */
    "ApprovalFilter"?: string;
}
