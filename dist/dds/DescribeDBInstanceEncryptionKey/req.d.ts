export interface DescribeDBInstanceEncryptionKeyRequest {
    /**
     * 实例ID。
     * @example `dds-bp2235****`
     */
    "DBInstanceId": string;
    /**
     * 可以输入一个实例自定义密钥。您可以调用[DescribeUserEncryptionKeyList](~~151729~~)查询实例的自定义密钥列表。
     * @example `2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
     */
    "EncryptionKey"?: string;
}
