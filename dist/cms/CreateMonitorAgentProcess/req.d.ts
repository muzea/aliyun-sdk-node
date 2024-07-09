export interface CreateMonitorAgentProcessRequest {
    /**
     * 进程名称。
     * @example `AliYunDun`
     */
    "ProcessName": string;
    /**
     * 实例ID。
     * @example `i-2ze2d6j5uhg20x47****`
     */
    "InstanceId": string;
    /**
     * 执行进程的用户。
     * @example `admin`
     */
    "ProcessUser"?: string;
}
