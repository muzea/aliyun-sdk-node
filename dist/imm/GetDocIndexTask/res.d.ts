// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FailDetail
export interface FailDetail {
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GetDocIndexTaskResponse
export interface GetDocIndexTaskResponse {
	RequestId: string;
	Status: string;
	TaskId: string;
	CreateTime: string;
	FinishTime: string;
	FailDetail: FailDetail;
}

