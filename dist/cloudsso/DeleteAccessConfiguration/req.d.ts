export interface DeleteAccessConfigurationRequest {
    /**
     * 访问配置ID。
     * @example `ac-001j9mcm3k7335bc****`
     */
    "AccessConfigurationId": string;
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 是否强制移除系统策略和内置策略。取值：
     * - true：删除访问配置时会强制移除关联的系统策略和内置策略。
     * - false（默认值）：删除访问配置时不会强制移除关联的系统策略和内置策略。如果存在这些策略，会删除失败。您需要在删除访问配置前移除这些系统策略和内置策略。具体操作，请参见[RemovePermissionPolicyFromAccessConfiguration](~~336904~~)。
     * @example `false`
     */
    "ForceRemovePermissionPolicies"?: boolean;
}
