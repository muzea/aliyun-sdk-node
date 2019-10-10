// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.FunctionArg
export interface FunctionArg {
	ArgName: string;
	ArgValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.FunctionArgs
export interface FunctionArgs {
	FunctionArg: FunctionArg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainConfig
export interface DomainConfig {
	FunctionName: string;
	ConfigId: string;
	Status: string;
	FunctionArgs: FunctionArgs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainConfigs
export interface DomainConfigs {
	DomainConfig: DomainConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnDomainConfigsResponse
export interface DescribeCdnDomainConfigsResponse {
	RequestId: string;
	DomainConfigs: DomainConfigs;
}

