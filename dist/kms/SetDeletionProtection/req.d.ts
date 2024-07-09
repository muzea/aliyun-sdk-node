export interface SetDeletionProtectionRequest {
    /**
     * 待设置删除保护的CMK ARN。
     * 您可以调用[DescribeKey](~~28952~~)接口查看CMK ARN（Arn）。
     * @example `acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****`
     */
    "ProtectedResourceArn": string;
    /**
     * 是否开启删除保护，取值：
     * - true：开启删除保护。
     * - false（默认值）：关闭删除保护。
     * @example `true`
     */
    "EnableDeletionProtection": boolean;
    /**
     * 删除保护描述。
     * > 当EnableDeletionProtection取值为true时该参数有效。
     * @example `该密钥正在被XXX服务使用。已为您设置删除保护。`
     */
    "DeletionProtectionDescription"?: string;
}
