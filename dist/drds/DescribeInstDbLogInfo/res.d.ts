// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.LogTimeRange
export interface LogTimeRange {
	SupportOldestTime: number;
	SupportLatestTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeInstDbLogInfoResponse
export interface DescribeInstDbLogInfoResponse {
	RequestId: string;
	Success: boolean;
	LogTimeRange: LogTimeRange;
}

