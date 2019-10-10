// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Line
export interface Line {
	GroupCode: string;
	LineCode: string;
	LineName: string;
	GroupName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.LinesInDescribeGtmAccessStrategies
export interface LinesInDescribeGtmAccessStrategies {
	Line: Line[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Strategy
export interface Strategy {
	StrategyId: string;
	StrategyName: string;
	CreateTime: string;
	CreateTimestamp: number;
	DefaultAddrPoolId: string;
	DefaultAddrPoolName: string;
	FailoverAddrPoolId: string;
	FailoverAddrPoolName: string;
	AccessMode: string;
	AccessStatus: string;
	StrategyMode: string;
	InstanceId: string;
	Lines: LinesInDescribeGtmAccessStrategies;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Strategies
export interface Strategies {
	Strategy: Strategy[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmAccessStrategiesResponse
export interface DescribeGtmAccessStrategiesResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageNumber: number;
	PageSize: number;
	Strategies: Strategies;
}

