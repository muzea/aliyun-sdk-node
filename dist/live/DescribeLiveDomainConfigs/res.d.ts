// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FunctionArg
export interface FunctionArg {
	ArgName: string;
	ArgValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FunctionArgs
export interface FunctionArgs {
	FunctionArg: FunctionArg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainConfig
export interface DomainConfig {
	FunctionName: string;
	ConfigId: string;
	Status: string;
	FunctionArgs: FunctionArgs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainConfigs
export interface DomainConfigs {
	DomainConfig: DomainConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainConfigsResponse
export interface DescribeLiveDomainConfigsResponse {
	RequestId: string;
	DomainConfigs: DomainConfigs;
}

