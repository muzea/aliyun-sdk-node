export interface DescribeDBInstanceEncryptionKeyResponse {
    /**
     * 实例密钥的来源。
     * @example `Aliyun_KMS`
     */
    Origin: string;
    /**
     * 实例密钥的描述。
     * @example `key description example`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `783C2062-A2D3-4EA8-88AD-E43F990C23BB`
     */
    RequestId: string;
    /**
     * 实例密钥状态。
     * - **Enabled**：实例密钥可用。
     * - **Disabled**：实例密钥不可用。
     * @example `Enabled`
     */
    EncryptionKeyStatus: string;
    /**
     * 密钥的过期时间（UTC）。当该值为空时，表示密钥不会过期。
     * @example `2020-07-06T18:22:03Z`
     */
    MaterialExpireTime: string;
    /**
     * 实例密钥的用途。
     * @example `ENCRYPT/DECRYPT`
     */
    KeyUsage: string;
    /**
     * 实例密钥。
     * @example `2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
     */
    EncryptionKey: string;
    /**
     * 密钥创建者UID。
     * @example `123456`
     */
    Creator: string;
    /**
     * 实例密钥的预计删除时间。当该值为空时，表示密钥不会被自动删除。
     * @example `2020-07-06T18:22:03Z`
     */
    DeleteDate: string;
}
