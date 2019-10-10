// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Feedback
export interface Feedback {
	Content: string;
	Action: string;
	ActionParams: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DialogueResponse
export interface DialogueResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Feedback: Feedback;
}

