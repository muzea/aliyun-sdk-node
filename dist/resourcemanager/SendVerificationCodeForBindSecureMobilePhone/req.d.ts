export interface SendVerificationCodeForBindSecureMobilePhoneRequest {
    /**
     * 安全手机号码。
     * 格式：<国家码>-<手机号码>。
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * <props="intl">
     * > 不支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * @example `xx-13900001234`
     */
    "SecureMobilePhone": string;
    /**
     * 成员的账号ID。
     * @example `138660628348****`
     */
    "AccountId": string;
}
