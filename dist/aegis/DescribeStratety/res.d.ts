// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.SubType
export interface SubType {
	TypeName: string;
	WarnCount: string;
	On: boolean;
	Alias: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.RiskTypeWhiteListQueryResult
export interface RiskTypeWhiteListQueryResult {
	TypeName: string;
	Alias: string;
	On: boolean;
	SubTypes: SubType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.ConfigTarget
export interface ConfigTarget {
	Flag: string;
	Target: string;
	TargetType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Strategy
export interface Strategy {
	StrategyName: string;
	Name: string;
	Id: number;
	RiskCount: number;
	Status: number;
	CycleDays: number;
	EcsCount: number;
	VirusProcCount: number;
	PassRate: number;
	ExecStatus: number;
	AssetCount: number;
	Progress: number;
	SuspiciousProcCount: number;
	StrategyId: number;
	StudyTime: number;
	CycleStartTime: number;
	ProcessRate: number;
	TrustProcCount: number;
	Type: number;
	RiskTypeWhiteListQueryResultList: RiskTypeWhiteListQueryResult[];
	ConfigTargets: ConfigTarget[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeStratetyResponse
export interface DescribeStratetyResponse {
	RequestId: string;
	Strategies: Strategy[];
}

