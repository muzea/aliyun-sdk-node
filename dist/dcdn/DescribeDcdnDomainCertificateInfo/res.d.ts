// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.CertInfo
export interface CertInfo {
	DomainName: string;
	CertName: string;
	CertDomainName: string;
	CertExpireTime: string;
	CertLife: string;
	CertOrg: string;
	CertType: string;
	SSLProtocol: string;
	Status: string;
	SSLPub: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.CertInfos
export interface CertInfos {
	CertInfo: CertInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainCertificateInfoResponse
export interface DescribeDcdnDomainCertificateInfoResponse {
	RequestId: string;
	CertInfos: CertInfos;
}

