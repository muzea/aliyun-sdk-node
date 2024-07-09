export interface ModifyFirewallV2RoutePolicySwitchRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-5b202e7f0be64611****`
     */
    "FirewallId"?: string;
    /**
     * 防火墙路由策略ID。
     * @example `policy-93684cc5caa44b2e****`
     */
    "TrFirewallRoutePolicyId"?: string;
    /**
     * 策略开关。取值：
     * - open：开启
     * - close：关闭
     * @example `open`
     */
    "TrFirewallRoutePolicySwitchStatus"?: string;
    /**
     * 是否恢复引流配置。取值：
     * - true：路由回滚
     * - false：路由撤销
     * @example `false`
     */
    "ShouldRecover"?: string;
}
