export interface UpdateSecretRotationPolicyRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `RdsSecret/Mysql5.4/MyCred`
     */
    "SecretName": string;
    /**
     * 是否开启自动轮转，取值：
     * - true：开启自动轮转。
     * - false（默认值）：不开启自动轮转。
     * @example `true`
     */
    "EnableAutomaticRotation": boolean;
    /**
     * 自动轮转的周期。取值范围：168小时（7天）~8,760小时（365天）。
     *
     * 格式为`integer\[unit\]`，其中`integer`表示时间长度，`unit`表示时间单位。
     * unit取值：d（天）、h（小时）、m（分钟）、s（秒）。例如：7d或者604,800s均表示7天的周期。
     * > 当EnableAutomaticRotation取值为true时，必须设置该参数。反之，将忽略该参数。
     * @example `30d`
     */
    "RotationInterval"?: string;
}
