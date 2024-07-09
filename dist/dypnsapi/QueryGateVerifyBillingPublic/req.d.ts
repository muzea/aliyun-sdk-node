export interface QueryGateVerifyBillingPublicRequest {
    /**
     * 月份费用账单。格式为YYYYMM，例如202111。
     * @example `202111`
     */
    "Month": string;
    /**
     * 认证方式。取值：
     * - **0**：本机号码校验。
     * - **1**：一键登录。
     * - **2**：全部。
     * - **3**：活体认证。
     * - **4**：短信认证。
     * @example `1`
     */
    "AuthenticationType": number;
}
