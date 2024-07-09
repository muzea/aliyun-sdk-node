export interface DeleteImageVulWhitelistRequest {
    /**
     * 漏洞白名单ID。多个id用英文逗号（,）分隔。
     * @example `123`
     */
    "Ids"?: string;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
