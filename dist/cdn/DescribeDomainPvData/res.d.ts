// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataInDescribeDomainPvData
export interface UsageDataInDescribeDomainPvData {
	TimeStamp: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.PvDataInterval
export interface PvDataInterval {
	UsageData: UsageDataInDescribeDomainPvData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainPvDataResponse
export interface DescribeDomainPvDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	PvDataInterval: PvDataInterval;
}

