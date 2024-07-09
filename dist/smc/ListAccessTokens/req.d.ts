export interface ListAccessTokensRequest {
    /**
     * 激活码信息集合。
     */
    "AccessTokenId"?: string[];
    /**
     * 激活码名称。
     * @example `test_name`
     */
    "Name"?: string;
    /**
     * 激活码状态。取值范围：
     * - activated：已激活。
     * - unactivated：未激活。
     * - expired：已过期。
     * @example `activated`
     */
    "Status"?: string;
}
