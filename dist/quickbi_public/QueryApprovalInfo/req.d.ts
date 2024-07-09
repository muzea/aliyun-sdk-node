export interface QueryApprovalInfoRequest {
    /**
     * 当前审批人用户ID，qbi用户id。
     * @example `12352fasdavsa`
     */
    "UserId": string;
    /**
     * 审批状态：
     * - 0：待审批
     * - 1：已处理
     * @example `0`
     */
    "Status": number;
    /**
     * 每页多少行，默认1000。
     * @example `1000`
     */
    "PageSize"?: number;
    /**
     * 页数，默认1。
     * @example `1`
     */
    "Page"?: number;
}
