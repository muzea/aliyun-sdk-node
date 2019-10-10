// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordContentInfo
export interface RecordContentInfo {
	OssEndpoint: string;
	OssBucket: string;
	OssObjectPrefix: string;
	StartTime: string;
	EndTime: string;
	Duration: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordContentInfoList
export interface RecordContentInfoList {
	RecordContentInfo: RecordContentInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamRecordContentResponse
export interface DescribeLiveStreamRecordContentResponse {
	RequestId: string;
	RecordContentInfoList: RecordContentInfoList;
}

