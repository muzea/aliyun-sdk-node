// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelCntModule
export interface ChannelCntModule {
	TimeStamp: string;
	ActiveChannelCnt: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelCntDataPerInterval
export interface ChannelCntDataPerInterval {
	ChannelCntModule: ChannelCntModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcChannelCntDataResponse
export interface DescribeRtcChannelCntDataResponse {
	RequestId: string;
	ChannelCntDataPerInterval: ChannelCntDataPerInterval;
}

