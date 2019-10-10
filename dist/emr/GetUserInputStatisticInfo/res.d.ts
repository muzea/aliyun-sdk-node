// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatUserInput
export interface ClusterStatUserInput {
	User: string;
	BytesInput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.UserInputList
export interface UserInputList {
	ClusterStatUserInput: ClusterStatUserInput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetUserInputStatisticInfoResponse
export interface GetUserInputStatisticInfoResponse {
	RequestId: string;
	UserInputList: UserInputList;
}

