// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CodeProportionData
export interface CodeProportionData {
	Code: string;
	Count: string;
	Proportion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainSrcHttpCodeData
export interface ValueInDescribeDomainSrcHttpCodeData {
	CodeProportionData: CodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataInDescribeDomainSrcHttpCodeData
export interface UsageDataInDescribeDomainSrcHttpCodeData {
	TimeStamp: string;
	Value: ValueInDescribeDomainSrcHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.HttpCodeDataInDescribeDomainSrcHttpCodeData
export interface HttpCodeDataInDescribeDomainSrcHttpCodeData {
	UsageData: UsageDataInDescribeDomainSrcHttpCodeData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainSrcHttpCodeDataResponse
export interface DescribeDomainSrcHttpCodeDataResponse {
	RequestId: string;
	DomainName: string;
	StartTime: string;
	EndTime: string;
	DataInterval: string;
	HttpCodeData: HttpCodeDataInDescribeDomainSrcHttpCodeData;
}

