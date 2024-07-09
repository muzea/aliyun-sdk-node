export interface DescribeTenantEncryptionResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 总数，分页查询时生效。
     * @example `8`
     */
    TotalCount: number;
    /**
     * 允许加密的场景列表信息。
     */
    TenantEncryptions: {
        /**
         * 租户 ID。
         * @example `t4louaeei****`
         */
        TenantId: string;
        /**
         * 租户模式。
         * 当前支持：
         * - Oracle：Oracle 模式。
         * - MySQL: MySQL 模式。
         * @example `MySQL`
         */
        TenantMode: string;
        /**
         * 租户名称。
         * @example `forMySQLTenant`
         */
        TenantName: string;
        /**
         * 是否启用加密。取值：
         * - true
         * - false
         * @example `false`
         */
        EnableEncryption: boolean;
        /**
         * 租户状态。
         * @example `ONLINE`
         */
        TenantStatus: string;
        /**
         * 租户是否开启加密的状态。
         * @example `OPEN`
         */
        Status: string;
        /**
         * 加密的类型。
         * @example `INTERNAL`
         */
        EncryptionType: string;
        /**
         * kms 加密的 keyId。
         * @example `xxx`
         */
        EncryptionKeyId: string;
    }[];
}
