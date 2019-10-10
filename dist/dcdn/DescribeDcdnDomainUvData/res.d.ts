// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.UsageDataInDescribeDcdnDomainUvData
export interface UsageDataInDescribeDcdnDomainUvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.UvDataInterval
export interface UvDataInterval {
	UsageData: UsageDataInDescribeDcdnDomainUvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainUvDataResponse
export interface DescribeDcdnDomainUvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	UvDataInterval: UvDataInterval;
}

