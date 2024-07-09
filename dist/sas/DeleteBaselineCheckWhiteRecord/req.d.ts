export interface DeleteBaselineCheckWhiteRecordRequest {
    /**
     * 检查项的ID列表。
     */
    "CheckIds"?: number[];
    /**
     * 白名单记录的ID列表。
     */
    "RecordIds"?: number[];
    /**
     * 数据来源。取值：
     * - **default**：主机基线
     * - **agentless**：agentless基线
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
