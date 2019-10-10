// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourceInDescribeAlertingMetricRuleResources
export interface ResourceInDescribeAlertingMetricRuleResources {
	RuleId: string;
	RuleName: string;
	GroupId: string;
	Resource: string;
	Enable: string;
	LastAlertTime: string;
	LastModifyTime: string;
	StartTime: string;
	MetricValues: string;
	RetryTimes: string;
	Threshold: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ResourcesInDescribeAlertingMetricRuleResources
export interface ResourcesInDescribeAlertingMetricRuleResources {
	Resource: ResourceInDescribeAlertingMetricRuleResources[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeAlertingMetricRuleResourcesResponse
export interface DescribeAlertingMetricRuleResourcesResponse {
	RequestId: string;
	Success: boolean;
	Code: number;
	Message: string;
	Total: number;
	Resources: ResourcesInDescribeAlertingMetricRuleResources;
}

