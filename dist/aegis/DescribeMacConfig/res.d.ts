// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Target
export interface Target {
	Flag: string;
	Target: string;
	TargetType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Config
export interface Config {
	StartTime: string;
	EndTime: string;
	Ip: string;
	StrategyId: number;
	Account: string;
	Location: string;
	Switcher: string;
	VulType: string;
	UuidCount: number;
	TotalCount: number;
	TargetList: Target[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeMacConfigResponse
export interface DescribeMacConfigResponse {
	RequestId: string;
	Count: number;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	Configs: Config[];
}

