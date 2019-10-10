// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.TopicVO
export interface TopicVO {
	Topic: string;
	CreateTime: number;
	Remark: string;
	Status: number;
	InstanceId: string;
	RegionId: string;
	StatusName: string;
	CompactTopic: boolean;
	LocalTopic: boolean;
	PartitionNum: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.TopicListInGetTopicList
export interface TopicListInGetTopicList {
	TopicVO: TopicVO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.GetTopicListResponse
export interface GetTopicListResponse {
	Success: boolean;
	RequestId: string;
	Code: number;
	Message: string;
	Total: number;
	PageSize: number;
	CurrentPage: number;
	TopicList: TopicListInGetTopicList;
}

