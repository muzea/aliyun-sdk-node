export interface RegisterCaCertificateRequest {
    /**
     * 云消息队列 MQTT 版的实例ID。注册CA证书时，需要指定一个实例进行绑定。
     * @example `post-cn-7mz2d******`
     */
    "MqttInstanceId": string;
    /**
     * 待注册CA证书的名称。
     * @example `mqtt_ca`
     */
    "CaName": string;
    /**
     * 待注册CA证书的内容。
     * > 示例中的\n表示换行。
     * @example `-----BEGIN CERTIFICATE-----\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\n-----END CERTIFICATE-----`
     */
    "CaContent": string;
    /**
     * 待注册CA证书的验证证书的内容。和CA证书的注册码一起使用，用于验证用户拥有该CA证书的私钥。
     * > 示例中的\n表示换行。
     * @example `-----BEGIN CERTIFICATE-----\nMIID/DCCAu+Y5sRMpp9tnd+4s******\n-----END CERTIFICATE-----`
     */
    "VerificationContent": string;
}
