// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.UsageDataInDescribeScdnDomainPvData
export interface UsageDataInDescribeScdnDomainPvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.PvDataInterval
export interface PvDataInterval {
	UsageData: UsageDataInDescribeScdnDomainPvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainPvDataResponse
export interface DescribeScdnDomainPvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	PvDataInterval: PvDataInterval;
}

