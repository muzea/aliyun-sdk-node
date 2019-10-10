// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.SuccessDevEuisInGetLoraNodesTask
export interface SuccessDevEuisInGetLoraNodesTask {
	SuccessDevEui: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetLoraNodesTaskResponse
export interface GetLoraNodesTaskResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	TaskId: string;
	TaskState: string;
	TotalCount: number;
	SuccessCount: number;
	SuccessDevEuis: SuccessDevEuisInGetLoraNodesTask;
}

