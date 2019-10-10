// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Source
export interface Source {
	Port: number;
	Content: string;
	Enabled: string;
	Priority: string;
	Weight: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.SourcesInDescribeDcdnUserDomains
export interface SourcesInDescribeDcdnUserDomains {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.PageData
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
	Sources: SourcesInDescribeDcdnUserDomains;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Domains
export interface Domains {
	PageData: PageData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnUserDomainsResponse
export interface DescribeDcdnUserDomainsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Domains: Domains;
}

