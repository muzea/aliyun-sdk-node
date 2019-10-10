// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealTimeCodeProportionData
export interface RealTimeCodeProportionData {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Value
export interface Value {
	RealTimeCodeProportionData: RealTimeCodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.UsageData
export interface UsageData {
	TimeStamp: string;
	Value: Value;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RealTimeHttpCodeData
export interface RealTimeHttpCodeData {
	UsageData: UsageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainRealTimeHttpCodeDataResponse
export interface DescribeLiveDomainRealTimeHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	RealTimeHttpCodeData: RealTimeHttpCodeData;
}

