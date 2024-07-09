export interface StartHoneypotRequest {
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****`
     */
    "HoneypotId": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
