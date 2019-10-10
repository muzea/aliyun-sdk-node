// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DnsListInScrollDomainList
export interface DnsListInScrollDomainList {
	Dns: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Domain
export interface Domain {
	RegistrationDate: string;
	RegistrationDateLong: number;
	ZhRegistrantOrganization: string;
	DomainStatus: string;
	Email: string;
	DomainType: string;
	Remark: string;
	DomainName: string;
	ProductId: string;
	ExpirationDateStatus: string;
	ExpirationDateLong: number;
	RegistrantType: string;
	ExpirationDate: string;
	Premium: boolean;
	DomainAuditStatus: string;
	DomainGroupName: string;
	InstanceId: string;
	ExpirationCurrDateDiff: number;
	RegistrantOrganization: string;
	DomainGroupId: string;
	DnsList: DnsListInScrollDomainList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryAdvancedDomainList
export interface DataInQueryAdvancedDomainList {
	Domain: Domain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryAdvancedDomainListResponse
export interface QueryAdvancedDomainListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInQueryAdvancedDomainList;
}

