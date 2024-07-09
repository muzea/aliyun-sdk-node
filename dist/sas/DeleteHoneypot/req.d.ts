export interface DeleteHoneypotRequest {
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `558b5fa40948ebe2171a74757c54dc7e58f761870fa7ee6a105e70947ec82aa9`
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
