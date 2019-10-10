// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Statistics
export interface Statistics {
	UserName: string;
	TotalBytes: string;
	OnlineCount: string;
	SmartAGId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SagStatisticsInDescribeUserFlowStatistics
export interface SagStatisticsInDescribeUserFlowStatistics {
	Statistics: Statistics[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeUserFlowStatisticsResponse
export interface DescribeUserFlowStatisticsResponse {
	RequestId: string;
	SagStatistics: SagStatisticsInDescribeUserFlowStatistics;
}

