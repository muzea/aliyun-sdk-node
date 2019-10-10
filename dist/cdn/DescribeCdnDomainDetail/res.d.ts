// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.SourceModel
export interface SourceModel {
	Content: string;
	Type: string;
	Port: number;
	Enabled: string;
	Priority: string;
	Weight: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.SourceModels
export interface SourceModels {
	SourceModel: SourceModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.GetDomainDetailModel
export interface GetDomainDetailModel {
	DomainName: string;
	Cname: string;
	HttpsCname: string;
	DomainStatus: string;
	CdnType: string;
	ServerCertificateStatus: string;
	GmtCreated: string;
	GmtModified: string;
	ResourceGroupId: string;
	Description: string;
	Scope: string;
	SourceModels: SourceModels;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnDomainDetailResponse
export interface DescribeCdnDomainDetailResponse {
	RequestId: string;
	GetDomainDetailModel: GetDomainDetailModel;
}

