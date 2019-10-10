// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IPv6TranslatorAcl
export interface IPv6TranslatorAcl {
	AclId: string;
	AclName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6TranslatorAcls
export interface Ipv6TranslatorAcls {
	IPv6TranslatorAcl: IPv6TranslatorAcl[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIPv6TranslatorAclListsResponse
export interface DescribeIPv6TranslatorAclListsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6TranslatorAcls: Ipv6TranslatorAcls;
}

