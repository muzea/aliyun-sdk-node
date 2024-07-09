export interface StartBaselineSecurityCheckRequest {
    /**
     * 访问源的IP地址。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值包括：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查的任务类型。取值包括：
     * - **check**：执行检测
     * - **verify**：执行验证
     * @example `verify`
     */
    "Type": string;
    /**
     * 检查项ID。
     * > 执行云产品配置检查任务，需要提供检查项的ID，该ID可调用[DescribeRiskItemType](~~DescribeRiskItemType~~)接口获取。
     */
    "ItemIds"?: number[];
}
