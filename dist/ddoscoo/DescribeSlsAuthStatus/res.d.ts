export interface DescribeSlsAuthStatusResponse {
    /**
     * DDoS高防全量日志分析服务的授权状态。取值：
     * - **true**：已授权
     * - **false**：未授权
     * @example `true`
     */
    SlsAuthStatus: boolean;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
}
