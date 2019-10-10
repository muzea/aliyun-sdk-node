// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RdsPerformanceInfo
export interface RdsPerformanceInfo {
	RdsId: string;
	Cpu: number;
	Iops: number;
	ActiveSessions: number;
	TotalSessions: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeRdsPerformanceSummaryResponse
export interface DescribeRdsPerformanceSummaryResponse {
	RequestId: string;
	Success: boolean;
	RdsPerformanceInfos: RdsPerformanceInfo[];
}

