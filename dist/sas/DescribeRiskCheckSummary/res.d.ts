// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.LevelCount
export interface LevelCount {
	Key: string;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.StatusCount
export interface StatusCount {
	Status: string;
	Count: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.Group
export interface Group {
	Id: number;
	Title: string;
	Status: string;
	RemainingTime: number;
	Sort: number;
	CountByStatus: StatusCount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.RiskCheckSummary
export interface RiskCheckSummary {
	RiskCount: number;
	PreviousCount: number;
	ItemCount: number;
	RiskRate: number;
	AffectedAssetCount: number;
	PreviousTime: number;
	RiskLevelCount: LevelCount[];
	Groups: Group[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeRiskCheckSummaryResponse
export interface DescribeRiskCheckSummaryResponse {
	RequestId: string;
	RiskCheckSummary: RiskCheckSummary;
}

