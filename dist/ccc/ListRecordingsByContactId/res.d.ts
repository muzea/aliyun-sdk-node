// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Recording
export interface Recording {
	ContactId: string;
	FileDescription: string;
	CalledNumber: string;
	QualityCheckTid: string;
	ContactType: string;
	CallingNumber: string;
	StartTime: number;
	AgentName: string;
	AgentId: string;
	Duration: number;
	InstanceId: string;
	Channel: string;
	QualityCheckTaskId: string;
	FileName: string;
	FilePath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RecordingsInListRecordingsByContactId
export interface RecordingsInListRecordingsByContactId {
	Recording: Recording[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListRecordingsByContactIdResponse
export interface ListRecordingsByContactIdResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Recordings: RecordingsInListRecordingsByContactId;
}

