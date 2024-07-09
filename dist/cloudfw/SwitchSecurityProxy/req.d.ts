export interface SwitchSecurityProxyRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * NAT防火墙ID。
     * @example `proxy-natbf******`
     */
    "ProxyId": string;
    /**
     * 安全防护开关。取值：
     * - open：打开
     * - close：关闭
     * @example `open`
     */
    "Switch": string;
}
