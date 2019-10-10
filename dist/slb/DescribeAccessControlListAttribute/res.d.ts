// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AclEntry
export interface AclEntry {
	AclEntryIP: string;
	AclEntryComment: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.AclEntrys
export interface AclEntrys {
	AclEntry: AclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RelatedListener
export interface RelatedListener {
	LoadBalancerId: string;
	ListenerPort: number;
	AclType: string;
	Protocol: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.RelatedListeners
export interface RelatedListeners {
	RelatedListener: RelatedListener[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeAccessControlListAttributeResponse
export interface DescribeAccessControlListAttributeResponse {
	RequestId: string;
	AclId: string;
	AclName: string;
	AddressIPVersion: string;
	ResourceGroupId: string;
	AclEntrys: AclEntrys;
	RelatedListeners: RelatedListeners;
}

