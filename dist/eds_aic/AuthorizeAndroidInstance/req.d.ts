export interface AuthorizeAndroidInstanceRequest {
    /**
     * 实例ID列表。
     */
    "AndroidInstanceIds"?: string[];
    /**
     * 需要分配的用户ID。
     * @example `test`
     */
    "AuthorizeUserId"?: string;
    /**
     * 需要取消分配的用户ID。
     * @example `test`
     */
    "UnAuthorizeUserId"?: string;
}
