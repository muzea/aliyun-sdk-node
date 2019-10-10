// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.Source
export interface Source {
	Port: number;
	Content: string;
	Enabled: string;
	Priority: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.SourcesInDescribeScdnUserDomains
export interface SourcesInDescribeScdnUserDomains {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.PageData
export interface PageData {
	DomainName: string;
	Cname: string;
	DomainStatus: string;
	GmtCreated: string;
	GmtModified: string;
	Description: string;
	SSLProtocol: string;
	ResourceGroupId: string;
	Sandbox: string;
	Sources: SourcesInDescribeScdnUserDomains;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.Domains
export interface Domains {
	PageData: PageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnUserDomainsResponse
export interface DescribeScdnUserDomainsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Domains: Domains;
}

