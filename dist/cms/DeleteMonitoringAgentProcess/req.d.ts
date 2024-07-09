export interface DeleteMonitoringAgentProcessRequest {
    /**
     * 实例ID。
     * @example `i-KpVny6l****`
     */
    "InstanceId": string;
    /**
     * 进程名称。
     * > `ProcessId`和`ProcessName`必须设置一个。
     * @example `http`
     */
    "ProcessName"?: string;
    /**
     * 进程ID。
     * > `ProcessId`和`ProcessName`必须设置一个。
     * @example `123****`
     */
    "ProcessId"?: string;
}
