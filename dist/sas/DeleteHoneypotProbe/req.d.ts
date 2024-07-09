export interface DeleteHoneypotProbeRequest {
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `95f0f79c-f7e9-4b09-a6e3-95a4cb6d****`
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
