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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ErrorCodeSamplesInDescribeApi
export interface ErrorCodeSamplesInDescribeApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ResultDescriptionsInDescribeApi
export interface ResultDescriptionsInDescribeApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SystemParametersInDescribeApi
export interface SystemParametersInDescribeApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CustomSystemParametersInDescribeApi
export interface CustomSystemParametersInDescribeApi {
	CustomSystemParameter: CustomSystemParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParameter
export interface ConstantParameter {
	ServiceParameterName: string;
	Description: string;
	ConstantValue: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ConstantParametersInDescribeApi
export interface ConstantParametersInDescribeApi {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.RequestParametersInDescribeApi
export interface RequestParametersInDescribeApi {
	RequestParameter: RequestParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameter
export interface ServiceParameter {
	ServiceParameterName: string;
	ParameterType: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersInDescribeApi
export interface ServiceParametersInDescribeApi {
	ServiceParameter: ServiceParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParameterMap
export interface ServiceParameterMap {
	RequestParameterName: string;
	ServiceParameterName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ServiceParametersMapInDescribeApi
export interface ServiceParametersMapInDescribeApi {
	ServiceParameterMap: ServiceParameterMap[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DeployedInfo
export interface DeployedInfo {
	StageName: string;
	EffectiveVersion: string;
	DeployedStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DeployedInfos
export interface DeployedInfos {
	DeployedInfo: DeployedInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiResponse
export interface DescribeApiResponse {
	RequestId: string;
	RegionId: string;
	ApiId: string;
	ApiName: string;
	GroupId: string;
	GroupName: string;
	Visibility: string;
	AuthType: string;
	ResultType: string;
	ResultSample: string;
	FailResultSample: string;
	CreatedTime: string;
	ModifiedTime: string;
	Description: string;
	Mock: string;
	MockResult: string;
	AllowSignatureMethod: string;
	WebSocketApiType: string;
	ResultBodyModel: string;
	ForceNonceCheck: boolean;
	DisableInternet: boolean;
	RequestConfig: RequestConfig;
	ServiceConfig: ServiceConfig;
	OpenIdConnectConfig: OpenIdConnectConfig;
	ErrorCodeSamples: ErrorCodeSamplesInDescribeApi;
	ResultDescriptions: ResultDescriptionsInDescribeApi;
	SystemParameters: SystemParametersInDescribeApi;
	CustomSystemParameters: CustomSystemParametersInDescribeApi;
	ConstantParameters: ConstantParametersInDescribeApi;
	RequestParameters: RequestParametersInDescribeApi;
	ServiceParameters: ServiceParametersInDescribeApi;
	ServiceParametersMap: ServiceParametersMapInDescribeApi;
	DeployedInfos: DeployedInfos;
}

