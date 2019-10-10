// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.RealTimeCodeProportionData
export interface RealTimeCodeProportionData {
	Code: string;
	Proportion: string;
	Count: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainRealTimeHttpCodeData
export interface ValueInDescribeDomainRealTimeHttpCodeData {
	RealTimeCodeProportionData: RealTimeCodeProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageData
export interface UsageData {
	Path: string;
	Time: string;
	Traffic: number;
	TimeStamp: string;
	Acc: number;
	Value: ValueInDescribeDomainRealTimeHttpCodeData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.PathDataPerInterval
export interface PathDataPerInterval {
	UsageData: UsageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainPathDataResponse
export interface DescribeDomainPathDataResponse {
	DomainName: string;
	StartTime: string;
	EndTime: string;
	PageSize: number;
	PageNumber: number;
	DataInterval: string;
	TotalCount: number;
	PathDataPerInterval: PathDataPerInterval;
}

