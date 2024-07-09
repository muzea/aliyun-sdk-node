export interface AttachAppPolicyToIdentityResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-****-D7393642CA58`
     */
    RequestId: string;
    /**
     * 不存在的策略名称列表。
     */
    NonExistPolicyNames: string[];
    /**
     * 失败的策略名称。
     */
    FailedPolicyNames: string[];
}
