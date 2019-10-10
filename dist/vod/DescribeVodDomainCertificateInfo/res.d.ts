// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CertInfo
export interface CertInfo {
	DomainName: string;
	CertName: string;
	CertDomainName: string;
	CertExpireTime: string;
	CertLife: string;
	CertOrg: string;
	CertType: string;
	ServerCertificateStatus: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CertInfos
export interface CertInfos {
	CertInfo: CertInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainCertificateInfoResponse
export interface DescribeVodDomainCertificateInfoResponse {
	RequestId: string;
	CertInfos: CertInfos;
}

