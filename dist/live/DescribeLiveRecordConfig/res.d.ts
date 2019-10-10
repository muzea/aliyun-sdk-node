// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordFormat
export interface RecordFormat {
	Format: string;
	OssObjectPrefix: string;
	SliceOssObjectPrefix: string;
	CycleDuration: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordFormatList
export interface RecordFormatList {
	RecordFormat: RecordFormat[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveAppRecord
export interface LiveAppRecord {
	StartTime: string;
	EndTime: string;
	DomainName: string;
	OnDemond: number;
	CreateTime: string;
	OssEndpoint: string;
	AppName: string;
	SourceUrl: string;
	StreamName: string;
	OssBucket: string;
	RecordFormatList: RecordFormatList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveAppRecordListInDescribeLiveRecordConfig
export interface LiveAppRecordListInDescribeLiveRecordConfig {
	LiveAppRecord: LiveAppRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveRecordConfigResponse
export interface DescribeLiveRecordConfigResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	Order: string;
	TotalNum: number;
	TotalPage: number;
	LiveAppRecordList: LiveAppRecordListInDescribeLiveRecordConfig;
}

