// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveRecordVodConfig
export interface LiveRecordVodConfig {
	CreateTime: string;
	DomainName: string;
	AppName: string;
	StreamName: string;
	VodTranscodeGroupId: string;
	CycleDuration: number;
	AutoCompose: string;
	ComposeVodTranscodeGroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveRecordVodConfigs
export interface LiveRecordVodConfigs {
	LiveRecordVodConfig: LiveRecordVodConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveRecordVodConfigsResponse
export interface DescribeLiveRecordVodConfigsResponse {
	RequestId: string;
	PageNum: number;
	PageSize: number;
	Total: string;
	LiveRecordVodConfigs: LiveRecordVodConfigs;
}

