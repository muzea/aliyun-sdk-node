// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatUserSubmission
export interface ClusterStatUserSubmission {
	User: string;
	Submission: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserSubmissionList
export interface UserSubmissionList {
	ClusterStatUserSubmission: ClusterStatUserSubmission[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetUserSubmissionStatisticInfoResponse
export interface GetUserSubmissionStatisticInfoResponse {
	RequestId: string;
	UserSubmissionList: UserSubmissionList;
}

