export interface UpgradeClientRequest {
    /**
     * 备份仓库ID。
     * @example `v-000djw8ci******3ic`
     */
    "VaultId"?: string;
    /**
     * 备份客户端ID。
     * @example `c-000boklw******63a9`
     */
    "ClientId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy6uja5wyc2i`
     */
    "ResourceGroupId"?: string;
}
