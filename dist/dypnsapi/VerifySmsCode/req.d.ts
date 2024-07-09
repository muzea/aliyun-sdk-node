export interface VerifySmsCodeRequest {
    /**
     * 验证码。
     * @example `12****`
     */
    "SmsCode": string;
    /**
     * 手机号。获取短信验证码时返回。
     * @example `1321111****`
     */
    "PhoneNumber": string;
    /**
     * 短信Token。
     * 当您成功调用短信验证码SDK中发送验证码接口，终端用户会收到短信验证码，SDK侧会返回用于短信验证码校验的SmsToken。其中Android客户端调用sendVerifyCode接口发送验证码，iOS客户端调用sendVerifyCodeWithTimeout接口发送验证码。详情请参见[接入概述](~~400434~~)。
     * @example `sddsbvdbvjd****`
     */
    "SmsToken": string;
}
