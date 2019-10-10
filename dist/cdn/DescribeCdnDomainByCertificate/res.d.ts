// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CertInfo
export interface CertInfo {
	CertName: string;
	CertOrg: string;
	DomainList: string;
	Issuer: string;
	DomainNames: string;
	CertExpireTime: string;
	CertStatus: string;
	CertType: string;
	DomainName: string;
	DomainCnameStatus: string;
	ServerCertificate: string;
	ServerCertificateStatus: string;
	CertUpdateTime: string;
	CertSubjectCommonName: string;
	CertCommonName: string;
	CertCaIsLegacy: string;
	Status: string;
	CertExpired: string;
	CertDomainName: string;
	CertLife: string;
	CertStartTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CertInfosInDescribeCdnDomainByCertificate
export interface CertInfosInDescribeCdnDomainByCertificate {
	CertInfo: CertInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnDomainByCertificateResponse
export interface DescribeCdnDomainByCertificateResponse {
	RequestId: string;
	CertInfos: CertInfosInDescribeCdnDomainByCertificate;
}

