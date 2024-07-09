export interface EnableSqlAuditResponse {
    /**
     * 请求ID。
     * @example `463A5F0F-12AD-4544-A902-B2B983******`
     */
    RequestId: string;
    /**
     * SQL审计功能是否开启成功。
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
