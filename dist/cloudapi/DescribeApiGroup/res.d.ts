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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.CustomDomains
export interface CustomDomains {
	DomainItem: DomainItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.StageInfo
export interface StageInfo {
	StageId: string;
	StageName: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.StageItems
export interface StageItems {
	StageInfo: StageInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiGroupResponse
export interface DescribeApiGroupResponse {
	RequestId: string;
	GroupId: string;
	GroupName: string;
	SubDomain: string;
	Description: string;
	CreatedTime: string;
	ModifiedTime: string;
	RegionId: string;
	Status: string;
	BillingStatus: string;
	IllegalStatus: string;
	TrafficLimit: number;
	VpcDomain: string;
	InstanceType: string;
	InstanceId: string;
	HttpsPolicy: string;
	CustomDomains: CustomDomains;
	StageItems: StageItems;
}

