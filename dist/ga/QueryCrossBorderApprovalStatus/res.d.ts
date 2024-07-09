export interface QueryCrossBorderApprovalStatusResponse {
    /**
     * 请求ID。
     * @example `F96E634B-A523-587F-9A09-AE8B2FD04B9C`
     */
    RequestId: string;
    /**
     * 阿里云账号（主账号）是否拥有跨境权限。
     * - UNAPPLIED：用户未提交跨境权限申请或无法查到相应的纪录。
     * - APPLIED：用户已经提交跨境权限申请，当前在审核中。
     * - REJECTED：用户提交的跨境权限审核失败。
     * - PASSED：用户提交的跨境权限审核通过。
     * @example `UNAPPLIED`
     */
    ApprovalStatus: string;
}
