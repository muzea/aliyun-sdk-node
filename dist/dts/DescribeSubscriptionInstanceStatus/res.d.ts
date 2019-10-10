// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstanceStatusSynchronousObject1
export interface DescribeSubscriptionInstanceStatusSynchronousObject1 {
	DatabaseName: string;
	WholeDatabase: string;
	TableList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstanceStatusSubscriptionObject0
export interface DescribeSubscriptionInstanceStatusSubscriptionObject0 {
	SynchronousObject: DescribeSubscriptionInstanceStatusSynchronousObject1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstanceStatusSourceEndpoint0
export interface DescribeSubscriptionInstanceStatusSourceEndpoint0 {
	InstanceID: string;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstanceStatusSubscriptionDataType0
export interface DescribeSubscriptionInstanceStatusSubscriptionDataType0 {
	DDL: boolean;
	DML: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSubscriptionInstanceStatusResponse
export interface DescribeSubscriptionInstanceStatusResponse {
	SubscriptionInstanceID: string;
	SubscriptionInstanceName: string;
	PayType: string;
	Status: string;
	ErrorMessage: string;
	ConsumptionCheckpoint: string;
	BeginTimestamp: string;
	EndTimestamp: string;
	ConsumptionClient: string;
	SubscriptionObject: DescribeSubscriptionInstanceStatusSubscriptionObject0;
	SourceEndpoint: DescribeSubscriptionInstanceStatusSourceEndpoint0;
	SubscriptionDataType: DescribeSubscriptionInstanceStatusSubscriptionDataType0;
}

