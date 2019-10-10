// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.IpControlPolicyItem
export interface IpControlPolicyItem {
	AppId: string;
	CidrIp: string;
	PolicyItemId: string;
	CreateTime: string;
	ModifiedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.IpControlPolicyItems
export interface IpControlPolicyItems {
	IpControlPolicyItem: IpControlPolicyItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeIpControlPolicyItemsResponse
export interface DescribeIpControlPolicyItemsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	IpControlPolicyItems: IpControlPolicyItems;
}

