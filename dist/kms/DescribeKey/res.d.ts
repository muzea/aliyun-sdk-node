export interface DescribeKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f`
     */
    RequestId: string;
    /**
     * CMK的元数据。
     */
    KeyMetadata: {
        /**
         * 是否开启删除保护，取值：
         * - Enabled：开启删除保护。
         * - Disabled：关闭删除保护。
         * @example `Enabled`
         */
        DeletionProtection: string;
        /**
         * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中也会返回密钥ID。
         * @example `key-hzz630494463ejqjx****`
         */
        KeyId: string;
        /**
         * 下一次轮转的时间。
         * > 当AutomaticRotation取值为Enabled或Suspended时，返回该参数。
         * @example `2021-07-06T18:22:03Z`
         */
        NextRotationDate: string;
        /**
         * CMK的状态。
         * 更多信息，请参见[用户主密钥的状态对API调用的影响](~~44211~~)。
         * @example `Enabled`
         */
        KeyState: string;
        /**
         * 密钥自动轮转的周期。
         * 单位：s。
         * 例如：7天的轮转周期为604800s。
         * > 当AutomaticRotation取值为Enabled或Suspended时，返回该参数。
         * @example `31536000s`
         */
        RotationInterval: string;
        /**
         * CMK的资源名称（ARN）。
         * @example `acs:kms:cn-hangzhou:154035569884****:key/key-hzz630494463ejqjx****`
         */
        Arn: string;
        /**
         * 创建CMK的阿里云账号。
         * @example `154035569884****`
         */
        Creator: string;
        /**
         * 最近一次轮转的时间（UTC）。如果是新创建的密钥，则为初始密钥版本生成时间。
         * @example `2024-05-20T06:34:21Z`
         */
        LastRotationDate: string;
        /**
         * CMK的预计删除时间（UTC）。
         * 更多信息，请参见[ScheduleKeyDeletion](~~44196~~)。
         * > 当KeyState取值为PendingDeletion时，返回该参数。
         * @example `2024-05-26T18:22:03Z`
         */
        DeleteDate: string;
        /**
         * 对称类型CMK当前的主版本标识符。
         * @example `515e0b0a-624f-45ab-92b5-54f9b551****`
         */
        PrimaryKeyVersion: string;
        /**
         * CMK的描述。
         * @example `key description example`
         */
        Description: string;
        /**
         * CMK的类型。
         * @example `Aliyun_AES_256`
         */
        KeySpec: string;
        /**
         * CMK的密钥材料来源。
         * @example `Aliyun_KMS`
         */
        Origin: string;
        /**
         * 密钥材料的过期时间（UTC）。当该值为空时，表示密钥材料不会过期。
         * @example `2024-07-06T18:22:03Z`
         */
        MaterialExpireTime: string;
        /**
         * 删除保护描述。
         * @example `该密钥正在被XXX服务使用。已为您设置删除保护。`
         */
        DeletionProtectionDescription: string;
        /**
         * 是否开启自动轮转，取值：
         * - Enabled：开启自动轮转。
         * - Disabled：关闭自动轮转。
         * - Suspended：暂停执行自动轮转。
         * 更多信息，请参见[自动轮转密钥](~~134270~~)。
         * > 仅对称密钥支持自动轮转。
         * @example `Disabled`
         */
        AutomaticRotation: string;
        /**
         * CMK的保护级别。
         * @example `HSM`
         */
        ProtectionLevel: string;
        /**
         * CMK的用途。
         * @example `ENCRYPT/DECRYPT`
         */
        KeyUsage: string;
        /**
         * CMK的创建时间（UTC）。
         * @example `2024-05-20T06:34:21Z`
         */
        CreationDate: string;
        /**
         * KMS实例的实例ID。
         * @example `kst-bjj62d8f5e0sgtx8h****`
         */
        DKMSInstanceId: string;
    };
}
