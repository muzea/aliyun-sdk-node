// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AclEntry
export interface AclEntry {
	AclEntryId: string;
	AclEntryIp: string;
	AclEntryComment: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AclEntries
export interface AclEntries {
	AclEntry: AclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIPv6TranslatorAclListAttributesResponse
export interface DescribeIPv6TranslatorAclListAttributesResponse {
	RequestId: string;
	AclId: string;
	AclName: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	AclEntries: AclEntries;
}

