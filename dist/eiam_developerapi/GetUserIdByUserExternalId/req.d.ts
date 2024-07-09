export interface GetUserIdByUserExternalIdRequest {
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
     * 应用ID
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 账户外部ID。
         * @example `xxx001`
         */
        userExternalId: string;
        /**
         * 账户来源类型，取值可选范围：
         * - build_in：自建。
         * - ding_talk：钉钉导入。
         * - ad：AD导入。
         * - ldap：LDAP导入
         * @example `build_in`
         */
        userSourceType: string;
        /**
         * 账户来源ID。
         * 自建类型(build_in)值为实例ID，非自建类型，为对应企业ID，比如钉钉，对应的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        userSourceId: string;
    };
}
