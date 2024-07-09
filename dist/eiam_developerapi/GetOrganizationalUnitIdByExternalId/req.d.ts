export interface GetOrganizationalUnitIdByExternalIdRequest {
    /**
     * 认证信息。
     * 格式：Bearer ${access_token}。
     * 示例：Bearer ATxxxx。
     * @example `Bearer AT8csE2seYxxxxxij
    `
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
     * @example `xxx001`
     */
    "body"?: {
        /**
         * 组织外部ID，用于外部数据与IDaaS组织的数据关联映射，默认为IDaaS组织ID。
         * 说明：外部ID在同一来源类型和来源ID下唯一。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        organizationalUnitExternalId: string;
        /**
         * 组织来源类型，取值可选范围：
         * - build\_in：自建。
         * - ding\_talk：钉钉导入。
         * - ad：AD导入。
         * - ldap：LDAP导入。
         * @example `build_in`
         */
        organizationalUnitSourceType: string;
        /**
         * 组织来源ID。
         * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        organizationalUnitSourceId: string;
    };
}
