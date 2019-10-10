// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineInListCoverPipeline
export interface PipelineInListCoverPipeline {
	UserId: number;
	PipelineId: string;
	Name: string;
	State: string;
	Priority: string;
	quotaNum: number;
	quotaUsed: number;
	NotifyConfig: string;
	Role: string;
	ExtendConfig: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PipelineListInListCoverPipeline
export interface PipelineListInListCoverPipeline {
	Pipeline: PipelineInListCoverPipeline[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ListCoverPipelineResponse
export interface ListCoverPipelineResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	PipelineList: PipelineListInListCoverPipeline;
}

