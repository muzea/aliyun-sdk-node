// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeProcess
export interface NodeProcess {
	ProcessId: number;
	InstanceId: string;
	ProcessName: string;
	ProcessUser: string;
	Command: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeProcesses
export interface NodeProcesses {
	NodeProcess: NodeProcess[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitoringAgentProcessesResponse
export interface DescribeMonitoringAgentProcessesResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	NodeProcesses: NodeProcesses;
}

