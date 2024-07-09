export interface DescribeDBInstanceEncryptionKeyResponse {
    /**
     * 预计删除密钥时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2022-05-08T08:14:16Z`
     */
    DeleteDate: string;
    /**
     * 请求ID。
     * @example `3BC2768E-DEDA-40FC-BBE9-6B884F3626AF`
     */
    RequestId: string;
    /**
     * 密钥描述。
     * @example `Description of the key`
     */
    Description: string;
    /**
     * 密钥的来源。
     * @example `Aliyun_KMS`
     */
    Origin: string;
    /**
     * 密钥过期时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-10-18T08:14:16Z`
     */
    MaterialExpireTime: string;
    /**
     * 密钥的状态。返回值：
     * - **Enabled**：启用。
     * - **Disabled**：未启用。
     * @example `Enabled`
     */
    EncryptionKeyStatus: string;
    /**
     * 密钥用途。
     * @example `ENCRYPT/DECRYPT`
     */
    KeyUsage: string;
    /**
     * 密钥ID。
     * @example `5306d1b6-7fd3-42d9-9511-****`
     */
    EncryptionKey: string;
    /**
     * 密钥的创建者。
     * @example `1443****9604`
     */
    Creator: string;
    /**
     * 密钥列表。
     */
    EncryptionKeyList: {
        /**
         * Key的类型。返回值说明：
         * - CMK：用户自定义密钥
         * - ServiceKey：服务密钥
         * @example `ServiceKey`
         */
        KeyType: string;
        /**
         * 密钥ID。
         * @example `5306d1b6-7fd3-42d9-9511-****`
         */
        EncryptionKey: string;
        /**
         * 密钥描述。
         * @example `Description of the key`
         */
        Description: string;
        /**
         * 密钥用途。
         * @example `ENCRYPT/DECRYPT`
         */
        KeyUsage: string;
        /**
         * 预计删除密钥时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2022-05-08T08:14:16Z`
         */
        DeleteDate: string;
        /**
         * 密钥的创建者。
         * @example `1443****9604`
         */
        Creator: string;
        /**
         * 密钥的状态。返回值：
         * - **Enabled**：启用。
         * - **Disabled**：未启用。
         * @example `Enabled`
         */
        EncryptionKeyStatus: string;
        /**
         * 密钥的来源。
         * @example `Aliyun_KMS`
         */
        Origin: string;
        /**
         * 密钥过期时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-10-18T08:14:16Z`
         */
        MaterialExpireTime: string;
        /**
         * 密钥别名。
         * @example `alias/****`
         */
        AliasName: string;
        /**
         * 密钥的使用途径：
         * - **TDE**：透明数据加密。
         * - **DiskEncryption**：云盘加密。
         * @example `TDE`
         */
        UsedBy: string;
    }[];
}
