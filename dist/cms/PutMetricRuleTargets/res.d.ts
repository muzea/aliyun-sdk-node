// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Target
export interface Target {
	Arn: string;
	Level: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.TargetsInPutMetricRuleTargets
export interface TargetsInPutMetricRuleTargets {
	Target: Target[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FailData
export interface FailData {
	Targets: TargetsInPutMetricRuleTargets;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.PutMetricRuleTargetsResponse
export interface PutMetricRuleTargetsResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	FailData: FailData;
}

