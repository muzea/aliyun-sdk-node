export interface SendVerificationCodeForEnableRDRequest {
    /**
     * 新创建的管理账号的安全手机号码。置空表示采用当前登录账号的安全手机号码。
     * 格式：`<国家码>-<手机号码>`。
     * <props="intl">
     * > 不支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * @example `xx-13900001234`
     */
    "SecureMobilePhone"?: string;
}
