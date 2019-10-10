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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSamplesInDescribeDeployedApi
export interface ErrorCodeSamplesInDescribeDeployedApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ResultDescriptionsInDescribeDeployedApi
export interface ResultDescriptionsInDescribeDeployedApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParametersInDescribeDeployedApi
export interface SystemParametersInDescribeDeployedApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CustomSystemParametersInDescribeDeployedApi
export interface CustomSystemParametersInDescribeDeployedApi {
	CustomSystemParameter: CustomSystemParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParameter
export interface ConstantParameter {
	ServiceParameterName: string;
	Description: string;
	ConstantValue: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParametersInDescribeDeployedApi
export interface ConstantParametersInDescribeDeployedApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestParametersInDescribeDeployedApi
export interface RequestParametersInDescribeDeployedApi {
	RequestParameter: RequestParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameter
export interface ServiceParameter {
	ServiceParameterName: string;
	ParameterType: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersInDescribeDeployedApi
export interface ServiceParametersInDescribeDeployedApi {
	ServiceParameter: ServiceParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameterMap
export interface ServiceParameterMap {
	RequestParameterName: string;
	ServiceParameterName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersMapInDescribeDeployedApi
export interface ServiceParametersMapInDescribeDeployedApi {
	ServiceParameterMap: ServiceParameterMap[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeDeployedApiResponse
export interface DescribeDeployedApiResponse {
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
	AllowSignatureMethod: string;
	ResultBodyModel: string;
	ForceNonceCheck: boolean;
	DisableInternet: boolean;
	RequestConfig: RequestConfig;
	ServiceConfig: ServiceConfig;
	OpenIdConnectConfig: OpenIdConnectConfig;
	ErrorCodeSamples: ErrorCodeSamplesInDescribeDeployedApi;
	ResultDescriptions: ResultDescriptionsInDescribeDeployedApi;
	SystemParameters: SystemParametersInDescribeDeployedApi;
	CustomSystemParameters: CustomSystemParametersInDescribeDeployedApi;
	ConstantParameters: ConstantParametersInDescribeDeployedApi;
	RequestParameters: RequestParametersInDescribeDeployedApi;
	ServiceParameters: ServiceParametersInDescribeDeployedApi;
	ServiceParametersMap: ServiceParametersMapInDescribeDeployedApi;
}

