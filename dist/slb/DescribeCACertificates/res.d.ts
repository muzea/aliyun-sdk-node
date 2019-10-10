// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagsInDescribeCACertificates
export interface TagsInDescribeCACertificates {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.CACertificate
export interface CACertificate {
	RegionId: string;
	CACertificateId: string;
	CACertificateName: string;
	Fingerprint: string;
	ResourceGroupId: string;
	CreateTime: string;
	CreateTimeStamp: number;
	ExpireTime: string;
	ExpireTimeStamp: number;
	CommonName: string;
	Tags: TagsInDescribeCACertificates;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.CACertificates
export interface CACertificates {
	CACertificate: CACertificate[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeCACertificatesResponse
export interface DescribeCACertificatesResponse {
	RequestId: string;
	CACertificates: CACertificates;
}

