export interface StopHoneypotRequest {
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `444c699ac151b183b04b562b1dc02639d504c9d097246a322de75c963fe*****`
     */
    "HoneypotId": string;
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
