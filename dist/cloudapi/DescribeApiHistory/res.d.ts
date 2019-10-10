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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.VpcConfig
export interface VpcConfig {
	Name: string;
	Port: number;
	InstanceId: string;
	VpcId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.FunctionComputeConfig
export interface FunctionComputeConfig {
	RegionId: string;
	ServiceName: string;
	RoleArn: string;
	FunctionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MockHeader
export interface MockHeader {
	HeaderName: string;
	HeaderValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.MockHeadersInDescribeDeployedApi
export interface MockHeadersInDescribeDeployedApi {
	MockHeader: MockHeader[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceConfig
export interface ServiceConfig {
	ServiceVpcEnable: string;
	ContentTypeCatagory: string;
	ServiceHttpMethod: string;
	ServiceAddress: string;
	Mock: string;
	MockResult: string;
	ServiceTimeout: number;
	AoneAppName: string;
	ServiceProtocol: string;
	ContentTypeValue: string;
	ServicePath: string;
	MockStatusCode: number;
	VpcConfig: VpcConfig;
	FunctionComputeConfig: FunctionComputeConfig;
	MockHeaders: MockHeadersInDescribeDeployedApi;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.OpenIdConnectConfig
export interface OpenIdConnectConfig {
	IdTokenParamName: string;
	PublicKeyId: string;
	PublicKey: string;
	OpenIdApiType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSample
export interface ErrorCodeSample {
	Message: string;
	Code: string;
	Model: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSamplesInDescribeApiHistory
export interface ErrorCodeSamplesInDescribeApiHistory {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ResultDescriptionsInDescribeApiHistory
export interface ResultDescriptionsInDescribeApiHistory {
	ResultDescription: ResultDescription[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParameter
export interface SystemParameter {
	ParameterName: string;
	ServiceParameterName: string;
	DemoValue: string;
	Description: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParametersInDescribeApiHistory
export interface SystemParametersInDescribeApiHistory {
	SystemParameter: SystemParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CustomSystemParameter
export interface CustomSystemParameter {
	ParameterName: string;
	ServiceParameterName: string;
	DemoValue: string;
	Description: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CustomSystemParametersInDescribeApiHistory
export interface CustomSystemParametersInDescribeApiHistory {
	CustomSystemParameter: CustomSystemParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParameter
export interface ConstantParameter {
	ServiceParameterName: string;
	Description: string;
	ConstantValue: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParametersInDescribeApiHistory
export interface ConstantParametersInDescribeApiHistory {
	ConstantParameter: ConstantParameter[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestParametersInDescribeApiHistory
export interface RequestParametersInDescribeApiHistory {
	RequestParameter: RequestParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameter
export interface ServiceParameter {
	ServiceParameterName: string;
	ParameterType: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersInDescribeApiHistory
export interface ServiceParametersInDescribeApiHistory {
	ServiceParameter: ServiceParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameterMap
export interface ServiceParameterMap {
	RequestParameterName: string;
	ServiceParameterName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersMapInDescribeApiHistory
export interface ServiceParametersMapInDescribeApiHistory {
	ServiceParameterMap: ServiceParameterMap[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiHistoryResponse
export interface DescribeApiHistoryResponse {
	RequestId: string;
	RegionId: string;
	GroupId: string;
	GroupName: string;
	StageName: string;
	ApiId: string;
	ApiName: string;
	Description: string;
	HistoryVersion: string;
	Status: string;
	Visibility: string;
	AuthType: string;
	ResultType: string;
	ResultSample: string;
	FailResultSample: string;
	DeployedTime: string;
	AllowSignatureMethod: string;
	ResultBodyModel: string;
	ForceNonceCheck: boolean;
	DisableInternet: boolean;
	RequestConfig: RequestConfig;
	ServiceConfig: ServiceConfig;
	OpenIdConnectConfig: OpenIdConnectConfig;
	ErrorCodeSamples: ErrorCodeSamplesInDescribeApiHistory;
	ResultDescriptions: ResultDescriptionsInDescribeApiHistory;
	SystemParameters: SystemParametersInDescribeApiHistory;
	CustomSystemParameters: CustomSystemParametersInDescribeApiHistory;
	ConstantParameters: ConstantParametersInDescribeApiHistory;
	RequestParameters: RequestParametersInDescribeApiHistory;
	ServiceParameters: ServiceParametersInDescribeApiHistory;
	ServiceParametersMap: ServiceParametersMapInDescribeApiHistory;
}

