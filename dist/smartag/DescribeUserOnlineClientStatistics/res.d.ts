// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Statistics
export interface Statistics {
	UserName: string;
	TotalBytes: string;
	OnlineCount: string;
	SmartAGId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.UserStatistics
export interface UserStatistics {
	Statistics: Statistics[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeUserOnlineClientStatisticsResponse
export interface DescribeUserOnlineClientStatisticsResponse {
	RequestId: string;
	UserStatistics: UserStatistics;
}

