// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistJobIdsInDeleteMcuJob
export interface NonExistJobIdsInDeleteMcuJob {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DeletedJobIds
export interface DeletedJobIds {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.DeleteMcuJobResponse
export interface DeleteMcuJobResponse {
	RequestId: string;
	NonExistJobIds: NonExistJobIdsInDeleteMcuJob;
	DeletedJobIds: DeletedJobIds;
}

