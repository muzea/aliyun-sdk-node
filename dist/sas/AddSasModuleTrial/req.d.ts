export interface AddSasModuleTrialRequest {
    /**
     * 模块code。取值：
     * - **vulFix**：漏洞修复
     * - **cloudSiem**：威胁分析与响应
     * @example `vulFix`
     */
    "ModuleCode"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
