// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DomainDetail
export interface DomainDetail {
	GmtCreated: string;
	GmtModified: string;
	DomainStatus: string;
	Cname: string;
	DomainName: string;
	LiveDomainType: string;
	Region: string;
	Description: string;
	SSLProtocol: string;
	SSLPub: string;
	Scope: string;
	CertName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainDetailResponse
export interface DescribeLiveDomainDetailResponse {
	RequestId: string;
	DomainDetail: DomainDetail;
}

