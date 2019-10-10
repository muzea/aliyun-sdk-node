// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HealthRuleParam
export interface HealthRuleParam {
	Service: string;
	Component: string;
	RuleTitle: string;
	Pass: string;
	RuleId: string;
	RuleDescription: string;
	HostNames: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HealthDetail
export interface HealthDetail {
	code: string;
	HealthRuleParam: HealthRuleParam;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HealthDetailList
export interface HealthDetailList {
	HealthDetail: HealthDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HealthInfo
export interface HealthInfo {
	ServiceName: string;
	ComponentName: string;
	HealthLevel: string;
	StoppedNum: number;
	ManualStoppedNum: number;
	NormalNum: number;
	TotalNum: number;
	AgentHeartBeatLostNum: number;
	HealthDetailList: HealthDetailList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HealthInfoList
export interface HealthInfoList {
	HealthInfo: HealthInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterServiceComponentHealthInfoResponse
export interface ListClusterServiceComponentHealthInfoResponse {
	RequestId: string;
	ClusterId: string;
	HealthInfoList: HealthInfoList;
}

