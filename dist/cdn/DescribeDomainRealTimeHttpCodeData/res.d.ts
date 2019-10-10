// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.RealTimeCodeProportionData
export interface RealTimeCodeProportionData {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainRealTimeHttpCodeData
export interface ValueInDescribeDomainRealTimeHttpCodeData {
	RealTimeCodeProportionData: RealTimeCodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageData
export interface UsageData {
	Path: string;
	Time: string;
	Traffic: number;
	TimeStamp: string;
	Acc: number;
	Value: ValueInDescribeDomainRealTimeHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.RealTimeHttpCodeData
export interface RealTimeHttpCodeData {
	UsageData: UsageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeHttpCodeDataResponse
export interface DescribeDomainRealTimeHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeHttpCodeData: RealTimeHttpCodeData;
}

