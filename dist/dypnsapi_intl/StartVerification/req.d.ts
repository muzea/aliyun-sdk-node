export interface StartVerificationRequest {
    /**
     * 认证通道，包括短信（SMS)、语音（VOCIE）、whatsApp(WHATSAPP)。
     * @example `SMS`
     */
    "Channel": string;
    /**
     * 接收短信号码。号码格式为：国际区号+号码。
     * @example `6212345****01`
     */
    "To": string;
    /**
     * 控制台配置的ServiceID。
     * @example `FA00000000000001`
     */
    "ServiceSid": string;
}
