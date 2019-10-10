// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Statistic
export interface Statistic {
	Timestamp: number;
	Count: number;
	DomainName: string;
	SubDomain: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.StatisticsInDescribeRecordStatistics
export interface StatisticsInDescribeRecordStatistics {
	Statistic: Statistic[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeRecordStatisticsResponse
export interface DescribeRecordStatisticsResponse {
	RequestId: string;
	Statistics: StatisticsInDescribeRecordStatistics;
}

