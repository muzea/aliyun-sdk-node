// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordInfo
export interface RecordInfo {
	RecordId: string;
	RecordUrl: string;
	DomainName: string;
	AppName: string;
	StreamName: string;
	OssBucket: string;
	OssEndpoint: string;
	OssObject: string;
	StartTime: string;
	EndTime: string;
	Duration: number;
	Height: number;
	Width: number;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CreateLiveStreamRecordIndexFilesResponse
export interface CreateLiveStreamRecordIndexFilesResponse {
	RequestId: string;
	RecordInfo: RecordInfo;
}

