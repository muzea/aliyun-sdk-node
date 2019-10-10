// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceHealth
export interface InstanceHealth {
	AppStatus: string;
	InstanceId: string;
	DisconnectedTime: string;
	AgentStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceHealthList
export interface InstanceHealthList {
	InstanceHealth: InstanceHealth[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.EnvInstanceHealth
export interface EnvInstanceHealth {
	EnvId: string;
	EnvName: string;
	InstanceHealthList: InstanceHealthList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeAppEnvInstanceHealthResponse
export interface DescribeAppEnvInstanceHealthResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EnvInstanceHealth: EnvInstanceHealth;
}

