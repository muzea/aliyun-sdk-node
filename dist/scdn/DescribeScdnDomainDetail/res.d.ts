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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.SourcesInDescribeScdnDomainDetail
export interface SourcesInDescribeScdnDomainDetail {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DomainDetail
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
	Sources: SourcesInDescribeScdnDomainDetail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainDetailResponse
export interface DescribeScdnDomainDetailResponse {
	RequestId: string;
	DomainDetail: DomainDetail;
}

