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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryDomainList
export interface DataInQueryDomainList {
	Domain: Domain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDomainListResponse
export interface QueryDomainListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInQueryDomainList;
}

