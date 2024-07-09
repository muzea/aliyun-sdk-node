export interface DescribeEncryptionKeyResponse {
    /**
     * 实例密钥的预计删除时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 本参数返回内容为空时，表示密钥不会被自动删除。
     * @example `2021-09-24T18:22:03Z`
     */
    DeleteDate: string;
    /**
     * 请求ID。
     * @example `9A931CE5-C926-5E09-B0EC-6299C4A6****`
     */
    RequestId: string;
    /**
     * 密钥的描述信息，默认为空。
     * @example `testkey`
     */
    Description: string;
    /**
     * 密钥材料的来源，返回值**Aliyun_KMS**，即表示阿里云[密钥管理服务KMS](~~28935~~)。
     * @example `Aliyun_KMS`
     */
    Origin: string;
    /**
     * 密钥的过期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 本参数返回内容为空时，表示密钥不会过期。
     * @example `2021-09-24T18:22:03Z`
     */
    MaterialExpireTime: string;
    /**
     * 实例的密钥状态，返回值：
     * * **Enabled**：可用。
     * * **Disabled**：不可用。
     * @example `Enabled`
     */
    EncryptionKeyStatus: string;
    /**
     * 实例密钥的用途，返回值`ENCRYPT/DECRYPT`即表示加密和解密。
     * @example `ENCRYPT/DECRYPT`
     */
    KeyUsage: string;
    /**
     * 实例的密钥ID。
     * @example `ad463061-992d-4195-8a94-ed63********`
     */
    EncryptionKey: string;
    /**
     * 密钥创建者的云账号ID。
     * @example `17649847********`
     */
    Creator: string;
    /**
     * 加密算法。
     * @example `AES-CTR-256`
     */
    EncryptionName: string;
    /**
     * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息。
     * @example `acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole`
     */
    RoleArn: string;
}
