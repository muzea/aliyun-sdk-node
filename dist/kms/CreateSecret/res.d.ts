export interface CreateSecretResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3bf02f7a-015b-4f93-be0f-cc043fda2dd3`
     */
    RequestId: string;
    /**
     * 是否开启自动轮转。取值：
     * - Enabled：开启自动轮转。
     * - Disabled：不开启自动轮转。
     * - Invalid：轮转状态异常，凭据管家无法为您自动轮转。
     * > SecretType取值为Rds、RAMCredentials或ECS时，返回该参数。
     * @example `Enabled`
     */
    AutomaticRotation: string;
    /**
     * 凭据名称。
     * @example `mydbconninfo`
     */
    SecretName: string;
    /**
     * 凭据版本号。
     * @example `v1`
     */
    VersionId: string;
    /**
     * 下一次轮转的时间。
     * > 当自动轮转开启时，返回该参数。
     * @example `2023-07-06T18:22:03Z`
     */
    NextRotationDate: string;
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
     * 凭据自动轮转的周期。
     * 格式为`integer[unit]`，其中`integer`表示时间长度，`unit`表示时间单位。 `unit`取值：s（秒）。例如：7天的轮转周期为604800s。
     * > 当自动轮转开启时，返回该参数。
     * @example `604800s`
     */
    RotationInterval: string;
    /**
     * 阿里云资源名称。
     * @example `acs:kms:cn-hangzhou:154035569884****:secret/mydbconninfo`
     */
    Arn: string;
    /**
     * 凭据的拓展配置。
     * > 当SecretType取值为Rds、RAMCredentials或ECS时，返回该参数。
     * @example `{\"SecretSubType\":\"SingleUser\", \"DBInstanceId\":\"rm-uf667446pc955****\",  \"CustomData\":"Key1": "v1", "fds":"fdsf"} }`
     */
    ExtendedConfig: string;
    /**
     * KMS实例的实例ID。
     * @example `kst-bjj62d8f5e0sgtx8h****`
     */
    DKMSInstanceId: string;
}
