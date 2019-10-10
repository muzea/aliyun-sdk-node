// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceAppStatus
export interface InstanceAppStatus {
	HealthyInstances: number;
	UnhealthyInstances: number;
	UnknownInstances: number;
	StoppedInstances: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceAgentStatus
export interface InstanceAgentStatus {
	ConnectedInstances: number;
	DisconnectedInstances: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.EnvStatus
export interface EnvStatus {
	EnvId: string;
	EnvName: string;
	EnvStatus: string;
	LastEnvStatus: string;
	ApplyingChange: boolean;
	AbortingChange: boolean;
	LatestChangeId: string;
	ChangeBanner: string;
	InstanceAppStatus: InstanceAppStatus;
	InstanceAgentStatus: InstanceAgentStatus;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeAppEnvStatusResponse
export interface DescribeAppEnvStatusResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EnvStatus: EnvStatus;
}

