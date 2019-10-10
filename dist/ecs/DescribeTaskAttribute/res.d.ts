// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RelatedItem
export interface RelatedItem {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RelatedItemSet
export interface RelatedItemSet {
	RelatedItem: RelatedItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationProgress
export interface OperationProgress {
	OperationStatus: string;
	ErrorCode: string;
	ErrorMsg: string;
	RelatedItemSet: RelatedItemSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationProgressSet
export interface OperationProgressSet {
	OperationProgress: OperationProgress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeTaskAttributeResponse
export interface DescribeTaskAttributeResponse {
	RequestId: string;
	TaskId: string;
	RegionId: string;
	TaskAction: string;
	TaskStatus: string;
	TaskProcess: string;
	SupportCancel: string;
	TotalCount: number;
	SuccessCount: number;
	FailedCount: number;
	CreationTime: string;
	FinishedTime: string;
	OperationProgressSet: OperationProgressSet;
}

