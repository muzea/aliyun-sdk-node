export interface GetHoneypotProbeRequest {
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `d6c1ebc9-a90d-4c9e-9490-328814d1ca00`
     */
    "ProbeId": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
