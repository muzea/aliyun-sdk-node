// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Acl
export interface Acl {
	AclId: string;
	Name: string;
	SagCount: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Acls
export interface Acls {
	Acl: Acl[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeACLsResponse
export interface DescribeACLsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Acls: Acls;
}

