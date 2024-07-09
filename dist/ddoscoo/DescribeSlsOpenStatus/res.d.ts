export interface DescribeSlsOpenStatusResponse {
    /**
     * 是否已开通日志服务。取值：
     * - **true**：已开通
     * - **false**：未开通
     * @example `true`
     */
    SlsOpenStatus: boolean;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
}
