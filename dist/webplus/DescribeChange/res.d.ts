// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Change
export interface Change {
	ChangeMessage: string;
	FinishTime: number;
	UpdateTime: number;
	CreateUsername: string;
	ChangeSucceed: boolean;
	ChangePaused: boolean;
	CreateTime: number;
	ActionName: string;
	ChangeAborted: boolean;
	ChangeDescription: string;
	ChangeTimedout: boolean;
	ChangeFinished: boolean;
	ChangeName: string;
	ChangeId: string;
	EnvId: string;
	ChangeSucceeded: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeChangeResponse
export interface DescribeChangeResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Change: Change;
}

