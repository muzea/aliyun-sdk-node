// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.FunctionArg
export interface FunctionArg {
	ArgName: string;
	ArgValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.FunctionArgs
export interface FunctionArgs {
	FunctionArg: FunctionArg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DomainConfig
export interface DomainConfig {
	FunctionName: string;
	ConfigId: string;
	Status: string;
	FunctionArgs: FunctionArgs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DomainConfigs
export interface DomainConfigs {
	DomainConfig: DomainConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainConfigsResponse
export interface DescribeVodDomainConfigsResponse {
	RequestId: string;
	DomainConfigs: DomainConfigs;
}

