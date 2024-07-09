export interface SwitchAdvancedMonitoringRequest {
    /**
     * 需要查询或者修改应用高级监控功能的应用ID。
     * @example `9e224bc6-a646-4484-****-e617b7e7****`
     */
    "AppId": string;
    /**
     * 应用高级监控的开关，可选参数如下：
     * - true：打开。
     * - false：关闭。
     * 在查询应用高级监控状态时，此参数不必填写。
     * @example `true`
     */
    "EnableAdvancedMonitoring"?: boolean;
}
