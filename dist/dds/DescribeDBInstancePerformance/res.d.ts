// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.PerformanceValue
export interface PerformanceValue {
	Value: string;
	Date: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.PerformanceValuesInDescribeDBInstancePerformance
export interface PerformanceValuesInDescribeDBInstancePerformance {
	PerformanceValue: PerformanceValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.PerformanceKey
export interface PerformanceKey {
	Key: string;
	Unit: string;
	ValueFormat: string;
	PerformanceValues: PerformanceValuesInDescribeDBInstancePerformance;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.PerformanceKeysInDescribeDBInstancePerformance
export interface PerformanceKeysInDescribeDBInstancePerformance {
	PerformanceKey: PerformanceKey[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeDBInstancePerformanceResponse
export interface DescribeDBInstancePerformanceResponse {
	RequestId: string;
	DBInstanceId: string;
	Engine: string;
	StartTime: string;
	EndTime: string;
	PerformanceKeys: PerformanceKeysInDescribeDBInstancePerformance;
}

