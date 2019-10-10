// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataInDescribeDomainUvData
export interface UsageDataInDescribeDomainUvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UvDataInterval
export interface UvDataInterval {
	UsageData: UsageDataInDescribeDomainUvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainUvDataResponse
export interface DescribeDomainUvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	UvDataInterval: UvDataInterval;
}

