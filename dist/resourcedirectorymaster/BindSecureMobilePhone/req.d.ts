export interface BindSecureMobilePhoneRequest {
    /**
     * 验证码。
     * 您可以调用[SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~)获取验证码。
     * @example `123456`
     */
    "VerificationCode": string;
    /**
     * 安全手机号码。
     * 该手机号码必须与[SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~)中获取验证码时设置的手机号码一致。
     * 格式：<国家码>-<手机号码>。
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * <props="intl">
     * > 不支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * @example `xx-13900001234`
     */
    "SecureMobilePhone": string;
    /**
     * 成员ID。
     * @example `138660628348****`
     */
    "AccountId": string;
}
