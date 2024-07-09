export interface UpdateRotationPolicyRequest {
    /**
     * 密钥ID，即密钥的全局唯一标识符。
     * @example `key-hzz62f1cb66fa42qo****`
     */
    "KeyId": string;
    /**
     * 是否开启周期性自动轮转。取值：
     * - true：开启。
     * - false：关闭。
     *
     * @example `true`
     */
    "EnableAutomaticRotation": boolean;
    /**
     * 自动轮转的时间周期。格式为integer\[unit]，其中integer表示时间长度，unit表示时间单位。合法的unit单位为：d（天）、h（小时）、m（分钟）、s（秒）。7d或者604800s均表示7天的周期。取值：
     * - 默认密钥：仅支持设置为365天。
     * - 软件密钥：7~365天。
     * > 当EnableAutomaticRotation参数为true时，必须设置此参数，否则无需设置。
     * @example `30d`
     */
    "RotationInterval"?: string;
}
