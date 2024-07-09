export interface DeleteClientRequest {
    /**
     * 备份仓库ID。
     * @example `v-000************gs3`
     */
    "VaultId"?: string;
    /**
     * 客户端ID。
     * @example `c-000************f3h`
     */
    "ClientId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acf************kwy`
     */
    "ResourceGroupId"?: string;
}
