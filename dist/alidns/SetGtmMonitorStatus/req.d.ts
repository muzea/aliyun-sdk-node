export interface SetGtmMonitorStatusRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 健康检查配置ID。
     * @example `abc1234`
     */
    "MonitorConfigId": string;
    /**
     * 开启状态。取值：
     * - **OPEN**：开启
     * - **CLOSE**：关闭
     * @example `OPEN`
     */
    "Status": string;
}
