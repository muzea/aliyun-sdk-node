// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatQueueOutput
export interface ClusterStatQueueOutput {
	Queue: string;
	BytesOutput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueOutputList
export interface QueueOutputList {
	ClusterStatQueueOutput: ClusterStatQueueOutput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetQueueOutputStatisticInfoResponse
export interface GetQueueOutputStatisticInfoResponse {
	RequestId: string;
	QueueOutputList: QueueOutputList;
}

