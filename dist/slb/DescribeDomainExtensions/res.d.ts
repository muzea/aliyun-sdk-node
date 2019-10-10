// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DomainExtension
export interface DomainExtension {
	Domain: string;
	ServerCertificateId: string;
	DomainExtensionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DomainExtensionsInDescribeDomainExtensions
export interface DomainExtensionsInDescribeDomainExtensions {
	DomainExtension: DomainExtension[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeDomainExtensionsResponse
export interface DescribeDomainExtensionsResponse {
	RequestId: string;
	DomainExtensions: DomainExtensionsInDescribeDomainExtensions;
}

