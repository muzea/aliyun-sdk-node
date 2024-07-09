export interface DescribeFrontVulPatchListRequest {
    /**
     * 要查询的Windows系统漏洞的信息。使用JSON格式的字符串表示，包含以下字段：
     * - **name**：漏洞名称。
     * - **uuid**：存在漏洞的服务器UUID。
     * - **tag**：漏洞标签。固定取值为**system**，表示系统漏洞。
     * @example `[{"name":"5000803","uuid":"026c9296-1234-5678-b937-a7d81f05****","tag":"system"}]`
     */
    "Info": string;
    /**
     * 漏洞的处理方式。固定取值：**vul_fix**，表示修复漏洞。
     * @example `vul_fix`
     */
    "OperateType": string;
    /**
     * 要查询的漏洞类型。固定取值：**sys**，表示Windows漏洞。
     * @example `sys`
     */
    "Type": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
