export interface CreateOrganizationalUnitRequest {
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
     * 请求body。
     * @example `app_xx001`
     */
    "body"?: {
        /**
         * 组织名称，长度限制最长为64字符。
         * @example `name001`
         */
        organizationalUnitName: string;
        /**
         * 父组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        parentId: string;
        /**
         * 组织外部ID，用于外部数据与IDaaS组织的数据关联映射，默认为IDaaS组织ID，长度限制最长为64字符。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        organizationalUnitExternalId: string;
        /**
         * 组织描述，长度限制最长为128字符。
         * @example `测试组织`
         */
        description: string;
    };
}
