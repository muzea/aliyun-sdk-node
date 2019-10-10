// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Target
export interface Target {
	Arn: string;
	Level: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.TargetsInDescribeMetricRuleTargets
export interface TargetsInDescribeMetricRuleTargets {
	Target: Target[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMetricRuleTargetsResponse
export interface DescribeMetricRuleTargetsResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Targets: TargetsInDescribeMetricRuleTargets;
}

