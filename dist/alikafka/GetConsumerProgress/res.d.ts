// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.OffsetListItem
export interface OffsetListItem {
	BrokerOffset: number;
	ConsumerOffset: number;
	LastTimestamp: number;
	Partition: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.OffsetList
export interface OffsetList {
	OffsetListItem: OffsetListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.TopicListItem
export interface TopicListItem {
	Topic: string;
	TotalDiff: number;
	LastTimestamp: number;
	OffsetList: OffsetList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.TopicListInGetConsumerProgress
export interface TopicListInGetConsumerProgress {
	TopicListItem: TopicListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.ConsumerProgress
export interface ConsumerProgress {
	TotalDiff: number;
	LastTimestamp: number;
	TopicList: TopicListInGetConsumerProgress;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.GetConsumerProgressResponse
export interface GetConsumerProgressResponse {
	Success: boolean;
	RequestId: string;
	Code: number;
	Message: string;
	ConsumerProgress: ConsumerProgress;
}

