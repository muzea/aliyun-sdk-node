// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.LayOut
export interface LayOut {
	Color: string;
	Cutmode: number;
	LayoutID: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RecordConfig
export interface RecordConfig {
	StorageType: string;
	FileFormat: number;
	OssEndpoint: string;
	OssBucket: string;
	VodTranscodeGroupId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.LiveConfig
export interface LiveConfig {
	DomainName: string;
	AppName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.GetTemplateInfoResponse
export interface GetTemplateInfoResponse {
	RequestId: string;
	MixMode: number;
	ServiceMode: number;
	CallBack: string;
	MaxMixStreamCount: number;
	MediaConfig: number;
	LayOut: LayOut;
	RecordConfig: RecordConfig;
	LiveConfig: LiveConfig;
}

