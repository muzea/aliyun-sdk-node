export interface ResetHoneypotRequest {
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `945607c2ae2a1a737c04599d6608065688bfc6048d9b9d306ce8dc8191c*****`
     */
    "HoneypotId": string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
