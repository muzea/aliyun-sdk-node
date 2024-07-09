export interface PatchOrganizationalUnitRequest {
    /**
     * 认证信息。
     * 格式：Bearer ${access_token}。
     * 示例：Bearer ATxxxx。
     * @example `Bearer AT8csE2seYxxxxxij`
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
     * 组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "organizationalUnitId": string;
    /**
     * 请求体参数。
     * @example `ou_xxx001`
     */
    "body"?: {
        /**
         * 组织名称，长度限制最长为64字符。
         * @example `name001`
         */
        organizationalUnitName: string;
        /**
         * 组织描述，长度限制最长为128字符。
         * @example `测试组织`
         */
        description: string;
    };
}
