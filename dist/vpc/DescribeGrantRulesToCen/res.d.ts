// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CbnGrantRule
export interface CbnGrantRule {
	CenInstanceId: string;
	CenOwnerId: number;
	CreationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CenGrantRules
export interface CenGrantRules {
	CbnGrantRule: CbnGrantRule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeGrantRulesToCenResponse
export interface DescribeGrantRulesToCenResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CenGrantRules: CenGrantRules;
}

