// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.RealTimeCodeProportionData
export interface RealTimeCodeProportionData {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ValueInDescribeDcdnDomainRealTimeHttpCodeData
export interface ValueInDescribeDcdnDomainRealTimeHttpCodeData {
	RealTimeCodeProportionData: RealTimeCodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.UsageData
export interface UsageData {
	TimeStamp: string;
	Value: ValueInDescribeDcdnDomainRealTimeHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.RealTimeHttpCodeData
export interface RealTimeHttpCodeData {
	UsageData: UsageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeHttpCodeDataResponse
export interface DescribeDcdnDomainRealTimeHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeHttpCodeData: RealTimeHttpCodeData;
}

