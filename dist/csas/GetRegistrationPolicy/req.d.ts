export interface GetRegistrationPolicyRequest {
    /**
     * 设备注册策略ID。取值来源：
     * - [ListRegistrationPolicies](~~ListRegistrationPolicies~~)：批量查询设备注册策略。
     * - [GetRegistrationPolicy](~~GetRegistrationPolicy~~)：查询设备注册策略详情。
     * - [CreateRegistrationPolicy](~~CreateRegistrationPolicy~~)：创建设备注册策略。
     * - [UpdateRegistrationPolicy](~~UpdateRegistrationPolicy~~)：更新设备注册策略。
     * @example `reg-policy-dcbfd33cb004****
    `
     */
    "PolicyId": string;
}
