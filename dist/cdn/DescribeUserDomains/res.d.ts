// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Source
export interface Source {
	Type: string;
	Content: string;
	Port: number;
	Priority: string;
	Weight: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Sources
export interface Sources {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.PageData
export interface PageData {
	DomainName: string;
	Cname: string;
	CdnType: string;
	DomainStatus: string;
	GmtCreated: string;
	GmtModified: string;
	Description: string;
	SslProtocol: string;
	ResourceGroupId: string;
	Sandbox: string;
	Sources: Sources;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainsInDescribeUserDomains
export interface DomainsInDescribeUserDomains {
	PageData: PageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeUserDomainsResponse
export interface DescribeUserDomainsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Domains: DomainsInDescribeUserDomains;
}

