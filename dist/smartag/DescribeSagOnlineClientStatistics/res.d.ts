// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Statistics
export interface Statistics {
	UserName: string;
	TotalBytes: string;
	OnlineCount: string;
	SmartAGId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SagStatisticsInDescribeSagOnlineClientStatistics
export interface SagStatisticsInDescribeSagOnlineClientStatistics {
	Statistics: Statistics[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeSagOnlineClientStatisticsResponse
export interface DescribeSagOnlineClientStatisticsResponse {
	RequestId: string;
	SagStatistics: SagStatisticsInDescribeSagOnlineClientStatistics;
}

