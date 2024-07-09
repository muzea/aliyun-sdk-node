export interface ListPermissionPoliciesInAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 权限策略类型，用于查询的过滤条件。取值：
     * - System：系统策略。
     * - Inline：内置策略。
     * 如不指定，则查询所有类型的权限策略。
     * @example `System`
     */
    "PermissionPolicyType"?: string;
}
