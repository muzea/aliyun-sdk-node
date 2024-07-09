export interface ModifyTenantEncryptionResponse {
    /**
     * Id of the request
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * job
     */
    TenantEncryption: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 租户 ID。
         * @example `ob2mr3oae0****`
         */
        TenantId: string;
        /**
         * 加密类型，返回值：
         * - **NoEncryption**：不启用加密。
         * - **CloudDisk**：云盘加密并返回。
         * - **EncryptionKey**：参数指定加密的密钥。
         * > <br>云盘加密开启后无法关闭。
         * @example `EncryptionKey`
         */
        EncryptionType: string;
    };
}
