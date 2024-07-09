export interface RemovePermissionPolicyFromAccessConfigurationRequest {
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
     * 权限策略类型。取值：
     * - System：系统策略。
     * - Inline：内置策略。
     * @example `System`
     */
    "PermissionPolicyType": string;
    /**
     * 权限策略名称。
     * @example `AliyunECSFullAccess`
     */
    "PermissionPolicyName"?: string;
}
