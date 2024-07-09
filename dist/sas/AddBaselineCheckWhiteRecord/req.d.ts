export interface AddBaselineCheckWhiteRecordRequest {
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 数据来源，为空时默认查询主机。取值：
     * - **default**：主机
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 检查项的ID。
     * > 您可调用[ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~)接口获取检查项ID。
     * @example `76`
     */
    "CheckId"?: number;
    /**
     * 生效目标类型：
     * - **all_instance**：全部主机
     * - **instance**：部分主机
     * @example `instance`
     */
    "TargetType"?: string;
    /**
     * 加白理由。
     * @example `无效`
     */
    "Reason"?: string;
}
