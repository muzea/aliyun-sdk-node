// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Result
export interface Result {
	Message: string;
	Success: string;
	Code: string;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResultsInDetachKeyPair
export interface ResultsInDetachKeyPair {
	Result: Result[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DetachKeyPairResponse
export interface DetachKeyPairResponse {
	RequestId: string;
	TotalCount: string;
	FailCount: string;
	KeyPairName: string;
	Results: ResultsInDetachKeyPair;
}

