export interface DeleteSecurityProxyRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * NAT防火墙ID。
     * @example `proxy-nat00ab******`
     */
    "ProxyId": string;
}
