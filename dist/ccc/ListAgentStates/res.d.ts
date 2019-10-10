// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RealTimeAgentState
export interface RealTimeAgentState {
	InstanceId: string;
	AgentId: string;
	LoginName: string;
	AgentName: string;
	State: string;
	Dn: string;
	StateDuration: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListAgentStates
export interface ListInListAgentStates {
	RealTimeAgentState: RealTimeAgentState[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DataInListAgentStates
export interface DataInListAgentStates {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListAgentStates;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListAgentStatesResponse
export interface ListAgentStatesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Data: DataInListAgentStates;
}

