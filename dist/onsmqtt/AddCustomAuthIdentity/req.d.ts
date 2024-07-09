export interface AddCustomAuthIdentityRequest {
    /**
     * 云消息队列 MQTT 版实例的 ID。
     * @example `mqtt-cn-xxxx`
     */
    "InstanceId": string;
    /**
     * 用户名，不超过64位
     * @example `test`
     */
    "Username": string;
    /**
     * 密钥。
     * @example `xxxxx`
     */
    "Secret": string;
    /**
     * 身份类型。
     * - USER：仅用户名。
     * - CLIENT：具体到客户端。
     * @example `USER`
     */
    "IdentityType": string;
    /**
     * 当身份类型是CLIENT时，指定设备的ClientID。
     * @example `GID_test@@@test`
     */
    "ClientId"?: string;
    /**
     * 签名校验方式，ORIGIN：原始值比较，即比较password与secret，SIGNED： 对clientId进行HmacSHA1加签（使用secret，参考签名模式）验证，然后比较password。
     * @example `SIGNED`
     */
    "SignMode"?: string;
}
