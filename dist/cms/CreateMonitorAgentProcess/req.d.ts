interface CreateMonitorAgentProcessRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `i-123****`
    */ "InstanceId": string;
    /**
    * 进程名称。
    * @example `java`
    */ "ProcessName": string;
    /**
    * 执行进程的用户。
    * @example `admin`
    */ "ProcessUser"?: string;
}
export { CreateMonitorAgentProcessRequest };