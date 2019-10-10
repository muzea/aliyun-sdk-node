// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.PerformanceValueItem
export interface PerformanceValueItem {
	Value: string;
	Date: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.PerformanceValues
export interface PerformanceValues {
	PerformanceValue: PerformanceValueItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.PerformanceKeyItem
export interface PerformanceKeyItem {
	Key: string;
	Unit: string;
	ValueFormat: string;
	PerformanceValues: PerformanceValues;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.PerformanceKeys
export interface PerformanceKeys {
	PerformanceKey: PerformanceKeyItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeReplicaPerformanceResponse
export interface DescribeReplicaPerformanceResponse {
	RequestId: string;
	StartTime: string;
	EndTime: string;
	ReplicaId: string;
	PerformanceKeys: PerformanceKeys;
}

