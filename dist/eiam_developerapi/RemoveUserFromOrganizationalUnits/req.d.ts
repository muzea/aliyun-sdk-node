export interface RemoveUserFromOrganizationalUnitsRequest {
    /**
     * 认证信息。
     * 格式：Bearer ${access_token}。
     * 示例：Bearer ATxxxx。
     * @example `Bearer xxxx`
     */
    "Authorization": string;
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "instanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 账户ID
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "userId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 组织ID列表。
         * @example `[ou_wovwffm62xifdziem7an7xxxxx]`
         */
        organizationalUnitIds: string[];
    };
}
