// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentDevice
export interface AgentDevice {
	InstanceId: string;
	RamId: number;
	LoginTime: number;
	ClientIp: string;
	ClientPort: string;
	BrowserVersion: string;
	IsLogin: number;
	Remark: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentDeviceList
export interface AgentDeviceList {
	AgentDevice: AgentDevice[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListAgentDevicesResponse
export interface ListAgentDevicesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	AgentDeviceList: AgentDeviceList;
}

