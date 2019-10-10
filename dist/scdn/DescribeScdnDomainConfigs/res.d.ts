// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.FunctionArg
export interface FunctionArg {
	ArgName: string;
	ArgValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.FunctionArgs
export interface FunctionArgs {
	FunctionArg: FunctionArg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DomainConfig
export interface DomainConfig {
	FunctionName: string;
	ConfigId: string;
	Status: string;
	FunctionArgs: FunctionArgs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DomainConfigs
export interface DomainConfigs {
	DomainConfig: DomainConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainConfigsResponse
export interface DescribeScdnDomainConfigsResponse {
	RequestId: string;
	DomainConfigs: DomainConfigs;
}

