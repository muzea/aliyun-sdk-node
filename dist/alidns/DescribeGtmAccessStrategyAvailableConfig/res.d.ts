// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AddrPool
export interface AddrPool {
	AddrCount: number;
	Name: string;
	MinAvailableAddrNum: number;
	UpdateTime: string;
	MonitorConfigId: string;
	CreateTimestamp: number;
	CreateTime: string;
	AddrPoolName: string;
	AddrPoolId: string;
	UpdateTimestamp: number;
	Status: string;
	MonitorStatus: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AddrPoolsInDescribeGtmAccessStrategyAvailableConfig
export interface AddrPoolsInDescribeGtmAccessStrategyAvailableConfig {
	AddrPool: AddrPool[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Line
export interface Line {
	GroupCode: string;
	LineCode: string;
	LineName: string;
	GroupName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.LinesInDescribeGtmAccessStrategyAvailableConfig
export interface LinesInDescribeGtmAccessStrategyAvailableConfig {
	Line: Line[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmAccessStrategyAvailableConfigResponse
export interface DescribeGtmAccessStrategyAvailableConfigResponse {
	RequestId: string;
	AddrPools: AddrPoolsInDescribeGtmAccessStrategyAvailableConfig;
	Lines: LinesInDescribeGtmAccessStrategyAvailableConfig;
}

