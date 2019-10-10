// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.OffsetTableItem
export interface OffsetTableItem {
	MinOffset: number;
	MaxOffset: number;
	LastUpdateTimestamp: number;
	Topic: string;
	Partition: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.OffsetTable
export interface OffsetTable {
	OffsetTableItem: OffsetTableItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.TopicStatus
export interface TopicStatus {
	TotalCount: number;
	LastTimeStamp: number;
	OffsetTable: OffsetTable;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alikafka.GetTopicStatusResponse
export interface GetTopicStatusResponse {
	Success: boolean;
	RequestId: string;
	Code: number;
	Message: string;
	TopicStatus: TopicStatus;
}

