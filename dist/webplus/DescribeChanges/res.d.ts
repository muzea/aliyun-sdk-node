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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Changes
export interface Changes {
	Change: Change[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeChangesResponse
export interface DescribeChangesResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Changes: Changes;
}

