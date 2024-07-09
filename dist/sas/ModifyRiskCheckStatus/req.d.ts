export interface ModifyRiskCheckStatusRequest {
    /**
     * 访问源IP地址。
     * @example `183.223.XX.XX`
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
     * 检查项ID。
     * @example `37`
     */
    "ItemId": number;
    /**
     * 检查项所属检查任务的ID。
     * @example `57`
     */
    "TaskId": number;
    /**
     * 检查项的处理状态。 取值包括：
     * - **ignored**：忽略
     * - **reset**：取消忽略
     * @example `ignored`
     */
    "Status": string;
}
