// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CodeProportionData
export interface CodeProportionData {
	Code: string;
	Count: string;
	Proportion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainHttpCodeData
export interface ValueInDescribeDomainHttpCodeData {
	CodeProportionData: CodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataInDescribeDomainHttpCodeData
export interface UsageDataInDescribeDomainHttpCodeData {
	TimeStamp: string;
	Value: ValueInDescribeDomainHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.HttpCodeDataInDescribeDomainHttpCodeData
export interface HttpCodeDataInDescribeDomainHttpCodeData {
	UsageData: UsageDataInDescribeDomainHttpCodeData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainHttpCodeDataResponse
export interface DescribeDomainHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	HttpCodeData: HttpCodeDataInDescribeDomainHttpCodeData;
}

