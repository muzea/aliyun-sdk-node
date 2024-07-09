export interface SaveSuspEventUserSettingRequest {
    /**
     * 异常事件数据的来源，固定为sas。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 告警通知的告警级别。取值：
     * - **remind**：提醒
     * - **suspicious**：可疑
     * - **serious**：紧急
     * @example `suspicious,serious,remind`
     */
    "LevelsOn"?: string;
}
