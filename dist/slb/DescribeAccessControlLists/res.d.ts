// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.TagsInDescribeAccessControlLists
export interface TagsInDescribeAccessControlLists {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Acl
export interface Acl {
	AclId: string;
	AclName: string;
	AddressIPVersion: string;
	ResourceGroupId: string;
	Tags: TagsInDescribeAccessControlLists;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Acls
export interface Acls {
	Acl: Acl[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeAccessControlListsResponse
export interface DescribeAccessControlListsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	Count: number;
	PageNumber: number;
	Acls: Acls;
}

