interface DescribeMonitoringAgentStatusesRequest {
    "RegionId"?: string;
    /**
    * 要获取状态的实例ID，多个实例ID直接用英文逗号分隔。
    * @example `i-12345w55tr2rcpejp****,i-23456w55tr2rcpejp****`
    */ "InstanceIds": string;
}
export { DescribeMonitoringAgentStatusesRequest };