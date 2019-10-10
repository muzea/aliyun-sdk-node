// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PageData
export interface PageData {
	DomainName: string;
	Cname: string;
	LiveDomainType: string;
	GmtCreated: string;
	GmtModified: string;
	Description: string;
	LiveDomainStatus: string;
	RegionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainsInDescribeLiveUserDomains
export interface DomainsInDescribeLiveUserDomains {
	PageData: PageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveUserDomainsResponse
export interface DescribeLiveUserDomainsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Domains: DomainsInDescribeLiveUserDomains;
}

