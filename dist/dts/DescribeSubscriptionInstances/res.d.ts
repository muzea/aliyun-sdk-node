// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSynchronousObject2
export interface DescribeSubscriptionInstancesSynchronousObject2 {
	DatabaseName: string;
	WholeDatabase: string;
	TableList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSubscriptionObject1
export interface DescribeSubscriptionInstancesSubscriptionObject1 {
	SynchronousObject: DescribeSubscriptionInstancesSynchronousObject2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSourceEndpoint1
export interface DescribeSubscriptionInstancesSourceEndpoint1 {
	InstanceID: string;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSubscriptionDataType1
export interface DescribeSubscriptionInstancesSubscriptionDataType1 {
	DDL: boolean;
	DML: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSubscriptionInstance1
export interface DescribeSubscriptionInstancesSubscriptionInstance1 {
	SubscriptionInstanceID: string;
	SubscriptionInstanceName: string;
	PayType: string;
	Status: string;
	ErrorMessage: string;
	ConsumptionCheckpoint: string;
	BeginTimestamp: string;
	EndTimestamp: string;
	ConsumptionClient: string;
	SubscriptionObject: DescribeSubscriptionInstancesSubscriptionObject1[];
	SourceEndpoint: DescribeSubscriptionInstancesSourceEndpoint1;
	SubscriptionDataType: DescribeSubscriptionInstancesSubscriptionDataType1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesSubscriptionInstances0
export interface DescribeSubscriptionInstancesSubscriptionInstances0 {
	SubscriptionInstance: DescribeSubscriptionInstancesSubscriptionInstance1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstancesResponse
export interface DescribeSubscriptionInstancesResponse {
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	SubscriptionInstances: DescribeSubscriptionInstancesSubscriptionInstances0;
}

