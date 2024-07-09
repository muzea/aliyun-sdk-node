export interface CreateServiceIdentityRoleRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 服务账户角色名称。
         * @example `AliyunServiceRoleForFeatureStore`
         */
        RoleName: string;
    };
}
