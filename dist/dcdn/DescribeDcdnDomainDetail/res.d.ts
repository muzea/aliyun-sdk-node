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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.SourcesInDescribeDcdnDomainDetail
export interface SourcesInDescribeDcdnDomainDetail {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DomainDetail
export interface DomainDetail {
	GmtCreated: string;
	GmtModified: string;
	DomainStatus: string;
	Cname: string;
	DomainName: string;
	Description: string;
	SSLProtocol: string;
	SSLPub: string;
	Scope: string;
	CertName: string;
	ResourceGroupId: string;
	Sources: SourcesInDescribeDcdnDomainDetail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainDetailResponse
export interface DescribeDcdnDomainDetailResponse {
	RequestId: string;
	DomainDetail: DomainDetail;
}

