// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DomainItem
export interface DomainItem {
	DomainRemark: string;
	DomainName: string;
	DomainCNAMEStatus: string;
	CertificateId: string;
	DomainWebSocketStatus: string;
	DomainLegalStatus: string;
	CertificateName: string;
	DomainBindingStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Domains
export interface Domains {
	DomainItem: DomainItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribePurchasedApiGroupResponse
export interface DescribePurchasedApiGroupResponse {
	RequestId: string;
	GroupId: string;
	GroupName: string;
	Description: string;
	PurchasedTime: string;
	RegionId: string;
	Status: string;
	Domains: Domains;
}

