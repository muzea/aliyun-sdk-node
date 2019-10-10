// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleCountInfoInGetTaskRuleList
export interface RuleCountInfoInGetTaskRuleList {
	CheckNumber: number;
	CreateEmpid: string;
	CreateTime: number;
	HitNumber: number;
	HitRate: number;
	HitRealViolationRate: number;
	IsDelete: number;
	LastUpdateEmpid: string;
	LastUpdateTime: number;
	Name: string;
	PreReviewNumber: number;
	RealViolationNumber: number;
	ReviewNumber: number;
	Rid: string;
	Select: boolean;
	Status: number;
	Type: number;
	TypeName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetTaskRuleList
export interface DataInGetTaskRuleList {
	RuleCountInfo: RuleCountInfoInGetTaskRuleList[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetTaskRuleListResponse
export interface GetTaskRuleListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageSize: number;
	DataSize: number;
	TotalCount: number;
	ReviewStatus: number;
	TotalSubTaskCount: number;
	CompSubTaskCount: number;
	CurrentPage: number;
	Data: DataInGetTaskRuleList;
}

