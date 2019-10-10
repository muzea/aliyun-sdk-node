// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DurationItem
export interface DurationItem {
	TotalDuration: number;
	AudioDuration: number;
	SdDuration: number;
	HdDuration: number;
	FhdDuration: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DurationInDescribeStatis
export interface DurationInDescribeStatis {
	DurationItem: DurationItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserStatisItem
export interface UserStatisItem {
	ActiveUserCnt: number;
	ConSessionPeak: number;
	ConSessionPeakTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserStatis
export interface UserStatis {
	UserStatisItem: UserStatisItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelStatisItem
export interface ChannelStatisItem {
	AccChannelCnt: number;
	ConChannelPeak: number;
	ConChannelPeakTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelStatis
export interface ChannelStatis {
	ChannelStatisItem: ChannelStatisItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.StatisInfo
export interface StatisInfo {
	Time: string;
	Duration: DurationInDescribeStatis;
	UserStatis: UserStatis;
	ChannelStatis: ChannelStatis;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.StatisInfos
export interface StatisInfos {
	StatisInfo: StatisInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeStatisResponse
export interface DescribeStatisResponse {
	RequestId: string;
	StatisInfos: StatisInfos;
}

