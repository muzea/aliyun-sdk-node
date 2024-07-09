export interface DescribeInstallCaptchaResponse {
    /**
     * 安装验证码有效日期。
     * > 安装验证码只有在有效期内才能使用。过期的安装验证码无法使用。
     * @example `2020-10-10 16:06:38`
     */
    Deadline: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D`
     */
    RequestId: string;
    /**
     * 手动安装云安全中心Agent的安装验证码。
     * @example `M1HH**`
     */
    CaptchaCode: string;
}
