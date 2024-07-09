export interface ModifyInstanceTwoFactorRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否开启双因子。取值：
     * - **true**：开启
     * - **false**：不开启
     * @example `true`
     */
    "EnableTwoFactor"?: string;
    /**
     * 双因子验证码发送方式。当EnableTwoFactor为true时，至少要指定一种方式。取值：
     * - **sms**：短信
     * - **email**：邮箱
     * - **dingtalk**：钉钉工作通知
     * - **totp**：手机OTP令牌
     * - **gmusbkey**：国密USBKEY
     * @example `["sms"]`
     */
    "TwoFactorMethods"?: string;
    /**
     * 双因子认证成功后，后续登录堡垒机时跳过双因子认证的时间，取值范围为0~168，单位（小时）。0表示不跳过，每次都需要双因子认证。
     * @example `1`
     */
    "SkipTwoFactorTime"?: string;
}
