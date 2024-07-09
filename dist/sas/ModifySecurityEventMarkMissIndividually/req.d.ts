export interface ModifySecurityEventMarkMissIndividuallyRequest {
    /**
     * 新增的告警加白规则。
     * @example `[{\"field\":\"location\",\"operate\":\"contains\",\"eventType\":\"SIL_AI_ALERT\",\"eventName\":\"login_common_ip\",\"fieldValue\":\"xx\",\"uuids\":\"4296ee47-bf19-4fa4-a4a6-6bxxxxxxxxx\"}]`
     */
    "InsertMarkMissParam"?: string;
    /**
     * 删除的告警加白规则。
     * @example `[{\"field\":\"loginSourceIp\",\"operate\":\"contains\",\"eventType\":\"SIL_AI_ALERT\",\"eventName\":\"login_common_ip\",\"fieldValue\":\"10.12.XX.XX\",\"uuids\":\"\"}]`
     */
    "DeleteMarkMissParam"?: string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `127.0.XX.XX`
     */
    "SourceIp"?: string;
}
