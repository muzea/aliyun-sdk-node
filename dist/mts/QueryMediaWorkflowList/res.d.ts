// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistMediaWorkflowIds
export interface NonExistMediaWorkflowIds {
	MediaWorkflowId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflow
export interface MediaWorkflow {
	Name: string;
	Topology: string;
	State: string;
	MediaWorkflowId: string;
	CreationTime: string;
	TriggerMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflowListInQueryMediaWorkflowList
export interface MediaWorkflowListInQueryMediaWorkflowList {
	MediaWorkflow: MediaWorkflow[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaWorkflowListResponse
export interface QueryMediaWorkflowListResponse {
	RequestId: string;
	NonExistMediaWorkflowIds: NonExistMediaWorkflowIds;
	MediaWorkflowList: MediaWorkflowListInQueryMediaWorkflowList;
}

