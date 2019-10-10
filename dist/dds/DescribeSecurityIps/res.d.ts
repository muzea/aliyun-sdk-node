// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SecurityIpGroup
export interface SecurityIpGroup {
	SecurityIpGroupName: string;
	SecurityIpGroupAttribute: string;
	SecurityIpList: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.SecurityIpGroupsInDescribeSecurityIps
export interface SecurityIpGroupsInDescribeSecurityIps {
	SecurityIpGroup: SecurityIpGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeSecurityIpsResponse
export interface DescribeSecurityIpsResponse {
	RequestId: string;
	SecurityIps: string;
	SecurityIpGroups: SecurityIpGroupsInDescribeSecurityIps;
}

