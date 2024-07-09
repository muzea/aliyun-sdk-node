export interface CreateMonitoringAgentProcessRequest {
    /**
     * 进程名称。
     * @example `java`
     */
    "ProcessName"?: string;
    /**
     * 实例ID。
     * @example ` i-2ze51wjtwox01r8g****`
     */
    "InstanceId": string;
    /**
     * 执行进程的用户。
     * @example `admin`
     */
    "ProcessUser"?: string;
}
