export interface DeleteHoneypotProbeBindRequest {
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `aa234650-cfcf-4e25-b61f-c58f603f****`
     */
    "ProbeId"?: string;
    /**
     * 绑定服务记录的唯一ID。
     * @example `aa20815f-f0f3-4e3b-8e13-55771742****`
     */
    "BindId"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
