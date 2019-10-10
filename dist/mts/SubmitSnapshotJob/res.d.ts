// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.OutputFile
export interface OutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TileOut
export interface TileOut {
	Margin: string;
	IsKeepCellPic: string;
	CellWidth: string;
	CellHeight: string;
	CellSelStep: string;
	Lines: string;
	Columns: string;
	Padding: string;
	Color: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.TileOutputFile
export interface TileOutputFile {
	Bucket: string;
	Object: string;
	Location: string;
	RoleArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SnapshotConfig
export interface SnapshotConfig {
	Height: string;
	Time: string;
	Width: string;
	Interval: string;
	FrameType: string;
	Num: string;
	OutputFile: OutputFile;
	TileOut: TileOut;
	TileOutputFile: TileOutputFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.MNSMessageResult
export interface MNSMessageResult {
	MessageId: string;
	ErrorMessage: string;
	ErrorCode: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SnapshotJob
export interface SnapshotJob {
	Message: string;
	State: string;
	Code: string;
	PipelineId: string;
	TileCount: string;
	Count: string;
	CreationTime: string;
	Id: string;
	UserData: string;
	SnapshotConfig: SnapshotConfig;
	MNSMessageResult: MNSMessageResult;
	Input: Input;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SubmitSnapshotJobResponse
export interface SubmitSnapshotJobResponse {
	RequestId: string;
	SnapshotJob: SnapshotJob;
}

