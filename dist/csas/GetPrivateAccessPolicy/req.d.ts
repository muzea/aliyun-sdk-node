export interface GetPrivateAccessPolicyRequest {
    /**
     * 内网访问策略ID。取值来源：
     * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~)：批量查询内网访问策略。
     * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~)：创建内网访问策略。
     * @example `pa-policy-63b2f1844b86****`
     */
    "PolicyId": string;
}
