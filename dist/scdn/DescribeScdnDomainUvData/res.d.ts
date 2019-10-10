// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.UsageDataInDescribeScdnDomainUvData
export interface UsageDataInDescribeScdnDomainUvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.UvDataInterval
export interface UvDataInterval {
	UsageData: UsageDataInDescribeScdnDomainUvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainUvDataResponse
export interface DescribeScdnDomainUvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	UvDataInterval: UvDataInterval;
}

