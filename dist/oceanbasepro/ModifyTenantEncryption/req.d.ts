export interface ModifyTenantEncryptionRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 加密类型，返回值：
     * - **NoEncryption**：不启用加密。
     * - **CloudDisk**：云盘加密并返回。
     * - **EncryptionKey**：参数指定加密的密钥。
     * > <br>云盘加密开启后无法关闭。
     * @example `EncryptionKey`
     */
    "EncryptionType": string;
    /**
     * 密钥 ID。
     * @example `key-shh322****470h8v0-g2ll85****`
     */
    "EncryptionKeyId"?: string;
}
