// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.AccData
export interface AccData {
	TimeStamp: string;
	SuccessNum: number;
	FailedNum: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ReatTimeDeliveryAccData
export interface ReatTimeDeliveryAccData {
	AccData: AccData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeRealtimeDeliveryAccResponse
export interface DescribeRealtimeDeliveryAccResponse {
	RequestId: string;
	ReatTimeDeliveryAccData: ReatTimeDeliveryAccData;
}

