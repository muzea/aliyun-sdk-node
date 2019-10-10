// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.TargetIds
export interface TargetIds {
	TargetId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FailIds
export interface FailIds {
	TargetIds: TargetIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DeleteMetricRuleTargetsResponse
export interface DeleteMetricRuleTargetsResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	FailIds: FailIds;
}

