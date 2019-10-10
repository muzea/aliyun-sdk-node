// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactParameter
export interface ContactParameter {
	Level: string;
	Id: string;
	ContactGroupName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.ContactParameters
export interface ContactParameters {
	ContactParameter: ContactParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FCParameter
export interface FCParameter {
	Region: string;
	Arn: string;
	Id: string;
	ServiceName: string;
	FunctionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.FcParameters
export interface FcParameters {
	FCParameter: FCParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MnsParameter
export interface MnsParameter {
	Region: string;
	Queue: string;
	Arn: string;
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.MnsParameters
export interface MnsParameters {
	MnsParameter: MnsParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.WebhookParameter
export interface WebhookParameter {
	Id: string;
	Protocol: string;
	Method: string;
	Url: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.WebhookParameters
export interface WebhookParameters {
	WebhookParameter: WebhookParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SlsParameter
export interface SlsParameter {
	Id: string;
	Region: string;
	Project: string;
	LogStore: string;
	Arn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SlsParameters
export interface SlsParameters {
	SlsParameter: SlsParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeEventRuleTargetListResponse
export interface DescribeEventRuleTargetListResponse {
	Code: string;
	Message: string;
	RequestId: string;
	ContactParameters: ContactParameters;
	FcParameters: FcParameters;
	MnsParameters: MnsParameters;
	WebhookParameters: WebhookParameters;
	SlsParameters: SlsParameters;
}

