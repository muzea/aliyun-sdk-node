// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatQueueInput
export interface ClusterStatQueueInput {
	Queue: string;
	BytesInput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueInputList
export interface QueueInputList {
	ClusterStatQueueInput: ClusterStatQueueInput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetQueueInputStatisticInfoResponse
export interface GetQueueInputStatisticInfoResponse {
	RequestId: string;
	QueueInputList: QueueInputList;
}

