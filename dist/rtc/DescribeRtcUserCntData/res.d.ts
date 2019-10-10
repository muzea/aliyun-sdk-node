// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserCntModule
export interface UserCntModule {
	TimeStamp: string;
	ActiveUserCnt: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserCntDataPerInterval
export interface UserCntDataPerInterval {
	UserCntModule: UserCntModule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcUserCntDataResponse
export interface DescribeRtcUserCntDataResponse {
	RequestId: string;
	UserCntDataPerInterval: UserCntDataPerInterval;
}

