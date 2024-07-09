export interface GetSecretValueResponse {
    /**
     * 凭据值类型。取值：
     * - text
     * - binary
     * @example `binary`
     */
    SecretDataType: string;
    /**
     * 创建凭据的时间。
     * @example `2024-02-21T15:39:26Z`
     */
    CreateTime: string;
    /**
     * 凭据的版本号。
     * @example `v1`
     */
    VersionId: string;
    /**
     * 下一次轮转的时间。
     * > 当自动轮转开启时，返回该参数。
     * @example `2024-07-06T18:22:03Z`
     */
    NextRotationDate: string;
    /**
     * 凭据值。KMS将存储的密文凭据值进行解密后返回该参数。
     * - 通用凭据返回您指定的凭据值。
     * - RDS凭据返回的凭据值满足格式：`{"AccountName":"","AccountPassword":""}`  。
     * - RAM凭据返回的凭据值满足格式：`{"AccessKeyId":"Adfdsfd","AccessKeySecret":"fdsfdsf","GenerateTimestamp": "2023-03-25T10:42:40Z"}`  。
     * - ECS凭据返回的凭据值满足以下格式：
     *   - 口令类型凭据：`{"UserName":"ecs-user","Password":"H5asdasdsads****"} `。
     *   - 公私钥类型凭据（私钥格式为PEM）：`{"UserName":"ecs-user","PublicKey":"ssh-rsa ****mKwnVix9YTFY9Rs= imported-openssh-key","PrivateKey": "d6bee1cb-2e14-4277-ba6b-73786b21****"} `。
     * @example `testdata1`
     */
    SecretData: string;
    /**
     * 凭据自动轮转的周期。
     * 格式为`integer[unit]`，其中`integer`表示时间长度，`unit`表示时间单位。 `unit`取值：s（秒）。例如：7天的轮转周期为604800s。
     * > 当自动轮转开启时，返回该参数。
     * @example `604800s`
     */
    RotationInterval: string;
    /**
     * 凭据的拓展配置。
     * > 当FetchExtendedConfig取值为true时，仅RDS凭据、RAM凭据或ECS凭据返回该参数。
     * @example `{\"SecretSubType\":\"SingleUser\", \"DBInstanceId\":\"rm-uf667446pc955****\",  \"CustomData\":{} }`
     */
    ExtendedConfig: string;
    /**
     * 最近一次轮转的时间。
     * > 当凭据发生过轮转时返回该参数。
     * @example `2023-07-05T08:22:03Z`
     */
    LastRotationDate: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6a3e9c36-1150-4881-84d3-eb8672fcafad`
     */
    RequestId: string;
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 是否开启了自动轮转。取值：
     * - Enabled：开启了自动轮转。
     * - Disabled：未开启自动轮转。
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
     * @example `Generic`
     */
    SecretType: string;
    VersionStages: {
        /**
         * 凭据版本的状态标记。
         */
        VersionStage: string[];
    };
}
