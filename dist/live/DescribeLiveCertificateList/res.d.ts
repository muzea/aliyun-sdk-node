// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Cert
export interface Cert {
	CertName: string;
	CertId: number;
	Fingerprint: string;
	Common: string;
	Issuer: string;
	LastTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CertList
export interface CertList {
	Cert: Cert[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CertificateListModel
export interface CertificateListModel {
	Count: number;
	CertList: CertList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveCertificateListResponse
export interface DescribeLiveCertificateListResponse {
	RequestId: string;
	CertificateListModel: CertificateListModel;
}

