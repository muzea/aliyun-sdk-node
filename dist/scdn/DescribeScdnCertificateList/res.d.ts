// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.Cert
export interface Cert {
	CertName: string;
	CertId: number;
	Fingerprint: string;
	Common: string;
	Issuer: string;
	LastTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.CertList
export interface CertList {
	Cert: Cert[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.CertificateListModel
export interface CertificateListModel {
	Count: number;
	CertList: CertList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnCertificateListResponse
export interface DescribeScdnCertificateListResponse {
	RequestId: string;
	CertificateListModel: CertificateListModel;
}

