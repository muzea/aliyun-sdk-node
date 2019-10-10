// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DnsListInQueryDomainByDomainName
export interface DnsListInQueryDomainByDomainName {
	Dns: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDomainByDomainNameResponse
export interface QueryDomainByDomainNameResponse {
	UserId: string;
	DomainName: string;
	InstanceId: string;
	RegistrationDate: string;
	ExpirationDate: string;
	RegistrantOrganization: string;
	RegistrantName: string;
	Email: string;
	UpdateProhibitionLock: string;
	TransferProhibitionLock: string;
	DomainNameProxyService: boolean;
	Premium: boolean;
	EmailVerificationStatus: number;
	EmailVerificationClientHold: boolean;
	RealNameStatus: string;
	RegistrantUpdatingStatus: string;
	TransferOutStatus: string;
	RegistrantType: string;
	DomainNameVerificationStatus: string;
	RequestId: string;
	ZhRegistrantOrganization: string;
	ZhRegistrantName: string;
	RegistrationDateLong: number;
	ExpirationDateLong: number;
	DnsList: DnsListInQueryDomainByDomainName;
}

