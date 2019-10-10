// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SuccessDevEuisInGetNodesAddingTask
export interface SuccessDevEuisInGetNodesAddingTask {
	SuccessDevEui: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetNodesAddingTaskResponse
export interface GetNodesAddingTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	TaskId: string;
	TaskState: string;
	TotalCount: number;
	SuccessCount: number;
	SuccessDevEuis: SuccessDevEuisInGetNodesAddingTask;
}

