// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamHlsDelayConfig
export interface LiveStreamHlsDelayConfig {
	Level: string;
	Delay: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamFlvDelayConfig
export interface LiveStreamFlvDelayConfig {
	Level: string;
	Delay: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamRtmpDelayConfig
export interface LiveStreamRtmpDelayConfig {
	Level: string;
	Delay: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamDelayConfigResponse
export interface DescribeLiveStreamDelayConfigResponse {
	RequestId: string;
	LiveStreamHlsDelayConfig: LiveStreamHlsDelayConfig;
	LiveStreamFlvDelayConfig: LiveStreamFlvDelayConfig;
	LiveStreamRtmpDelayConfig: LiveStreamRtmpDelayConfig;
}

