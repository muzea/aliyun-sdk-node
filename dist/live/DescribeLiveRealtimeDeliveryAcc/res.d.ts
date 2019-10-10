// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AccData
export interface AccData {
	TimeStamp: string;
	SuccessNum: number;
	FailedNum: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealTimeDeliveryAccData
export interface RealTimeDeliveryAccData {
	AccData: AccData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveRealtimeDeliveryAccResponse
export interface DescribeLiveRealtimeDeliveryAccResponse {
	RequestId: string;
	RealTimeDeliveryAccData: RealTimeDeliveryAccData;
}

