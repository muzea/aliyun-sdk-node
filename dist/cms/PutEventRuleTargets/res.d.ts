// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactParameterInPutEventRuleTargets
export interface ContactParameterInPutEventRuleTargets {
	Id: number;
	ContactGroupName: string;
	Level: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FailedContactParameters
export interface FailedContactParameters {
	ContactParameter: ContactParameterInPutEventRuleTargets[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MnsParameterInPutEventRuleTargets
export interface MnsParameterInPutEventRuleTargets {
	Id: number;
	Region: string;
	Queue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FailedMnsParameters
export interface FailedMnsParameters {
	MnsParameter: MnsParameterInPutEventRuleTargets[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FcParameterInPutEventRuleTargets
export interface FcParameterInPutEventRuleTargets {
	Id: number;
	Region: string;
	ServiceName: string;
	FunctionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FailedFcParameters
export interface FailedFcParameters {
	FcParameter: FcParameterInPutEventRuleTargets[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.PutEventRuleTargetsResponse
export interface PutEventRuleTargetsResponse {
	Success: boolean;
	Code: string;
	Message: string;
	RequestId: string;
	FailedParameterCount: string;
	FailedContactParameters: FailedContactParameters;
	FailedMnsParameters: FailedMnsParameters;
	FailedFcParameters: FailedFcParameters;
}

