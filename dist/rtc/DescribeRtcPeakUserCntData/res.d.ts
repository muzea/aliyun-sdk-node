// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PeakUserCntModule
export interface PeakUserCntModule {
	TimeStamp: string;
	ActiveUserPeak: number;
	ActiveUserPeakTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PeakUserCntDataPerInterval
export interface PeakUserCntDataPerInterval {
	PeakUserCntModule: PeakUserCntModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcPeakUserCntDataResponse
export interface DescribeRtcPeakUserCntDataResponse {
	RequestId: string;
	PeakUserCntDataPerInterval: PeakUserCntDataPerInterval;
}

