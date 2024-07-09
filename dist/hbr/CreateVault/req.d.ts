export interface CreateVaultRequest {
    /**
     * 备份仓库所属的地域ID。
     * @example `cn-shanghai`
     */
    "VaultRegionId": string;
    /**
     * 备份仓库名称。长度为1~64个字符。
     * @example `backupvaultname`
     */
    "VaultName": string;
    /**
     * 备份仓库描述信息。长度为0~255个字符。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 备份仓库类型。取值
     * - **STANDARD**，表示普通仓库。
     * - **OTS_BACKUP**，表示OTS备份库
     * @example `STANDARD`
     */
    "VaultType"?: string;
    /**
     * 备份仓库存储类型。取值仅为**STANDARD**，表示标准存储。
     * @example `STANDARD`
     */
    "VaultStorageClass"?: string;
    /**
     * 源端加密类型，仅VaultType为STANDARD或者OTS_BACKUP时有效，支持
     * - **HBR_PRIVATE**：HBR完全托管，使用备份服务自带加密方式。
     * - **KMS**：使用阿里云KMS服务自定义密钥加密。
     * @example `KMS`
     */
    "EncryptType"?: string;
    /**
     * 阿里云KMS服务自定义密钥Key或者Alias，仅当EncryptType=KMS时必填。
     * @example `alias/yzs-hhht`
     */
    "KmsKeyId"?: string;
}
