// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SecurityIpGroup
export interface SecurityIpGroup {
	SecurityIpGroupName: string;
	SecurityIpGroupAttribute: string;
	SecurityIpList: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.SecurityIpGroups
export interface SecurityIpGroups {
	SecurityIpGroup: SecurityIpGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeSecurityIpsResponse
export interface DescribeSecurityIpsResponse {
	RequestId: string;
	SecurityIpGroups: SecurityIpGroups;
}

