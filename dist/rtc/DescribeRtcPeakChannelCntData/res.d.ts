// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PeakChannelCntModule
export interface PeakChannelCntModule {
	TimeStamp: string;
	ActiveChannelPeak: number;
	ActiveChannelPeakTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PeakChannelCntDataPerInterval
export interface PeakChannelCntDataPerInterval {
	PeakChannelCntModule: PeakChannelCntModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcPeakChannelCntDataResponse
export interface DescribeRtcPeakChannelCntDataResponse {
	RequestId: string;
	PeakChannelCntDataPerInterval: PeakChannelCntDataPerInterval;
}

