// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Source
export interface Source {
	Port: number;
	Content: string;
	Enabled: string;
	Priority: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SourcesInDescribeVodUserDomains
export interface SourcesInDescribeVodUserDomains {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PageData
export interface PageData {
	DomainName: string;
	Cname: string;
	CdnType: string;
	DomainStatus: string;
	GmtCreated: string;
	GmtModified: string;
	Description: string;
	SslProtocol: string;
	Weight: string;
	Sandbox: string;
	Sources: SourcesInDescribeVodUserDomains;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Domains
export interface Domains {
	PageData: PageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodUserDomainsResponse
export interface DescribeVodUserDomainsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Domains: Domains;
}

