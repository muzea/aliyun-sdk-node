// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NonExistRunIds
export interface NonExistRunIds {
	RunId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.InputFile
export interface InputFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Input
export interface Input {
	Bucket: string;
	Duration: string;
	Start: string;
	UserData: string;
	Object: string;
	Location: string;
	RoleArn: string;
	Url: string;
	InputFile: InputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Activity
export interface Activity {
	Name: string;
	JobId: string;
	Message: string;
	State: string;
	StartTime: string;
	Code: string;
	EndTime: string;
	Type: string;
	MNSMessageResult: MNSMessageResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ActivityListInQueryMediaWorkflowExecutionList
export interface ActivityListInQueryMediaWorkflowExecutionList {
	Activity: Activity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflowExecution
export interface MediaWorkflowExecution {
	Name: string;
	RunId: string;
	State: string;
	MediaWorkflowId: string;
	CreationTime: string;
	MediaId: string;
	Input: Input;
	ActivityList: ActivityListInQueryMediaWorkflowExecutionList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MediaWorkflowExecutionListInQueryMediaWorkflowExecutionList
export interface MediaWorkflowExecutionListInQueryMediaWorkflowExecutionList {
	MediaWorkflowExecution: MediaWorkflowExecution[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.QueryMediaWorkflowExecutionListResponse
export interface QueryMediaWorkflowExecutionListResponse {
	RequestId: string;
	NonExistRunIds: NonExistRunIds;
	MediaWorkflowExecutionList: MediaWorkflowExecutionListInQueryMediaWorkflowExecutionList;
}

