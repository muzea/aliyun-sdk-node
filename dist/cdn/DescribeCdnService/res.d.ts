// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.LockReason
export interface LockReason {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.OperationLocks
export interface OperationLocks {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnServiceResponse
export interface DescribeCdnServiceResponse {
	RequestId: string;
	InstanceId: string;
	InternetChargeType: string;
	OpeningTime: string;
	ChangingChargeType: string;
	ChangingAffectTime: string;
	OperationLocks: OperationLocks;
}

