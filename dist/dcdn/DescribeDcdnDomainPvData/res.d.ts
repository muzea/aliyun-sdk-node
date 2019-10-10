// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.UsageDataInDescribeDcdnDomainPvData
export interface UsageDataInDescribeDcdnDomainPvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.PvDataInterval
export interface PvDataInterval {
	UsageData: UsageDataInDescribeDcdnDomainPvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainPvDataResponse
export interface DescribeDcdnDomainPvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	PvDataInterval: PvDataInterval;
}

