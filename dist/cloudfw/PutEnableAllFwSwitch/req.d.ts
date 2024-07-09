export interface PutEnableAllFwSwitchRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙的ID。
     * @example `i-2ze8v2x5kd9qyvp2****`
     */
    "InstanceId"?: string;
}
