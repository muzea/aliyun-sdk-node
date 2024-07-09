export interface SendVerificationRequest {
    /**
     * 短信验证码发送类型。固定取值：**SMS**。
     * @example `SMS`
     */
    "VerifyType": string;
    /**
     * 业务类型。固定取值：**CONTACT**。
     * @example `CONTACT`
     */
    "BizType": string;
    /**
     * 接收短信验证码的手机号码。
     * @example `150****0000`
     */
    "Target": string;
}
