export interface DescribeInstDbSlsInfoResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DC3ABA3E-0F8A-4596-9104-F5155C******`
     */
    RequestId: string;
    /**
     * SQL审计详情。
     */
    AuditInfo: {
        /**
         * LogStore的名称。
         * @example `test`
         */
        LogStore: string;
        /**
         * SLS Project的名称。
         * @example `test`
         */
        Project: string;
    };
}
