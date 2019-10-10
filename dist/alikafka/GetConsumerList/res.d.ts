// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.ConsumerVO
export interface ConsumerVO {
	RegionId: string;
	InstanceId: string;
	ConsumerId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.ConsumerList
export interface ConsumerList {
	ConsumerVO: ConsumerVO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.GetConsumerListResponse
export interface GetConsumerListResponse {
	Success: boolean;
	RequestId: string;
	Code: number;
	Message: string;
	ConsumerList: ConsumerList;
}

