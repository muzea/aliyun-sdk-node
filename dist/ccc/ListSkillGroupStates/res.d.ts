// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RealTimeSkillGroupState
export interface RealTimeSkillGroupState {
	InstanceId: string;
	SkillGroupId: string;
	SkillGroupName: string;
	WaitingCalls: number;
	LongestCall: number;
	LoggedInAgents: number;
	ReadyAgents: number;
	BreakingAgents: number;
	TalkingAgents: number;
	WorkingAgents: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListSkillGroupStates
export interface ListInListSkillGroupStates {
	RealTimeSkillGroupState: RealTimeSkillGroupState[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DetailData
export interface DetailData {
	EventType: string;
	Helper: string;
	SatisfactionalResearch: string;
	SkillGroup: string;
	HangUper: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallEventDetail
export interface CallEventDetail {
	TimeStamp: string;
	Event: string;
	AgentName: string;
	Status: string;
	CallMode: string;
	Duration: number;
	DetailData: DetailData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Events
export interface Events {
	CallEventDetail: CallEventDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Data
export interface Data {
	Represent: string;
	StateDuration: string;
	PrivacyNumber: string;
	CallId: string;
	Callee: string;
	PageSize: number;
	Caller: string;
	CallType: string;
	AgentName: string;
	ReleaseReason: string;
	StatusCode: string;
	StartTime: string;
	AgentId: string;
	State: string;
	TelX: string;
	DateCreated: string;
	InstanceId: string;
	LoginName: string;
	TotalCount: number;
	ReleaseAgent: string;
	Dn: string;
	PageNumber: number;
	List: ListInListSkillGroupStates;
	Events: Events;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListSkillGroupStatesResponse
export interface ListSkillGroupStatesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Data: Data;
}

