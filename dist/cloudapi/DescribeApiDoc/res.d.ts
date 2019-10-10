// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestConfig
export interface RequestConfig {
	RequestHttpMethod: string;
	RequestProtocol: string;
	BodyModel: string;
	RequestMode: string;
	RequestPath: string;
	PostBodyDescription: string;
	BodyFormat: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSample
export interface ErrorCodeSample {
	Message: string;
	Code: string;
	Model: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSamplesInDescribeApiDoc
export interface ErrorCodeSamplesInDescribeApiDoc {
	ErrorCodeSample: ErrorCodeSample[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ResultDescription
export interface ResultDescription {
	Key: string;
	Name: string;
	Mandatory: boolean;
	HasChild: boolean;
	Pid: string;
	Id: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ResultDescriptionsInDescribeApiDoc
export interface ResultDescriptionsInDescribeApiDoc {
	ResultDescription: ResultDescription[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestParameter
export interface RequestParameter {
	MaxValue: number;
	ApiParameterName: string;
	DocOrder: number;
	EnumValue: string;
	ParameterType: string;
	DefaultValue: string;
	JsonScheme: string;
	Location: string;
	Required: string;
	DemoValue: string;
	MinLength: number;
	MaxLength: number;
	RegularExpression: string;
	MinValue: number;
	DocShow: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestParametersInDescribeApiDoc
export interface RequestParametersInDescribeApiDoc {
	RequestParameter: RequestParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiDocResponse
export interface DescribeApiDocResponse {
	RequestId: string;
	RegionId: string;
	GroupId: string;
	GroupName: string;
	StageName: string;
	ApiId: string;
	ApiName: string;
	Description: string;
	Visibility: string;
	AuthType: string;
	ResultType: string;
	ResultSample: string;
	FailResultSample: string;
	DeployedTime: string;
	ForceNonceCheck: boolean;
	DisableInternet: boolean;
	RequestConfig: RequestConfig;
	ErrorCodeSamples: ErrorCodeSamplesInDescribeApiDoc;
	ResultDescriptions: ResultDescriptionsInDescribeApiDoc;
	RequestParameters: RequestParametersInDescribeApiDoc;
}

