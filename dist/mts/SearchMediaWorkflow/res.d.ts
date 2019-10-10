// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflow
export interface MediaWorkflow {
	Name: string;
	Topology: string;
	State: string;
	MediaWorkflowId: string;
	CreationTime: string;
	TriggerMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflowListInSearchMediaWorkflow
export interface MediaWorkflowListInSearchMediaWorkflow {
	MediaWorkflow: MediaWorkflow[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SearchMediaWorkflowResponse
export interface SearchMediaWorkflowResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	MediaWorkflowList: MediaWorkflowListInSearchMediaWorkflow;
}

