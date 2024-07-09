export interface DescribeLogStoreExistStatusResponse {
    /**
     * 是否已创建DDoS高防的日志库。取值：
     * - **true**：已创建
     * - **false**：未创建
     * @example `true`
     */
    ExistStatus: boolean;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
}
