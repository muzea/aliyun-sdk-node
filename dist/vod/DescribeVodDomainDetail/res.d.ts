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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SourcesInDescribeVodDomainDetail
export interface SourcesInDescribeVodDomainDetail {
	Source: Source[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DomainDetail
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
	Weight: string;
	Sources: SourcesInDescribeVodDomainDetail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainDetailResponse
export interface DescribeVodDomainDetailResponse {
	RequestId: string;
	DomainDetail: DomainDetail;
}

