// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Cert
export interface Cert {
	CertName: string;
	CertId: number;
	Fingerprint: string;
	Common: string;
	Issuer: string;
	LastTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.CertList
export interface CertList {
	Cert: Cert[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.CertificateListModel
export interface CertificateListModel {
	Count: number;
	CertList: CertList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnCertificateListResponse
export interface DescribeDcdnCertificateListResponse {
	RequestId: string;
	CertificateListModel: CertificateListModel;
}

