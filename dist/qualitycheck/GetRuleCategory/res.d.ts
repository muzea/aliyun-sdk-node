// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.RuleCountInfo
export interface RuleCountInfo {
	Name: string;
	RealViolationNumber: number;
	Status: number;
	TypeName: string;
	CreateEmpid: string;
	CreateTime: string;
	HitRealViolationRate: number;
	LastUpdateTime: string;
	Select: boolean;
	PreReviewNumber: number;
	Rid: string;
	CheckNumber: number;
	ReviewNumber: number;
	HitRate: number;
	HitNumber: number;
	LastUpdateEmpid: string;
	Type: number;
	IsDelete: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetRuleCategory
export interface DataInGetRuleCategory {
	RuleCountInfo: RuleCountInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetRuleCategoryResponse
export interface GetRuleCategoryResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetRuleCategory;
}

