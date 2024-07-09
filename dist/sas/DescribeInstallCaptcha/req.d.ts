export interface DescribeInstallCaptchaRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。默认**zh**，取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定安装验证码的有效期。该参数的取值为空时，只查询有效的安装验证码。
     * > 安装验证码只有在有效期内才能使用。已过期的安装验证码无法安装云安全中心Agent。
     * @example `2020-10-11 16:26:22`
     */
    "Deadline"?: string;
}
