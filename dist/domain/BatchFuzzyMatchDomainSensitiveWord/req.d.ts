export interface BatchFuzzyMatchDomainSensitiveWordRequest {
    /**
     * 域名关键字，多个域名关键字之间用英文逗号（,）分隔。
     * @example `example.com,aliyundoc.com`
     */
    "Keyword": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
