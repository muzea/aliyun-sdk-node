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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IngressAclEntriesInDescribeNetworkAclAttributes
export interface IngressAclEntriesInDescribeNetworkAclAttributes {
	IngressAclEntry: IngressAclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Resource
export interface Resource {
	ResourceId: string;
	ResourceType: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ResourcesInDescribeNetworkAclAttributes
export interface ResourcesInDescribeNetworkAclAttributes {
	Resource: Resource[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.EgressAclEntriesInDescribeNetworkAclAttributes
export interface EgressAclEntriesInDescribeNetworkAclAttributes {
	EgressAclEntry: EgressAclEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NetworkAclAttribute
export interface NetworkAclAttribute {
	NetworkAclName: string;
	RegionId: string;
	NetworkAclId: string;
	CreationTime: string;
	VpcId: string;
	Status: string;
	Description: string;
	IngressAclEntries: IngressAclEntriesInDescribeNetworkAclAttributes;
	Resources: ResourcesInDescribeNetworkAclAttributes;
	EgressAclEntries: EgressAclEntriesInDescribeNetworkAclAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CreateNetworkAclResponse
export interface CreateNetworkAclResponse {
	RequestId: string;
	NetworkAclId: string;
	NetworkAclAttribute: NetworkAclAttribute;
}

