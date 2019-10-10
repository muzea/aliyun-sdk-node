// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.ConfigTarget
export interface ConfigTarget {
	Flag: string;
	TargetType: string;
	Target: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.Strategy
export interface Strategy {
	CycleDays: number;
	Id: number;
	CycleStartTime: number;
	Type: number;
	Name: string;
	RiskCount: number;
	EcsCount: number;
	ExecStatus: number;
	ProcessRate: number;
	PassRate: number;
	ConfigTargets: ConfigTarget[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeStratetyResponse
export interface DescribeStratetyResponse {
	RequestId: string;
	Strategies: Strategy[];
}

