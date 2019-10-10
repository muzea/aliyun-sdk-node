// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.RealTimeCodeProportionData
export interface RealTimeCodeProportionData {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.ValueInDescribeScdnDomainRealTimeHttpCodeData
export interface ValueInDescribeScdnDomainRealTimeHttpCodeData {
	RealTimeCodeProportionData: RealTimeCodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.UsageData
export interface UsageData {
	TimeStamp: string;
	Value: ValueInDescribeScdnDomainRealTimeHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.RealTimeHttpCodeData
export interface RealTimeHttpCodeData {
	UsageData: UsageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRealTimeHttpCodeDataResponse
export interface DescribeScdnDomainRealTimeHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeHttpCodeData: RealTimeHttpCodeData;
}

