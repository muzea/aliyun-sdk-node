// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SubjectAlternativeNamesInDescribeServerCertificates
export interface SubjectAlternativeNamesInDescribeServerCertificates {
	SubjectAlternativeName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagsInDescribeServerCertificates
export interface TagsInDescribeServerCertificates {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ServerCertificate
export interface ServerCertificate {
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
	SubjectAlternativeNames: SubjectAlternativeNamesInDescribeServerCertificates;
	Tags: TagsInDescribeServerCertificates;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ServerCertificates
export interface ServerCertificates {
	ServerCertificate: ServerCertificate[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeServerCertificatesResponse
export interface DescribeServerCertificatesResponse {
	RequestId: string;
	ServerCertificates: ServerCertificates;
}

