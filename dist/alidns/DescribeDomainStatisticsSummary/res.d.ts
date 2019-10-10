// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Statistic
export interface Statistic {
	Timestamp: number;
	Count: number;
	DomainName: string;
	SubDomain: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.StatisticsInDescribeDomainStatisticsSummary
export interface StatisticsInDescribeDomainStatisticsSummary {
	Statistic: Statistic[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainStatisticsSummaryResponse
export interface DescribeDomainStatisticsSummaryResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageSize: number;
	PageNumber: number;
	Statistics: StatisticsInDescribeDomainStatisticsSummary;
}

