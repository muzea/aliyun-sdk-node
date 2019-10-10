// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SecurityGroup
export interface SecurityGroup {
	SecurityGroupId: string;
	EcsCount: number;
	CreationTime: string;
	SecurityGroupName: string;
	VpcId: string;
	Description: string;
	AvailableInstanceAmount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AvailableGroupList
export interface AvailableGroupList {
	SecurityGroup: SecurityGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SecurityGroupAttribute
export interface SecurityGroupAttribute {
	BizType: string;
	BizContent: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SecurityGroupAttributeList
export interface SecurityGroupAttributeList {
	SecurityGroupAttribute: SecurityGroupAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeSecurityGroupAttributeResponse
export interface DescribeSecurityGroupAttributeResponse {
	RequestId: string;
	AvailableGroupList: AvailableGroupList;
	SecurityGroupAttributeList: SecurityGroupAttributeList;
}

