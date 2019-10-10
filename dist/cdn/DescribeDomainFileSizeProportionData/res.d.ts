// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.FileSizeProportionData
export interface FileSizeProportionData {
	FileSize: string;
	Proportion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainFileSizeProportionData
export interface ValueInDescribeDomainFileSizeProportionData {
	FileSizeProportionData: FileSizeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataInDescribeDomainFileSizeProportionData
export interface UsageDataInDescribeDomainFileSizeProportionData {
	TimeStamp: string;
	Value: ValueInDescribeDomainFileSizeProportionData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.FileSizeProportionDataInterval
export interface FileSizeProportionDataInterval {
	UsageData: UsageDataInDescribeDomainFileSizeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainFileSizeProportionDataResponse
export interface DescribeDomainFileSizeProportionDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	FileSizeProportionDataInterval: FileSizeProportionDataInterval;
}

