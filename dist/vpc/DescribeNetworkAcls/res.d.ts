// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IngressAclEntry
export interface IngressAclEntry {
	Protocol: string;
	NetworkAclEntryId: string;
	Port: string;
	SourceCidrIp: string;
	NetworkAclEntryName: string;
	EntryType: string;
	Policy: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IngressAclEntriesInDescribeNetworkAcls
export interface IngressAclEntriesInDescribeNetworkAcls {
	IngressAclEntry: IngressAclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EgressAclEntry
export interface EgressAclEntry {
	DestinationCidrIp: string;
	Protocol: string;
	NetworkAclEntryId: string;
	Port: string;
	NetworkAclEntryName: string;
	EntryType: string;
	Policy: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EgressAclEntriesInDescribeNetworkAcls
export interface EgressAclEntriesInDescribeNetworkAcls {
	EgressAclEntry: EgressAclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Resource
export interface Resource {
	ResourceId: string;
	ResourceType: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ResourcesInDescribeNetworkAcls
export interface ResourcesInDescribeNetworkAcls {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NetworkAcl
export interface NetworkAcl {
	NetworkAclId: string;
	RegionId: string;
	NetworkAclName: string;
	Description: string;
	VpcId: string;
	CreationTime: string;
	Status: string;
	IngressAclEntries: IngressAclEntriesInDescribeNetworkAcls;
	EgressAclEntries: EgressAclEntriesInDescribeNetworkAcls;
	Resources: ResourcesInDescribeNetworkAcls;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NetworkAcls
export interface NetworkAcls {
	NetworkAcl: NetworkAcl[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeNetworkAclsResponse
export interface DescribeNetworkAclsResponse {
	RequestId: string;
	TotalCount: string;
	PageNumber: string;
	PageSize: string;
	NetworkAcls: NetworkAcls;
}

