export interface DetachAppPolicyFromIdentityResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-****-D7393642C`
     */
    RequestId: string;
    /**
     * 不存在的策略名称。
     */
    NonExistPolicyNames: string[];
    /**
     * 失败的策略名称。
     */
    FailedPolicyNames: string[];
}
