interface DeleteMonitoringAgentProcessRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `i-KpVny6l****`
    */ "InstanceId": string;
    /**
    * 进程名称。ProcessId和ProcessName 参数必须至少填写其中一个参数。
    * @example `http`
    */ "ProcessName"?: string;
    /**
    * 进程ID。ProcessId和ProcessName 参数必须至少填写其中一个参数。
    * @example `12345`
    */ "ProcessId"?: string;
}
export { DeleteMonitoringAgentProcessRequest };