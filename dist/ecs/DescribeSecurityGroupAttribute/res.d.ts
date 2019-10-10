// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Permission
export interface Permission {
	IpProtocol: string;
	PortRange: string;
	SourcePortRange: string;
	SourceGroupId: string;
	SourceGroupName: string;
	SourceCidrIp: string;
	Ipv6SourceCidrIp: string;
	Policy: string;
	NicType: string;
	SourceGroupOwnerAccount: string;
	DestGroupId: string;
	DestGroupName: string;
	DestCidrIp: string;
	Ipv6DestCidrIp: string;
	DestGroupOwnerAccount: string;
	Priority: string;
	Direction: string;
	Description: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Permissions
export interface Permissions {
	Permission: Permission[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSecurityGroupAttributeResponse
export interface DescribeSecurityGroupAttributeResponse {
	RequestId: string;
	RegionId: string;
	SecurityGroupId: string;
	Description: string;
	SecurityGroupName: string;
	VpcId: string;
	InnerAccessPolicy: string;
	Permissions: Permissions;
}

