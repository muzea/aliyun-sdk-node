// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Filter
export interface Filter {
	Function: string;
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Filters
export interface Filters {
	Filter: Filter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourceItem
export interface ResourceItem {
	GroupId: number;
	Category: string;
	FilterRelation: string;
	Filters: Filters;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourceInDescribeMonitorGroupDynamicRules
export interface ResourceInDescribeMonitorGroupDynamicRules {
	Resource: ResourceItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitorGroupDynamicRulesResponse
export interface DescribeMonitorGroupDynamicRulesResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Resource: ResourceInDescribeMonitorGroupDynamicRules;
}

