// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelMetric
export interface ChannelMetric {
	ChannelId: string;
	UserCount: number;
	PubUserCount: number;
	SubUserCount: number;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PubDuration
export interface PubDuration {
	Audio: number;
	Video360: number;
	Video720: number;
	Video1080: number;
	Content: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.SubDuration
export interface SubDuration {
	Audio: number;
	Video360: number;
	Video720: number;
	Video1080: number;
	Content: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Duration
export interface Duration {
	Sd: number;
	All: number;
	Fhd: number;
	Audio: number;
	Hd: number;
	PubDuration: PubDuration;
	SubDuration: SubDuration;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelMetricInfo
export interface ChannelMetricInfo {
	ChannelMetric: ChannelMetric;
	Duration: Duration;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcChannelMetricResponse
export interface DescribeRtcChannelMetricResponse {
	RequestId: string;
	ChannelMetricInfo: ChannelMetricInfo;
}

