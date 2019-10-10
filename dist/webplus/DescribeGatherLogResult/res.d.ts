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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceResult
export interface InstanceResult {
	TaskMessage: string;
	TaskSucceeded: boolean;
	InstanceId: string;
	StorageKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.InstanceResultsInDescribeGatherLogResult
export interface InstanceResultsInDescribeGatherLogResult {
	InstanceResult: InstanceResult[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.GatherLogResult
export interface GatherLogResult {
	LogPath: string;
	Change: Change;
	InstanceResults: InstanceResultsInDescribeGatherLogResult;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeGatherLogResultResponse
export interface DescribeGatherLogResultResponse {
	RequestId: string;
	Code: string;
	Message: string;
	GatherLogResult: GatherLogResult;
}

