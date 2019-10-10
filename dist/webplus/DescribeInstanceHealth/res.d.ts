// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceHealthInDescribeInstanceHealth
export interface InstanceHealthInDescribeInstanceHealth {
	InstanceId: string;
	AgentStatus: string;
	AppStatus: string;
	DisconnectedTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeInstanceHealthResponse
export interface DescribeInstanceHealthResponse {
	RequestId: string;
	Code: string;
	Message: string;
	InstanceHealth: InstanceHealthInDescribeInstanceHealth;
}

