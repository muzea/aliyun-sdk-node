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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.LinesInDescribeGtmAccessStrategy
export interface LinesInDescribeGtmAccessStrategy {
	Line: Line[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmAccessStrategyResponse
export interface DescribeGtmAccessStrategyResponse {
	RequestId: string;
	StrategyId: string;
	StrategyName: string;
	DefultAddrPoolId: string;
	DefaultAddrPoolName: string;
	FailoverAddrPoolId: string;
	FailoverAddrPoolName: string;
	StrategyMode: string;
	AccessMode: string;
	AccessStatus: string;
	InstanceId: string;
	Lines: LinesInDescribeGtmAccessStrategy;
}

