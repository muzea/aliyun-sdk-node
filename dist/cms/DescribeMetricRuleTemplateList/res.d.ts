// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ApplyHistory
export interface ApplyHistory {
	GroupId: number;
	GroupName: string;
	ApplyTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ApplyHistories
export interface ApplyHistories {
	ApplyHistory: ApplyHistory[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Template
export interface Template {
	Name: string;
	Description: string;
	RestVersion: number;
	TemplateId: number;
	GmtCreate: number;
	GmtModified: number;
	ApplyHistories: ApplyHistories;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Templates
export interface Templates {
	Template: Template[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMetricRuleTemplateListResponse
export interface DescribeMetricRuleTemplateListResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	Total: number;
	Templates: Templates;
}

