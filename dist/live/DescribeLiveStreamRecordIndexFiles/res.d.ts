// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordIndexInfo
export interface RecordIndexInfo {
	OssObject: string;
	DomainName: string;
	RecordUrl: string;
	CreateTime: string;
	StreamName: string;
	OssBucket: string;
	StartTime: string;
	EndTime: string;
	Duration: number;
	RecordId: string;
	OssEndpoint: string;
	Height: number;
	Width: number;
	AppName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordIndexInfoList
export interface RecordIndexInfoList {
	RecordIndexInfo: RecordIndexInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamRecordIndexFilesResponse
export interface DescribeLiveStreamRecordIndexFilesResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	Order: string;
	TotalNum: number;
	TotalPage: number;
	RecordIndexInfoList: RecordIndexInfoList;
}

