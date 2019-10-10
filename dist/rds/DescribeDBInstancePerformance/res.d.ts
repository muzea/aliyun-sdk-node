// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PerformanceValue
export interface PerformanceValue {
	Value: string;
	Date: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Values
export interface Values {
	PerformanceValue: PerformanceValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PerformanceKey
export interface PerformanceKey {
	Key: string;
	Unit: string;
	ValueFormat: string;
	Values: Values;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PerformanceKeys
export interface PerformanceKeys {
	PerformanceKey: PerformanceKey[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstancePerformanceResponse
export interface DescribeDBInstancePerformanceResponse {
	RequestId: string;
	DBInstanceId: string;
	Engine: string;
	StartTime: string;
	EndTime: string;
	PerformanceKeys: PerformanceKeys;
}

