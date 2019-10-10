// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Cert
export interface Cert {
	CertName: string;
	CertId: number;
	Fingerprint: string;
	Common: string;
	Issuer: string;
	LastTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CertList
export interface CertList {
	Cert: Cert[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.CertificateListModel
export interface CertificateListModel {
	Count: number;
	CertList: CertList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodCertificateListResponse
export interface DescribeVodCertificateListResponse {
	RequestId: string;
	CertificateListModel: CertificateListModel;
}

