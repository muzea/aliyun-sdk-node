export interface UpdateBaselineCheckWhiteRecordRequest {
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查项的ID。
     * > 您可调用[ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~)接口获取检查项ID。
     * @example `16`
     */
    "CheckId"?: number;
    /**
     * 白名单记录的ID。
     * @example `14`
     */
    "RecordId"?: number;
    /**
     * 数据来源。取值：
     * - **default**：主机
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 生效目标类型：
     * - **all_instance**：全部主机
     * - **instance**：部分主机
     * @example `all_instance`
     */
    "TargetType"?: string;
    /**
     * 加白原因。
     * @example `已手工处理`
     */
    "Reason"?: string;
}
