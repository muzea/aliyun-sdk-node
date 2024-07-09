export interface ListPermissionPoliciesInAccessConfigurationResponse {
    /**
     * 权限策略列表。
     */
    PermissionPolicies: {
        /**
         * 权限策略名称。
         * @example `AliyunECSFullAccess`
         */
        PermissionPolicyName: string;
        /**
         * 权限策略类型。
         * @example `System`
         */
        PermissionPolicyType: string;
        /**
         * 内置策略内容。
         * > 仅内置策略返回该参数。
         * @example `{\"Statement\": [{\"Action\": \"*\",\"Effect\": \"Allow\",\"Resource\": \"*\"}],\"Version\": \"1\"}`
         */
        PermissionPolicyDocument: string;
        /**
         * 权限策略被添加到访问配置的时间。
         * @example `2021-11-03T06:37:25Z`
         */
        AddTime: string;
    }[];
    /**
     * 请求ID。
     * @example `3A5E771F-1F5A-5555-A64E-579748AAFD98`
     */
    RequestId: string;
    /**
     * 权限策略总个数。
     * @example `2`
     */
    TotalCounts: number;
}
