// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.LockReason
export interface LockReason {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.OperationLocks
export interface OperationLocks {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnServiceResponse
export interface DescribeDcdnServiceResponse {
	RequestId: string;
	InstanceId: string;
	InternetChargeType: string;
	OpeningTime: string;
	ChangingChargeType: string;
	ChangingAffectTime: string;
	WebsocketChangingType: string;
	WebsocketType: string;
	WebsocketChangingTime: string;
	OperationLocks: OperationLocks;
}

