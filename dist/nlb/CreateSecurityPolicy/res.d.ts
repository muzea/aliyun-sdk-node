export interface CreateSecurityPolicyResponse {
    /**
     * 请求ID。
     * @example `D7A8875F-373A-5F48-8484-25B07A61F2AF`
     */
    RequestId: string;
    /**
     * TLS安全策略ID。
     * @example `sp-wuytp9pa******`
     */
    SecurityPolicyId: string;
    /**
     * 异步任务ID。
     * @example `72dcd26b-f12d-4c27-b3af-18f6aed5****`
     */
    JobId: string;
}
