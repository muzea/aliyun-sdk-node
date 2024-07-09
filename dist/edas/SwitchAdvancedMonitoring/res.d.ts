export interface SwitchAdvancedMonitoringResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `The advanced monitoring status is disabled already for application which app_id is 9e224bc6-a646-4484-ae31-e617b7e7****`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `577AED12-32D8-40B6-991F-17D7A601****`
     */
    RequestId: string;
    /**
     * 应用高级监控的开关状态：
     * - true：打开。
     * - false：关闭。
     * @example `false`
     */
    AdvancedMonitoringEnabled: boolean;
}
