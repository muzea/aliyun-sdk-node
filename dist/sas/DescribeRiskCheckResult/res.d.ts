// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.RiskItemResource
export interface RiskItemResource {
	ResourceName: string;
	ContentResource: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.RiskCheckResultForDisplay
export interface RiskCheckResultForDisplay {
	ItemId: number;
	TaskId: number;
	Title: string;
	RiskLevel: string;
	Status: string;
	AffectedCount: number;
	CheckTime: number;
	RemainingTime: number;
	Sort: number;
	Type: string;
	RiskItemResources: RiskItemResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeRiskCheckResultResponse
export interface DescribeRiskCheckResultResponse {
	RequestId: string;
	PageCount: number;
	Count: number;
	PageSize: number;
	TotalCount: number;
	CurrentPage: number;
	List: RiskCheckResultForDisplay[];
}

