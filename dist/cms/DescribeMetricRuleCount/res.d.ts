// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MetricRuleCount
export interface MetricRuleCount {
	Alarm: number;
	Disable: number;
	Nodata: number;
	Ok: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMetricRuleCountResponse
export interface DescribeMetricRuleCountResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	MetricRuleCount: MetricRuleCount;
}

