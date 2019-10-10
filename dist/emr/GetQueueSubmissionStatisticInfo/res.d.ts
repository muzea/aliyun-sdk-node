// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatQueueSubmission
export interface ClusterStatQueueSubmission {
	Queue: string;
	Submission: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueSubmissionList
export interface QueueSubmissionList {
	ClusterStatQueueSubmission: ClusterStatQueueSubmission[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetQueueSubmissionStatisticInfoResponse
export interface GetQueueSubmissionStatisticInfoResponse {
	RequestId: string;
	QueueSubmissionList: QueueSubmissionList;
}

