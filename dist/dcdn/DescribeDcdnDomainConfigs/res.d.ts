// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.FunctionArg
export interface FunctionArg {
	ArgName: string;
	ArgValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.FunctionArgs
export interface FunctionArgs {
	FunctionArg: FunctionArg[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DomainConfig
export interface DomainConfig {
	FunctionName: string;
	ConfigId: string;
	Status: string;
	FunctionArgs: FunctionArgs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DomainConfigs
export interface DomainConfigs {
	DomainConfig: DomainConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainConfigsResponse
export interface DescribeDcdnDomainConfigsResponse {
	RequestId: string;
	DomainConfigs: DomainConfigs;
}

