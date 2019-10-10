// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PerformanceValue
export interface PerformanceValue {
	Value: string;
	Date: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ValuesInDescribeDrdsInstanceMonitor
export interface ValuesInDescribeDrdsInstanceMonitor {
	PerformanceValue: PerformanceValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PartialPerformanceData
export interface PartialPerformanceData {
	Key: string;
	Unit: string;
	Values: ValuesInDescribeDrdsInstanceMonitor;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeRDSPerformanceResponse
export interface DescribeRDSPerformanceResponse {
	RequestId: string;
	Success: boolean;
	Data: PartialPerformanceData[];
}

