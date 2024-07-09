export interface UpdateVaultRequest {
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId": string;
    /**
     * 备份仓库名称。长度为1~64个字符。
     * @example `vaultname`
     */
    "VaultName"?: string;
    /**
     * 仓库描述信息。长度为0~255个字符。
     * @example `vault description`
     */
    "Description"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm2fa2xeiebyy`
     */
    "ResourceGroupId"?: string;
}
