// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageTotal
export interface UsageTotal {
	BytesHitRate: string;
	RequestHitRate: string;
	MaxBps: string;
	MaxBpsTime: string;
	MaxSrcBps: string;
	MaxSrcBpsTime: string;
	TotalAccess: string;
	TotalTraffic: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageByDay
export interface UsageByDay {
	TimeStamp: string;
	Qps: string;
	BytesHitRate: string;
	RequestHitRate: string;
	MaxBps: string;
	MaxBpsTime: string;
	MaxSrcBps: string;
	MaxSrcBpsTime: string;
	TotalAccess: string;
	TotalTraffic: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageByDays
export interface UsageByDays {
	UsageByDay: UsageByDay[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainsUsageByDayResponse
export interface DescribeDomainsUsageByDayResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	UsageTotal: UsageTotal;
	UsageByDays: UsageByDays;
}

