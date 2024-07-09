export interface CreateKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `381D5D33-BB8F-395F-8EE4-AE3BB4B523C4`
     */
    RequestId: string;
    /**
     * 密钥的元数据。
     */
    KeyMetadata: {
        /**
         * 密钥的全局唯一标识符。
         * @example `key-hzz62f1cb66fa42qo****`
         */
        KeyId: string;
        /**
         * 密钥下一次轮转的时间。
         * 仅当AutomaticRotation参数值为Enabled或Suspended时，才返回该值。
         * @example `2024-03-25T10:00:00Z`
         */
        NextRotationDate: string;
        /**
         * 密钥的状态。
         * 更多信息，请参见[用户主密钥的状态对API调用的影响](~~44211~~)。
         * @example `Enabled`
         */
        KeyState: string;
        /**
         * 密钥自动轮转的周期。单位为秒，格式为整数值后加上字符s。例如：7天的轮转周期为604800s。
         * 仅当AutomaticRotation参数值为Enabled或Suspended时，才返回该值。
         * @example `31536000s`
         */
        RotationInterval: string;
        /**
         * 密钥的ARN。
         * @example `acs:kms:cn-qingdao:154035569884****:key/key-hzz62f1cb66fa42qo****`
         */
        Arn: string;
        /**
         * 密钥的创建者。
         * @example `154035569884****`
         */
        Creator: string;
        /**
         * 最近一次轮转的时间（UTC）。
         * 如果是新创建密钥，则为初始密钥版本生成时间。
         * @example `2023-03-25T10:00:00Z`
         */
        LastRotationDate: string;
        /**
         * 密钥的预计删除时间。 更多信息，请参见[ScheduleKeyDeletion](~~601417~~)。
         * 仅当KeyState值为PendingDeletion时，才返回该参数。
         * @example `2025-03-25T10:00:00Z`
         */
        DeleteDate: string;
        /**
         * 密钥的当前主版本标识符。
         * @example `7ce1d081-06cb-42e6-aab6-5c5de030****`
         */
        PrimaryKeyVersion: string;
        /**
         * 密钥的描述。
         * @example `key description example`
         */
        Description: string;
        /**
         * 密钥的规格。
         * @example `Aliyun_AES_256`
         */
        KeySpec: string;
        /**
         * 密钥材料来源。
         * @example `Aliyun_KMS`
         */
        Origin: string;
        /**
         * 密钥材料的过期时间（UTC）。
         * 当该值为空时，表示密钥材料不会过期。
         * @example `2025-03-25T10:00:00Z`
         */
        MaterialExpireTime: string;
        /**
         * 是否开启了密钥自动轮转，取值：
         * - Enabled：自动轮转处于开启状态。
         * - Disabled：自动轮转处于未开启状态。
         * - Suspended：自动轮转被暂停执行。
         * @example `Enabled`
         */
        AutomaticRotation: string;
        /**
         * 密钥的保护级别。
         * @example `SOFTWARE`
         */
        ProtectionLevel: string;
        /**
         * 密钥的用途。
         * @example `ENCRYPT/DECRYPT`
         */
        KeyUsage: string;
        /**
         * 密钥创建的日期和时间（UTC）。
         * @example `2024-03-25T10:00:00Z`
         */
        CreationDate: string;
        /**
         * KMS实例的实例ID。
         * @example `kst-bjj62d8f5e0sgtx8h****`
         */
        DKMSInstanceId: string;
    };
}
