export interface DeleteVaultRequest {
    /**
     * 凭证内容。
     * @example `caeba0bbb2be03f84eb48b699f0a*`
     */
    "Token"?: string;
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmoiyerpacj4q`
     */
    "ResourceGroupId"?: string;
}
