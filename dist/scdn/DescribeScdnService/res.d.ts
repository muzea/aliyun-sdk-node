// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.LockReason
export interface LockReason {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.OperationLocks
export interface OperationLocks {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnServiceResponse
export interface DescribeScdnServiceResponse {
	RequestId: string;
	InstanceId: string;
	OpenTime: string;
	EndTime: string;
	ProtectType: string;
	ProtectTypeValue: string;
	Bandwidth: string;
	CcProtection: string;
	DDoSBasic: string;
	DomainCount: string;
	ElasticProtection: string;
	BandwidthValue: string;
	CcProtectionValue: string;
	DDoSBasicValue: string;
	DomainCountValue: string;
	ElasticProtectionValue: string;
	PriceType: string;
	PricingCycle: string;
	OperationLocks: OperationLocks;
}

