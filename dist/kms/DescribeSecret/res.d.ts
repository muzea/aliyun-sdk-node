export interface DescribeSecretResponse {
    /**
     * 凭据的更新时间。
     * @example `2024-02-21T15:39:26Z`
     */
    UpdateTime: string;
    /**
     * 创建凭据的时间。
     * @example `2024-02-21T15:39:26Z`
     */
    CreateTime: string;
    /**
     * 下一次轮转的时间。
     * > 当开启自动轮转时，返回该参数。
     * @example `2024-07-06T18:22:03Z`
     */
    NextRotationDate: string;
    /**
     * 加密凭据值的KMS密钥的标识符。
     * @example `key-hzz63ca8cbe3hefht****`
     */
    EncryptionKeyId: string;
    /**
     * 凭据自动轮转的周期。
     * 格式为`integer[unit]`，其中`integer`表示时间长度，`unit`表示时间单位。 `unit`取值：s（秒）。例如：7天的轮转周期为604800s。
     * > 当开启自动轮转时，返回该参数。
     * @example `3153600s`
     */
    RotationInterval: string;
    /**
     * 凭据的资源名称（ARN）。
     * @example `acs:kms:cn-hangzhou:154035569884****:secret/secret001`
     */
    Arn: string;
    /**
     * 凭据的拓展配置。
     * > 仅RDS凭据、RAM凭据或ECS凭据返回该参数。
     * @example `{\"SecretSubType\":\"SingleUser\", \"DBInstanceId\":\"rm-uf667446pc955****\",  \"CustomData\":{} }`
     */
    ExtendedConfig: string;
    /**
     * 最近一次轮转的时间。
     * > 当凭据发生过轮转时返回该参数。
     * @example `2022-07-05T08:22:03Z`
     */
    LastRotationDate: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `93348dfb-3627-4417-8d90-487a76a909c9`
     */
    RequestId: string;
    /**
     * 凭据的描述信息。
     * @example `userinfo`
     */
    Description: string;
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 是否开启自动轮转。取值：
     * - Enabled：开启自动轮转。
     * - Disabled：不开启自动轮转。
     * - Invalid：轮转状态异常，KMS无法为您自动轮转。
     * > 仅RDS凭据、RAM凭据或ECS凭据返回该参数。
     * @example `Enabled`
     */
    AutomaticRotation: string;
    /**
     * 凭据类型。取值：
     * - Generic：通用凭据。
     * - Rds：RDS凭据。
     * - RAMCredentials：RAM凭据。
     * - ECS：ECS凭据。
     * @example `Rds`
     */
    SecretType: string;
    /**
     * 计划删除时间。
     * @example `2025-03-21T15:45:12Z`
     */
    PlannedDeleteTime: string;
    /**
     * KMS实例的实例ID。
     * @example `kst-bjj62d8f5e0sgtx8h****`
     */
    DKMSInstanceId: string;
    Tags: {
        /**
         * 凭据的资源标签。
         * 如果入参FetchTags取值为false或者未指定，则不返回该参数。
         */
        Tag: {
            /**
             * 标签值。
             * @example `val1`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `key1`
             */
            TagKey: string;
        }[];
    };
}
