export interface ModifyEmgVulSubmitRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的漏洞的名称。
     * @example `scan:ASCV-2019-032401`
     */
    "Name": string;
    /**
     * 选择是否执行漏洞检测。取值：
     * - **yes**：执行
     * - **no**：不执行
     * @example `yes`
     */
    "UserAgreement": string;
}
