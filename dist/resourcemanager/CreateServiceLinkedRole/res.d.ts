export interface CreateServiceLinkedRoleResponse {
    /**
     * 角色信息。
     */
    Role: {
        /**
         * 角色的信任策略内容。
         * @example `{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":[\"polardb.aliyuncs.com\"]}}],\"Version\":\"1\"}`
         */
        AssumeRolePolicyDocument: string;
        /**
         * 带域名后缀的角色名称。
         * @example `AliyunServiceRoleForPolarDB@role.test.onaliyunservice.com`
         */
        RolePrincipalName: string;
        /**
         * 角色描述。
         * @example `Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.`
         */
        Description: string;
        /**
         * 角色名称。
         * @example `AliyunServiceRoleForPolarDB`
         */
        RoleName: string;
        /**
         * 角色创建时间（UTC时间）。
         * @example `2020-06-30T08:14:16Z`
         */
        CreateDate: string;
        /**
         * 角色的资源描述符。
         * @example `acs:ram::177242285274****:role/aliyunserviceroleforpolardb`
         */
        Arn: string;
        /**
         * 角色ID。
         * @example `32833240981067****`
         */
        RoleId: string;
        /**
         * 是否为服务关联角色。取值：
         * - true：是服务关联角色。
         * - false：不是服务关联角色。
         * @example `true`
         */
        IsServiceLinkedRole: boolean;
    };
    /**
     * 请求ID。
     * @example `FE58D7CF-03BC-432A-B42D-BC3390C8C2E1`
     */
    RequestId: string;
}
