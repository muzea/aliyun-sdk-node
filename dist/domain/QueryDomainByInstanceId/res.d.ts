// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DnsListInQueryDomainByInstanceId
export interface DnsListInQueryDomainByInstanceId {
	Dns: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDomainByInstanceIdResponse
export interface QueryDomainByInstanceIdResponse {
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
	DnsList: DnsListInQueryDomainByInstanceId;
}

