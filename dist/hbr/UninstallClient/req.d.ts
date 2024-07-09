export interface UninstallClientRequest {
    /**
     * 备份仓库ID。
     * @example `v-0008n2q******ax3`
     */
    "VaultId"?: string;
    /**
     * 备份客户端ID。
     * @example `c-000iuqo******zi3rn`
     */
    "ClientId": string;
    /**
     * 资源组ID。
     * @example `rg-acfm3erpwweavki`
     */
    "ResourceGroupId"?: string;
}
