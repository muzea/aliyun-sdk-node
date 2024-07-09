export interface ModifyPolicyAdvancedConfigRequest {
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
     * 修改访问控制策略严格模式的开关状态。取值：
     * - **on**：开启严格模式。
     * - **off**：关闭严格模式。
     * @example `off`
     */
    "InternetSwitch": string;
}
