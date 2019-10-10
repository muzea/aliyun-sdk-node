// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentStateCount
export interface AgentStateCount {
	State: string;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentStateDistributions
export interface AgentStateDistributions {
	AgentStateCount: AgentStateCount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RealTimeInstanceState
export interface RealTimeInstanceState {
	AgentStateDistributions: AgentStateDistributions;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetInstanceStateResponse
export interface GetInstanceStateResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	RealTimeInstanceState: RealTimeInstanceState;
}

