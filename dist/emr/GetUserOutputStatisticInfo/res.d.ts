// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatUserOutput
export interface ClusterStatUserOutput {
	User: string;
	BytesOutput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserOutputList
export interface UserOutputList {
	ClusterStatUserOutput: ClusterStatUserOutput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetUserOutputStatisticInfoResponse
export interface GetUserOutputStatisticInfoResponse {
	RequestId: string;
	UserOutputList: UserOutputList;
}

