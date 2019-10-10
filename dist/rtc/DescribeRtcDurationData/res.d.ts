// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DurationModule
export interface DurationModule {
	TimeStamp: string;
	TotalDuration: number;
	AudioDuration: number;
	V360Duration: number;
	V720Duration: number;
	V1080Duration: number;
	ContentDuration: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DurationDataPerInterval
export interface DurationDataPerInterval {
	DurationModule: DurationModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcDurationDataResponse
export interface DescribeRtcDurationDataResponse {
	RequestId: string;
	DurationDataPerInterval: DurationDataPerInterval;
}

