// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveTemplateIds
export interface LiveTemplateIds {
	LocationId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.TranscodeConfig
export interface TranscodeConfig {
	CasterTemplate: string;
	LiveTemplateIds: LiveTemplateIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordFormatItem
export interface RecordFormatItem {
	Format: string;
	OssObjectPrefix: string;
	SliceOssObjectPrefix: string;
	CycleDuration: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordFormatInDescribeCasterConfig
export interface RecordFormatInDescribeCasterConfig {
	RecordFormatItem: RecordFormatItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordConfig
export interface RecordConfig {
	OssEndpoint: string;
	OssBucket: string;
	RecordFormat: RecordFormatInDescribeCasterConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterConfigResponse
export interface DescribeCasterConfigResponse {
	RequestId: string;
	CasterId: string;
	CasterName: string;
	DomainName: string;
	Delay: number;
	UrgentMaterialId: string;
	SideOutputUrl: string;
	CallbackUrl: string;
	ProgramName: string;
	ProgramEffect: number;
	ChannelEnable: number;
	TranscodeConfig: TranscodeConfig;
	RecordConfig: RecordConfig;
}

