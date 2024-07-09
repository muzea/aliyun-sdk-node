export interface GenerateRamPolicyRequest {
    /**
     * 是否需要基于现有实例规则。
     * - true：需要
     * - false：不需要
     * @example `true`
     */
    "RequireBasePolicy"?: boolean;
    /**
     * 要设置的权限策略类型。取值范围：
     * - BACKUP：备份数据到备份库的权限
     * - RESTORE：从备份库恢复数据的权限
     * @example `system`
     */
    "ActionType": string;
    /**
     * 备份仓库ID。
     * @example `v-0007al3m******7ao`
     */
    "VaultId": string;
    /**
     * 资源组ID。
     * @example `rg-*********************`
     */
    "ResourceGroupId"?: string;
}
