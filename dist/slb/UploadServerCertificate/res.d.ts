// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SubjectAlternativeNamesInUploadServerCertificate
export interface SubjectAlternativeNamesInUploadServerCertificate {
	SubjectAlternativeName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.UploadServerCertificateResponse
export interface UploadServerCertificateResponse {
	RequestId: string;
	ServerCertificateId: string;
	Fingerprint: string;
	ServerCertificateName: string;
	RegionId: string;
	RegionIdAlias: string;
	AliCloudCertificateId: string;
	AliCloudCertificateName: string;
	IsAliCloudCertificate: number;
	ResourceGroupId: string;
	CreateTime: string;
	CreateTimeStamp: number;
	ExpireTime: string;
	ExpireTimeStamp: number;
	CommonName: string;
	SubjectAlternativeNames: SubjectAlternativeNamesInUploadServerCertificate;
}

