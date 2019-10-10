// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.TopDomain
export interface TopDomain {
	DomainName: string;
	Rank: number;
	TotalTraffic: string;
	TrafficPercent: string;
	MaxBps: number;
	MaxBpsTime: string;
	TotalAccess: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.TopDomains
export interface TopDomains {
	TopDomain: TopDomain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnTopDomainsByFlowResponse
export interface DescribeScdnTopDomainsByFlowResponse {
	RequestId: string;
	StartTime: string;
	EndTime: string;
	DomainCount: number;
	DomainOnlineCount: number;
	TopDomains: TopDomains;
}

