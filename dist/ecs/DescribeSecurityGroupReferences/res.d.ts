// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ReferencingSecurityGroup
export interface ReferencingSecurityGroup {
	AliUid: string;
	SecurityGroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ReferencingSecurityGroups
export interface ReferencingSecurityGroups {
	ReferencingSecurityGroup: ReferencingSecurityGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroupReference
export interface SecurityGroupReference {
	SecurityGroupId: string;
	ReferencingSecurityGroups: ReferencingSecurityGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroupReferences
export interface SecurityGroupReferences {
	SecurityGroupReference: SecurityGroupReference[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSecurityGroupReferencesResponse
export interface DescribeSecurityGroupReferencesResponse {
	RequestId: string;
	SecurityGroupReferences: SecurityGroupReferences;
}

