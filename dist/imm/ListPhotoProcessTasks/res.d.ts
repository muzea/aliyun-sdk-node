// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.TasksItem
export interface TasksItem {
	TgtType: string;
	Result: string;
	Style: string;
	ErrorMessage: string;
	PageCount: number;
	CreateTime: string;
	ExternalID: string;
	FinishTime: string;
	SrcUri: string;
	Percent: number;
	Parameters: string;
	TaskId: string;
	StartTime: string;
	EndTime: string;
	TgtUri: string;
	ImageSpec: string;
	Progress: number;
	NotifyEndpoint: string;
	Status: string;
	NotifyTopicName: string;
	TaskType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListPhotoProcessTasksResponse
export interface ListPhotoProcessTasksResponse {
	RequestId: string;
	NextMarker: string;
	Tasks: TasksItem[];
}

