export interface FuzzyMatchDomainSensitiveWordRequest {
    /**
     * 域名关键字（除域名后缀外包含的词语），多个域名关键字之间使用英文逗号（,）分隔。
     * @example `xxx**`
     */
    "Keyword": string;
    /**
     * 接口返回错误信息的语言。取值范围：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
