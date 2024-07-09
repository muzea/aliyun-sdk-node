export interface DescribeAuditPolicyResponse {
    /**
     * 请求ID。
     * @example `111E7B16-0A87-4CBA-B271-F34AD61E099F`
     */
    RequestId: string;
    /**
     *  审计日志的状态。
     * - Enable：开启。
     * - Disabled：关闭。
     * 默认为关闭状态。
     * @example `Enable`
     */
    LogAuditStatus: string;
}
